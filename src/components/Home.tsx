import './Home.css'
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import smartPhones from '../assets/smartphones.jpeg'
import laptops from '../assets/laptops.webp'
import fragrances from '../assets/fragrances.webp'
import skincares from '../assets/skincares.jpeg'
import groceries from '../assets/groceries.webp'
import homedecorations from '../assets/home-decoration.jpeg'
import furniture from '../assets/furniture.jpeg'
import tops from '../assets/tops.jpeg'
import womenDresses from '../assets/womens-dresses.jpeg'
import womenShoes from '../assets/womens-shoes.jpeg'
import menShirts from '../assets/mens-shirts.webp'
import menShoes from '../assets/mens-shoes.webp'
import menwatches from '../assets/mens-watches.jpg'
import Womenwatches from '../assets/mens-watches.jpg'
import WomenBags from '../assets/womens-bags.jpeg'
import WomenJewellery from '../assets/womens-jewellery.webp'
import SunGlasses from '../assets/sunglasses.webp'
import automotive from '../assets/sunglasses.webp'
import motorcycle from '../assets/motorcycle.jpeg'
import lightening from '../assets/lighting.jpg'
import about from '../assets/about.avif'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import {  Product } from '../types/app';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import Marquee from "react-fast-marquee";
import { Button } from './ReusableComponents/Button.style';
import { setProduct } from '../redux/product';
import { useDispatch } from 'react-redux';




function Home() {
    const dispatch=useDispatch()


    const settings = {
    fade: true,
    dots: false,
        speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    touchMove: true,
    responsive: [{
    breakpoint: 1700,
    initialSlide: 1,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    }]
    }

    const ProductsSettings = {
    dots: false,
    speed: 1000,
    arrows: true,
    infinite: true,
    touchMove: true,
        nextArrow: <ArrowForwardIcon fontSize='medium' sx={{ backgroundColor: 'white', color: '#F99417', transition: '0.3s', border: '1px solid #F99417', borderRadius: '50%' }} />,
        prevArrow: <ArrowBackIcon  onClick={ ()=>console.log('clicked')
        } className='slick-prev slick-arrow' fontSize='medium' sx={{ backgroundColor: 'white', color: '#F99417', transition: '0.3s', border: '1px solid #F99417', borderRadius: '50%' }} />,
    responsive: [{
    breakpoint: 1700,
    initialSlide: 1,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    },
    {
    breakpoint: 800,
    initialSlide: 1,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    }]
    }
    const TestimonialsSettings = {
    dots: false,
    speed: 1000,
    arrows: false,
    infinite: true,
    touchMove: true,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [{
    breakpoint: 1700,
    initialSlide: 1,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    }]
    }
        function getData() {
    return axios.get('https://dummyjson.com/products?limit=0')
    }
    const {data:allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: getData,
        select: (data) => data.data.products
    })
    const brands = allProducts?.map((product: Product) => product.brand)
    const brandsArray= Array.from(new Set(brands)) as string[]
    

return (
    <div className='container-fluid'>
        <div className='row d-flex justify-content-center sliderAndProps '>
            <div className='col-12  d-flex justify-content-center p-0 '>
                <Slider  className='col-12 ' {...settings}>
                    <div  className='imgSliderBox position-relative'>
                        <div className='col-12  position-absolute overlayImgSlider'></div>
                        <img className='img-fluid w-100 h-100' alt='smartphones' src={smartPhones} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='laptops' src={laptops} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='fragrances' src={fragrances} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='skincares' src={skincares} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='groceries' src={groceries} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='homedecorations' src={homedecorations} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='furniture' src={furniture} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='tops' src={tops} />
                        <Link className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='womenDresses' src={womenDresses} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='womenShoes' src={womenShoes} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='menShirts' src={menShirts} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='menShoes' src={menShoes} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='menwatches' src={menwatches} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='Womenwatches' src={Womenwatches} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='WomenBags' src={WomenBags} />
                        <Link className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='WomenJewellery' src={WomenJewellery} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='SunGlasses' src={SunGlasses} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='automotive' src={automotive} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='motorcycle' src={motorcycle} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                    <div className='imgSliderBox position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='lightening' src={lightening} />
                        <Link reloadDocument className='ShopNowLink col-md-2 col-6 rounded p-3 text-center position-absolute z-2 ' to='/shop'>Shop Now</Link>
                    </div>
                </Slider>
            </div>
            <div  className='col-10 p-md-5 p-3 props d-flex flex-column flex-md-row justify-content-between'>
                <div className='col-md-3 col-12 d-flex justify-content-between'>
                    <div className='col-3 icon d-flex justify-content-center align-items-center'>
                        <LocalShippingOutlinedIcon  sx={{width: '60px', height: '60px',color: '#F99417'}}  />
                    </div>
                    <div className='col-8 d-flex flex-column'>
                        <h3 className='col-12 fw-bold'>Free Shipping</h3>
                        <span>When order over $750</span>
                    </div>
                </div>
                <div className='col-md-3 col-12 my-3 my-md-0 d-flex justify-content-between'>
                    <div className='col-3 icon d-flex justify-content-center align-items-center'>
                        <PhoneInTalkOutlinedIcon  sx={{width: '50px', height: '50px',color: '#F99417'}}  />
                    </div>
                    <div className='col-8 d-flex flex-column'>
                        <h3 className='col-12 fw-bold'>24/7 Support</h3>
                        <span>Get support all day</span>
                    </div>
                </div>
                <div className='col-md-3 col-12 d-flex justify-content-between'>
                    <div className='col-3 icon d-flex justify-content-center align-items-center'>
                        <CachedOutlinedIcon  sx={{width: '50px', height: '50px',color: '#F99417'}}  />
                    </div>
                    <div className='col-8 d-flex flex-column'>
                        <h3 className='col-12 fw-bold'>Refund</h3>
                        <span>Get refund within 3 days!</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='row products p-md-5 p-3'>
            <div className='col-12 d-flex  flex-column align-items-center justify-content-center p-0'>
                <div className='col-12 productsTitleHomePage d-flex flex-column align-items-center'>
                    <div className='col-md-4 col-12 text-center'><span>Our</span> Products</div>
                    <div className='col-md-4 col-12 text-center my-3'>Check all of our products</div>
                </div>
                <Slider  className='col-10 ' {...ProductsSettings}>
                    {allProducts?.map((product:Product)=>{
                        return <Link to={`/shop/${product.id}`} className='d-flex justify-content-center productBoxHomePage p-1' onClick={() => { dispatch(setProduct(product)); window.scrollTo(0, 0)}}  key={product.id}>
                            <div className=' col-10 p-2 d-flex flex-column align-items-center rounded productBoxSlider' >
                                <div className='col-12 imgBoxSlider position-relative'>

                                    <img alt='product' className='img-fluid w-100 h-100' src={product.thumbnail} />
                                </div>
                                <div className='col-12 my-2 priceSlider text-center'>
                                    Price: <span className='me-1'>{product.price}</span>$
                                </div>
                                <div className='d-flex justify-content-center align-items-center productOffSlider'> <span>{product.discountPercentage}%</span> Off</div>
                                <Button  className='col-5 mt-3 p-2 rounded'>More Info</Button>
                            </div>
                        </Link>
                    })}
                </Slider>
            </div>
        </div>
        <div className='row testimonials p-md-5 p-3'>
            <div className='col-12 d-flex justify-content-center p-0'>
                <div style={{backgroundColor:'white'}} className='rounded col-md-8 col-12 p-3'>
                    <Slider   className='col-12' {...TestimonialsSettings}>
                    <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                        <div className='testName d-flex justify-content-center align-items-center'>Alexis</div>
                        <span className='col-12 text-center titleTest my-4'>Client</span>
                        <p className='col-9 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi vero vitae voluptates architecto sint minima quo veritatis alias, qui enim eum dicta ab corporis aperiam obcaecati vel inventore deleniti laborum.</p>
                    </div>
                    <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                        <div className='testName d-flex justify-content-center align-items-center'>Nael</div>
                        <span className='col-12 text-center titleTest my-4'>Client</span>
                        <p className='col-9 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi vero vitae voluptates architecto sint minima quo veritatis alias, qui enim eum dicta ab corporis aperiam obcaecati vel inventore deleniti laborum.</p>
                        </div>
                        <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                        <div className='testName d-flex justify-content-center align-items-center'>Antony</div>
                        <span className='col-12 text-center titleTest my-4'>Client</span>
                        <p className='col-9 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi vero vitae voluptates architecto sint minima quo veritatis alias, qui enim eum dicta ab corporis aperiam obcaecati vel inventore deleniti laborum.</p>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
        <div className='row aboutHome p-md-5 p-3'>
            <div className='col-12 p-0 d-flex justify-content-center'>
                <div className='col-10 d-flex flex-column flex-md-row justify-content-between '>
                    <div className='homeAboutPage col-md-5 col-12 rounded overflow-hidden'>
                        <img alt='aboutpage' src={about} className='img-fluid h-100 w-100'/>
                    </div>
                    <div className='col-md-6 col-12 aboutBox d-flex flex-column'>
                        <span className='col-12'>Since Year 1999</span>
                        <h3>We are <span>HyperShop</span></h3>
                        <p className='col-12 mt-3'>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. <br></br>  <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                        <Link reloadDocument className='col-md-3 col-6 toabout text-center p-2 rounded ' to='/about'>Know more</Link>

                    </div>
                </div>
            </div>
        </div>
        <div className='row marquee'>
            <div className='col-12 d-flex justify-content-center'>
                <div className='col-12 p-3'>
                    <div className='col-12 my-4 text-center titleMarquee'>
                        Our <span>Brands</span>
                    </div>
                    <Marquee className='col-12 marqueeBox p-3 rounded'>
                        {brandsArray.map((brand: string) => {
                            return <div className='ms-5 marqueeBrand' key={brand}>{brand}</div>
                        })}
                    </Marquee>
                </div>
            </div>
        </div>
    </div>
)
}

export default Home