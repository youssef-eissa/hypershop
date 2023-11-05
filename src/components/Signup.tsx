import React from 'react';
import './signup.css'
import * as yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';
import { useQuery,useMutation } from '@tanstack/react-query';
import { UserInfo } from '../types/app';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState } from 'react';
import ResponsiveDialog from './materialUI/dialog';




const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type TSignup={
    setSignup: (e:boolean)=>boolean;
}
function Signup({setSignup}: TSignup) {
        const [NotificationOpen, setNotificationOpen] = useState(false);
        const handleClick = () => {
    setNotificationOpen(true);
        };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }

    setNotificationOpen(false);
    };

    const schema = yup.object().shape({
        fullname: yup.string().required('Full name is required'),
        username: yup.string().required('Username is required'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password')], 'Passwords do not match', )
    })

    const { mutate ,isSuccess,status} = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            handleClick()
                console.log(data);
                
            
        }
    })
    
    

    const { values, handleSubmit, handleReset, handleBlur, handleChange, errors, touched} = useFormik({
        initialValues: {
            fullname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (UsersInfoArray&&values.fullname&&values.username&&values.email&&values.password&&values.confirmPassword) {
            mutate({
            id: UsersInfoArray[UsersInfoArray.length - 1].id + 1,
            name: values.fullname,
            username: values.username,
            email: values.email,
            password: values.password,
            carts: []
        })
            }
            handleReset(values)
        },
    })
    function getUsers() {
        return axios.get('https://hypershop-db.vercel.app/users')
    }
    const { data:UsersInfoArray} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        select: (data) => data.data as UserInfo[],

    })

    function loginUser(info:UserInfo) {
        return  axios.post('https://hypershop-db.vercel.app/users', info)
    }



    function handleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSubmit()
    }


return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 p-0 min-vh-100 d-flex justify-content-center align-items-center'>
                <div className='signup p-5 rounded col-12 flex-column-reverse flex-md-row d-flex'>
                    <form onSubmit={handleForm} autoComplete='off' className='col-md-6 col-12 d-flex flex-column align-items-center'>
                        <h1 className='col-12 mb-3'>Create an account</h1>

                        <label className='col-11 mb-2' htmlFor='Name'>Full Name <span>*</span>
                        </label>
                        <input
                            id='Name'
                            className='col-11 p-2 rounded mb-2'
                            type='text'
                            placeholder='Name'
                            value={values.fullname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='fullname'
                        />
                        {touched.fullname && errors.fullname && <p style={{ color: 'red' }} className='col-11'>{errors.fullname}</p>}

                        <label className='col-11 mb-2' htmlFor='username'>Username <span>*</span></label>
                        <input
                            id='username'
                            className='col-11 p-2 rounded mb-2'
                            type='text'
                            placeholder='Username'
                            value={values.username}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='username'
                        />
                        {touched.username && errors.username && <p style={{ color: 'red' }} className='col-11'>{errors.username}</p>}

                        <label className='col-11 mb-2' htmlFor='email'>Email <span>*</span></label>
                        <input
                            id='email'
                            className='col-11 p-2 rounded mb-2'
                            type='email'
                            placeholder='email'
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='email'
                        />
                        {touched.email && errors.email && <p style={{ color: 'red' }} className='col-11'>{errors.email}</p>}

                        <label className='col-11 mb-2' htmlFor='password'>Password <span>*</span></label>
                        <input
                            id='password'
                            className='col-11 p-2 rounded mb-2'
                            type='password'
                            placeholder='password'
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='password'
                            autoComplete='off'
                        />
                        {touched.password && errors.password && <p style={{ color: 'red' }} className='col-11'>{errors.password}</p>}

                        <label className='col-11 mb-2' htmlFor='confirm'>Confirm Password <span>*</span></label>

                        <input
                            id='confirm'
                            className='col-11 p-2 rounded mb-2'
                            type='password'
                            placeholder='Confirm Password'
                            value={values.confirmPassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='confirmPassword'
                            autoComplete='off'
                        />
                        {touched.confirmPassword && errors.confirmPassword && <p style={{ color: 'red' }} className='col-11'>{errors.confirmPassword}</p>}
                        <button type='submit' className='btn mt-3 mt-md-0 btn-primary col-7 d-flex align-items-center justify-content-center'>Register {status==='pending' && <CircularProgress className='ms-2' size={24} sx={{color:'white'}} />}</button>
                    </form>
                    <Snackbar open={NotificationOpen} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Account created successfully
                    </Alert>
                    </Snackbar>
                    {isSuccess && <ResponsiveDialog setSignup={setSignup as (e: boolean) => boolean} />}
                    <div className='col-md-6 col-12 mb-3 mb-md-0 rounded overflow-hidden position-relative welcomeBox'>
                        <img alt='signupImg' className='img-fluid h-100' src={require('../assets/signup.jpeg')} />
                        <div className='position-absolute z-3 col-12'>Welcome to <span>HyperShop</span>
                        </div>
                        <div className='overlay position-absolute z-2'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Signup