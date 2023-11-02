import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Button } from '../ReusableComponents/Button.style';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { OneUser } from '../../types/app';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import './backdrop.css'
import { setUser } from '../../redux/user';
import { CircularProgress } from '@mui/material';



type TBackDrop = {
    refetch: () => void;
    notify: (e:string)=>void
}
export default function SimpleBackdrop({refetch,notify}: TBackDrop) {
    const user = useSelector(({ user }: { user: { user: OneUser } }) => user.user) 
    const dispatch = useDispatch()
    const schema = yup.object().shape({
        name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password')], 'Passwords do not match'),
        username : yup.string().required('Username is required').min(3, 'Username must be at least 3 characters')
    })
    const {values,handleSubmit,handleBlur,handleChange,errors,touched,isValid}=useFormik({
        initialValues: {
            name: user.name,
            email: user.email,
            password: user.password,
            username: user.username,
            confirmPassword: user.password
        },
        onSubmit: (value) => {
        },
        validationSchema: schema
    })
const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
};
const handleOpen = () => {
    setOpen(true);
};
    function updateProfile(id:number) {
        return  axios.put(`http://localhost:3001/users/${id}`,{...user,name:values.name,email:values.email,username:values.username,password:values.password} )
    }
    const {mutate,isPending}=useMutation({
        mutationFn: updateProfile,
        onSuccess: (data) => {
            handleClose()
            refetch()
            dispatch(setUser(data.data))
            notify('Profile updated successfully')
        }
    })
    
    function handleSubmitForm(id: number, e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        mutate(id)
        handleSubmit()
    }

return (
    <div className='col-12 backdropContainer '>
    <Button className='col-12 rounded p-2' onClick={handleOpen}>Edit profile</Button>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        className=' d-flex  justify-content-center align-items-center'
        >
            <form method='PUT' onSubmit={(e) => handleSubmitForm(user.id, e)} style={{backgroundColor: 'white'}} className='col-10 p-3 d-flex flex-column align-items-center justify-content-center rounded overflow-hidden'>
                <div className='col-8 d-flex justify-content-md-around flex-column flex-md-row'>
                    <label style={{color: 'black'}} className='col-md-2 col-12 d-flex justify-content-center align-items-center' htmlFor="name">Name</label>
                <input
                    className='col-md-9 col-12 mb-3'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='name'
                        placeholder='Name'
                        id='name'
                />
                </div>
                
                {errors.name && touched.name ? <p className='text-danger'>{errors.name}</p> : null}
                <div className='col-8 d-flex justify-content-md-around flex-column flex-md-row'>
                    <label style={{color: 'black'}} className='col-md-2  col-12 d-flex justify-content-center align-items-center' htmlFor="email">Email</label>
                    <input
                    className='col-md-9 col-12 mb-3'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='email'
                        placeholder='Email'
                        id='email'
                />
                </div>
                {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : null}
                <div className='col-8 d-flex justify-content-md-around flex-column flex-md-row'>
                    <label style={{color: 'black'}} className='col-md-2 col-12 d-flex justify-content-center align-items-center' htmlFor="username">Username</label>
                    <input
                    className='col-md-9 col-12 mb-3'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='username'
                        placeholder='Username'
                        id='username'
                />
                </div>
                {errors.username && touched.username ? <p className='text-danger'>{errors.username}</p> : null}
                <div className='col-8 d-flex justify-content-md-around flex-column flex-md-row'>
                    <label style={{color: 'black'}} className='col-md-2 col-12 d-flex justify-content-center align-items-center' htmlFor="pw">Password</label>
                    <input
                    className='col-md-9 col-12 mb-3'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='password'
                    name='password'
                        placeholder='Password'
                        id='pw'
                />
                </div>
                {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : null}
                <div className='col-8 d-flex justify-content-md-around flex-column flex-md-row'>
                    <label style={{color: 'black'}} className='col-md-2 col-12 d-flex justify-content-center align-items-center' htmlFor="cp">Confirm Password</label>
                    <input
                className='col-md-9 col-12 mb-3'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type='password'
                    name='confirmPassword'
                        placeholder='Confirm Password'
                        id='cp'
                />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? <p className='text-danger'>{errors.confirmPassword}</p> : null}
                <Button disabled={!isValid} type='submit' className='col-md-2 col-6 rounded d-flex justify-content-center p-1 '>Submit {isPending ? <div className=' col-4 d-flex align-items-center justify-content-center'><CircularProgress color="inherit" size={20} /></div> : null}</Button>
               
            </form>
        </Backdrop>
    </div>
    );
}