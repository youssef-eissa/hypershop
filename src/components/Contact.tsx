import { Wrapper } from "./ReusableComponents/Wrapper.style"
import './contact.css'
import { useFormik } from "formik"
import * as yup from 'yup'
import { Button } from "./ReusableComponents/Button.style"
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from "react-router-dom"

function Contact() {
    const schema=yup.object().shape({
        fullname: yup.string().required('Full name is required'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        phone: yup.number().required('Phone number is required'),
        subject: yup.string().required('Subject is required'),
        message: yup.string().required('Message is required')
    })
    const {values,handleSubmit,handleReset,handleBlur,handleChange,errors,touched}=useFormik({
        initialValues:{
            fullname: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        onSubmit: (value) => {
            handleReset(value)
        },
        validationSchema: schema

    })
return (
    <div className="container-fluid">
        <div className="row">
            <Wrapper className="col-12 d-flex flex-column align-items-center justify-content-center">
                <span className="col-12 text-center mb-3">get in touch</span>
                <h1 className="col-12">Contact us</h1>
            </Wrapper>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-10 d-flex justify-content-between p-0 my-5">
                <div className="col-8 d-flex flex-column contactBoxPage">
                    <h1 className="col-12">Have you any question?</h1>
                    <span className="col-12">Feel free to reach out to us</span>
                    <form onSubmit={handleSubmit} className="col-12 d-flex flex-wrap justify-content-around">
                        <div className="col-5 d-flex flex-column my-4">
                            <input
                            type="text"
                            name="fullname"
                            className="col-12  p-2 rounded"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullname}
                            placeholder="Full Name"
                        />
                        {errors.fullname && touched.fullname && <p style={{color: 'red'}} className="col-12">{errors.fullname}</p>}
                        </div>
                        <div className="col-5 d-flex flex-column my-4">
                            <input
                            type="email"
                            name="email"
                            className="col-12  p-2 rounded"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                        />
                        {errors.email && touched.email && <p style={{color: 'red'}} className="col-12">{errors.email}</p>}
                        </div>
                        <div className="col-5 d-flex flex-column my-4">
                            <input
                            type="tel"
                            name="phone"
                            className="col-12  p-2 rounded"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder="Phone Number"
                        />
                        {errors.phone && touched.phone && <p style={{color: 'red'}} className="col-12">{errors.phone}</p>}
                        </div>
                        <div className="col-5 d-flex flex-column my-4">
                            <input
                            type="text"
                            name="subject"
                            className="col-12  p-2 rounded"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subject}
                            placeholder="Subject"
                        />
                        {errors.subject && touched.subject && <p style={{color: 'red'}} className="col-12">{errors.subject}</p>}
                        </div>
                        <div className="col-12 d-flex flex-column my-4">
                            <textarea
                                name="message"
                                className="col-11 d-flex mx-auto p-2 rounded"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                placeholder="Message"
                            />
                        {errors.message && touched.message && <p style={{color: 'red'}} className="col-11 d-flex mx-auto">{errors.message}</p>}
                        </div>
                        <Button className="col-3 rounded p-2" type="submit" >Send</Button>
                    </form>

                </div>
                <div className="col-3 justify-content-center d-flex flex-column rightBoxContactPage rounded">
                    <div className="col-12 mb-3 d-flex justify-content-between">
                        <div className="col-3 d-flex align-items-start justify-content-center">
                            <PlaceIcon fontSize="large" sx={{color: '#F99417'}}/>
                        </div>
                        <div className="col-9 d-flex flex-wrap">
                            <h3 className="col-12">Shop Address</h3>
                            <span className="col-12">34/8, East Hukupara</span>
                            <span className="col-12">Gifirtok, Sadan.</span>

                        </div>
                    </div>
                    <div className="col-12 d-flex mb-3 justify-content-between">
                        <div className="col-3 d-flex align-items-start justify-content-center">
                            <AccessTimeIcon fontSize="large" sx={{color: '#F99417'}}/>
                        </div>
                        <div className="col-9 d-flex flex-wrap">
                            <h3 className="col-12">Shop Hours</h3>
                            <span className="col-12">MON - FRIDAY: 8 to 9 PM</span>
                            <span className="col-12">SAT - SUN: 10 to 8 PM</span>

                        </div>
                    </div>
                        
                    <div className="col-12 d-flex mb-3 justify-content-between">
                        <div className="col-3 d-flex align-items-start justify-content-center">
                            <ContactsIcon fontSize="large" sx={{color: '#F99417'}}/>
                        </div>
                        <div className="col-9 d-flex flex-wrap">
                            <h3 className="col-12">Contact</h3>
                            <Link style={{textDecoration: 'none', color: 'black'}} to='tel:+00111222 3333'>Phone: +00 111 222 3333</Link>
                            <span className="col-12">Email: support@hypershop.com</span>

                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact