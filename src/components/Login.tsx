import './Login.css'
import axios from 'axios';
import { UserToken, loginInfo,UserInfo } from '../types/app';
import { useMutation, useQuery } from '@tanstack/react-query';
import { setUser,resetUser } from '../redux/user';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';





type TLogin={
    setToken: (userToken: UserToken) => void;
    setcorrectPassword: (e:boolean)=>boolean;
    user: UserInfo;
    dispatch: (e: any) => UserInfo;
    setSignup: (e:boolean)=>boolean;
}
function Login({ setToken, setcorrectPassword, user, dispatch, setSignup }: TLogin) {
    const navigate = useNavigate()

    const schema =yup.object().shape({
        username: yup.string().required('Username is required').oneOf([user.username], 'Username is incorrect'),
        password: yup.string().required('Password is required').oneOf([user.password], 'Password is incorrect')
    })
    const {values,handleSubmit,handleReset,handleBlur,handleChange,errors,touched}=useFormik({
        initialValues:{
            username :'',
            password:''
        },
        validationSchema: schema,
        onSubmit: (value) => {
            handleReset(value)
        },

        validateOnChange:true
    })


const getUserInfo=()=> {
    return axios.get('http://localhost:3001/users')
}
    const { data:UsersInfoArray,isSuccess} = useQuery({
        queryKey: ['users'],
        queryFn: getUserInfo,
        select: (data) => data.data as UserInfo[]
    })


    const {mutate}=useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setToken(data.data.token)
            navigate('/')
        }
    })
    
async function checkUser(password: string,username:string) {
    const existeduser = UsersInfoArray?.find((user: UserInfo) => user.username === username) 
    mutate({
        username: values.username,
        password: values.password
    })
    if (existeduser?.password === password && isSuccess && existeduser?.username === username) {
        setcorrectPassword(true)
    }
}



async function loginUser(info:loginInfo) {
    return axios.post('http://localhost:8080/login',info )
}

function FormhandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleSubmit()
    checkUser(values.password,values.username)
}
    function handleBlurLogin(username: string) {
        dispatch(resetUser())
        const existeduser = UsersInfoArray?.find((user: UserInfo) => user.username === username)
        if (existeduser) {
        dispatch(setUser(existeduser))
        }
    }


return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='login col-12 p-0 position-relative min-vh-100 d-flex justify-content-center align-items-center flex-column'>
                <div className='col-12 logo p-2 text-center'>HyperShop</div>
                <form onSubmit={FormhandleSubmit} autoComplete='off' className='col-5 p-3 d-flex flex-column justify-content-center align-items-center '>
                    <legend className='col-12 text-center p-3'>Login</legend>
                        <input
                        onChange={handleChange}
                        placeholder='Username'
                        className='mb-2 col-11 py-3 px-2 rounded'
                        type='text'
                        name='username'
                        value={values.username}
                        onBlur={() => { handleBlurLogin(values.username)}}
                        autoComplete='current-username'
                    />
                    {errors.username && touched.username && <p style={{ color: 'red' }} className=' col-11 text-start mb-2'>{errors.username}</p>}
                        <input
                        onChange={handleChange}
                        className='mb-3 col-11 py-3 px-2 rounded'
                        placeholder='Password'
                        type='password'
                        onBlur={handleBlur}
                        name='password'
                        value={values.password}
                        autoComplete='current-password'
                    />
                    {errors.password && touched.password && <p style={{ color: 'red' }} className=' col-11 text-start mb-2'>{errors.password}</p> }
                    <button className='col-3 rounded d-flex justify-content-center align-items-center p-2' type='submit'>Submit</button>
                    <div className='col-12 d-flex justify-content-center align-items-center  mt-2 SignUpLinkCon flex-column'>
                        <span className='col-12 text-center my-2'>Don't have an account?</span>
                        <Link reloadDocument onClick={() =>setSignup(true)} className=' col-3 text-center ms-2 SignUpLink rounded p-2 ' to='/signup'>Sign Up</Link> </div>

                </form>
            </div>
        </div>
    </div>
)
}

export default Login