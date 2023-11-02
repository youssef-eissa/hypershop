import './about.css'
import { Wrapper } from "./ReusableComponents/Wrapper.style"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CachedIcon from '@mui/icons-material/Cached';
import aboutImagePage from '../assets/aboutImage.jpeg'

function About() {
return (
    <div className="container-fluid">
        <div className="row">
            <Wrapper className="col-12 d-flex flex-column align-items-center justify-content-center">
                <span className="col-12 text-center mb-3">who are we</span>
                <h1 className="col-12">About us</h1>
            </Wrapper>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-10 my-5 flex-column flex-md-row d-flex justify-content-between">
                <div className="col-md-6 col-12 leftAboutBox d-flex justify-content-between whyShop flex-wrap">
                    <h1 className="col-12">Why <span>HyperShop</span></h1>
                    <div className='col-md-6 col-12 d-flex mt-4 justify-content-between'>
                        <div className=' d-flex justify-content-center align-items-center icon'>
                            <LocalShippingOutlinedIcon fontSize='large'  sx={{color: '#F99417'}}/>
                        </div>
                        <div className='col-9 d-flex flex-column'>
                            <h5 className='col-12 fw-bold'>Free Shipping</h5>
                            <p className='col-12'>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex mt-4 justify-content-between'>
                        <div className=' d-flex justify-content-center align-items-center icon'>
                            <MoneyOutlinedIcon fontSize='large'  sx={{color: '#F99417'}}/>
                        </div>
                        <div className='col-9 d-flex flex-column'>
                            <h5 className='col-12 fw-bold'>Best Price</h5>
                            <p className='col-12'>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        </div>
                    </div>
                        <div className='col-md-6 col-12 d-flex mt-4 justify-content-between'>
                        <div className=' d-flex justify-content-center align-items-center icon'>
                            <CardGiftcardIcon fontSize='large'  sx={{color: '#F99417'}}/>
                        </div>
                        <div className='col-9 d-flex flex-column'>
                            <h5 className='col-12 fw-bold'>Custom Box</h5>
                            <p className='col-12'>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex mt-4 justify-content-between'>
                        <div className=' d-flex justify-content-center align-items-center icon'>
                            <CachedIcon fontSize='large'  sx={{color: '#F99417'}}/>
                        </div>
                        <div className='col-9 d-flex flex-column'>
                            <h5 className='col-12 fw-bold'>Quick Refund</h5>
                            <p className='col-12'>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        </div>
                        </div>
                </div>
                <div className='col-md-5 col-12 rounded overflow-hidden '>
                    <img alt='img' src={aboutImagePage} className='img-fluid h-100'/>
                </div>
            </div>
        </div>
    </div>
)
}

export default About