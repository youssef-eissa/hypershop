import { Link } from 'react-router-dom';
import './footer.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as yup from 'yup'
import { useFormik } from 'formik';
import SendIcon from '@mui/icons-material/Send';
function Footer() {
    const schema = yup.object().shape({
        email: yup.string().required('Email is required').email('Email is invalid'),
    })
    const { values,handleSubmit,handleReset,handleBlur,handleChange,errors,touched} = useFormik({
        initialValues:{
            email :''
        },
        validationSchema: schema,
        onSubmit: (value) => {
            handleReset(value)
        }
    })
    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleSubmit()
    }
return (
    <div className='container-fluid footer '>
        <div className='row'>
            <div className='col-12 p-5 d-flex '>
                <div className='col-3 footerbox align-content-start p-2 d-flex flex-wrap'>
                    <h1 className='col-12  mb-4'>About us</h1>
                    <p className='col-12 '>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                </div>
                    <div className='col-3 footerbox align-content-start p-2 d-flex flex-wrap'>
                    <h1 className='col-12 mb-4'>Get in Touch</h1>
                    <p className='col-12 '>34/8,  East Hukupara, Gifirtok, Sadan.
                        support@fruitkha.com <br></br>
                        +00 111 222 3333</p>

                </div>
                    <div className='col-3 footerbox align-content-start p-2 d-flex flex-wrap'>
                    <h1 className='col-12 mb-4'>Pages</h1>
                    <ul className='col-12 d-flex flex-column'>
                        <Link to='/home' className='col-12 mb-2 position-relative footerLink'>Home <ArrowForwardIosIcon className='icon position-absolute' sx={{ fontSize: 15 }}/> </Link>
                        <Link to='/about' className='col-12 mb-2 footerLink position-relative'>About <ArrowForwardIosIcon className='icon position-absolute' sx={{ fontSize: 15 }}/></Link>
                        <Link to='/shop' className='col-12 mb-2 footerLink position-relative'>Shop <ArrowForwardIosIcon className='icon position-absolute' sx={{ fontSize: 15 }}/></Link>
                        <Link to='/contact' className='col-12 footerLink position-relative'> Contact <ArrowForwardIosIcon className='icon position-absolute' sx={{ fontSize: 15 }}/></Link>
                    </ul>

                </div>
                <div className='col-3 footerbox p-2 d-flex align-content-start flex-wrap'>
                    <h1 className='col-12  mb-4'>Subscribe</h1>
                    <p className='col-12 '>Subscribe to our mailing list to get the latest updates.</p>
                    <form onSubmit={handleFormSubmit} className='col-12 d-flex justify-content-between align-item-center '>
                        <div className='col-9 d-flex flex-column p-2'>
                            <input
                            type='email'
                            className='col-12 rounded p-3'
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='email'
                        />
                        {errors.email && touched.email && <p style={{ color: 'red',filter: 'none' }} className='col-12'>{errors.email}</p>}
                        </div>
                        <button type='submit' className='col-3 p-2 d-flex justify-content-center align-items-center '><SendIcon sx={{color:'#F99417'}}/></button>

                    </form>
                </div>
            </div>
        </div>

    </div>
)
}

export default Footer