import './Login.css'
import axios from 'axios';
import { UserToken, loginInfo,OneUser } from '../types/app';
import { useMutation, useQuery } from '@tanstack/react-query';
import { setUser,resetUser } from '../redux/user';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ReusableComponents/Button.style';
import CircularProgress from '@mui/material/CircularProgress';


type TLogin={
    setToken: (userToken: UserToken) => void;
    user: OneUser;
    dispatch: (e: any) => OneUser;
    setSignup: (e: boolean) => boolean;
    token:string
}
function Login({ setToken,  user, dispatch, setSignup }: TLogin) {
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
        checkUser(values.password, values.username)

        },

        validateOnChange:true
    })


const getUserInfo=()=> {
    return axios.get('https://hypershop-db.vercel.app/users')
}
    const { data:UsersInfoArray} = useQuery({
        queryKey: ['users'],
        queryFn: getUserInfo,
        select: (data) => data.data as OneUser[],
        
    })

function loginUser(info:loginInfo) {
    return axios.post('https://hypershop-db.vercel.app/token', info)
}

    const {mutate,status} = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setToken( data?.data)

        },

    })

    function checkUser(password: string, username: string) {
    const existeduser = UsersInfoArray?.find((user: OneUser) => user.username === username)
        if (existeduser?.password === password && existeduser?.username === username) {
        mutate({
        username: values.username,
        password: values.password
        })
        navigate('/')
    }
}

    function FormhandleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()
    handleSubmit()
}
    function handleBlurLogin(username: string) {
        dispatch(resetUser())
        const existeduser = UsersInfoArray?.find((user: OneUser) => user.username === username)
        if (existeduser) {
            dispatch(setUser(existeduser))
        }
    }


return (
    <div className='container-fluid overflow-hidden'>
        <div className='row'>
            <div className='login col-12 p-0 position-relative min-vh-100 d-flex justify-content-center align-items-center flex-column'>
                <div className='loginCircle col-12 position-absolute'></div>
                <div className='loginCircle col-12 position-absolute'></div>
                <div className='col-12 logo p-2 text-center'>HyperShop</div>
                <form onSubmit={FormhandleSubmit} autoComplete='off' className='col-5 p-3 d-flex position-relative z-3 flex-column justify-content-center align-items-center overflow-hidden '>
                    <div className='formBackground position-absolute col-12'></div>
                    <legend className='col-8 text-center p-3'>Login</legend>
                        <input
                        onChange={handleChange}
                        placeholder='Username'
                        className='mb-2 col-9 py-3 px-2 rounded'
                        type='text'
                        name='username'
                        value={values.username}
                        onBlur={() => { handleBlurLogin(values.username)}}
                        autoComplete='current-username'
                    />
                    {errors.username && touched.username && <p style={{ color: 'red' }} className=' col-9  mb-2'>{errors.username}</p>}
                        <input
                        onChange={handleChange}
                        className='mb-3 col-9 py-3 px-2 rounded'
                        placeholder='Password'
                        type='password'
                        onBlur={handleBlur}
                        name='password'
                        value={values.password}
                        autoComplete='current-password'
                    />
                    {errors.password && touched.password && <p style={{ color: 'red' }} className=' col-9 text-start mb-2'>{errors.password}</p> }
                    <Button className='col-3 rounded d-flex justify-content-center align-items-center p-2' type='submit'>Sign in{status==='pending' && <CircularProgress className='ms-2' size={24} sx={{color:'white'}} />}</Button>
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