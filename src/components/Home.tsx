import './Home.css'
import Slider from "react-slick";
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
import { ProductsArray, Product,OneUser } from '../types/app';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import Marquee from "react-fast-marquee";


interface IUpdateCart {
    id:number;
    UpdatedUser:OneUser
}
type THome = {
    allProducts: ProductsArray;
    user: OneUser
}
function Home({ allProducts, user }: THome) {
    const [theUpdatedUser, setTheUpdatedUser] = useState<OneUser>(user)
    function UpdateUser(arg: IUpdateCart) {
        const { id, UpdatedUser } = arg
        return axios.put(`http://localhost:3001/users/${id}`,UpdatedUser)
    }

    const { mutate } = useMutation({
        mutationFn: UpdateUser,
        onSuccess: (data) => {
            console.log(data)
        }
    })
    function handleUpdate(product:Product) {
        setTheUpdatedUser({ ...theUpdatedUser, carts: [...theUpdatedUser.carts as any, product] as any })
        mutate({ id: theUpdatedUser.id, UpdatedUser: theUpdatedUser })
    }

    const settings = {
    fade: true,
    dots: false,
    speed: 1000,
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
        prevArrow: <ArrowBackIcon fontSize='medium' sx={{ backgroundColor: 'white', color: '#F99417', transition: '0.3s', border: '1px solid #F99417', borderRadius: '50%' }} />,
    responsive: [{
    breakpoint: 1700,
    initialSlide: 1,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    }]
    }
    const TestimonialsSettings = {
    dots: false,
    autoplay:true,
    speed: 1000,
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
    const brands = allProducts?.map((product: Product) => product.brand)
    const brandsArray= Array.from(new Set(brands))
    console.log(brandsArray);
    

return (
    <div className='container-fluid'>
        <div className='row d-flex justify-content-center slider&props '>
            <div className='col-12 d-flex justify-content-center p-0 '>
                <Slider autoplay={true} autoplaySpeed={3000}  className='col-12 ' {...settings}>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid w-100 h-100' alt='smartphones' src={smartPhones} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='laptops' src={laptops} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='fragrances' src={fragrances} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='skincares' src={skincares} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='groceries' src={groceries} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='homedecorations' src={homedecorations} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='furniture' src={furniture} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='tops' src={tops} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='womenDresses' src={womenDresses} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='womenShoes' src={womenShoes} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='menShirts' src={menShirts} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='menShoes' src={menShoes} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='menwatches' src={menwatches} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='Womenwatches' src={Womenwatches} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='WomenBags' src={WomenBags} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='WomenJewellery' src={WomenJewellery} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='SunGlasses' src={SunGlasses} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='automotive' src={automotive} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='motorcycle' src={motorcycle} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                    <div className='vh-100 position-relative'>
                        <div className='col-12 position-absolute overlayImgSlider'></div>
                        <img className='img-fluid h-100 w-100' alt='lightening' src={lightening} />
                        <Link className='ShopNowLink col-2 rounded p-3 text-center position-absolute z-2 ' to='/products/'>Shop Now</Link>
                    </div>
                </Slider>
            </div>
            <div  className='col-10 p-5 props d-flex justify-content-between'>
                <div className='col-3 d-flex justify-content-between'>
                    <div className='col-3 icon d-flex justify-content-center align-items-center'>
                        <LocalShippingOutlinedIcon  sx={{width: '60px', height: '60px',color: '#F99417'}}  />
                    </div>
                    <div className='col-8 d-flex flex-column'>
                        <h3 className='col-12 fw-bold'>Free Shipping</h3>
                        <span>When order over $75</span>
                    </div>
                </div>
                <div className='col-3 d-flex justify-content-between'>
                    <div className='col-3 icon d-flex justify-content-center align-items-center'>
                        <PhoneInTalkOutlinedIcon  sx={{width: '50px', height: '50px',color: '#F99417'}}  />
                    </div>
                    <div className='col-8 d-flex flex-column'>
                        <h3 className='col-12 fw-bold'>24/7 Support</h3>
                        <span>Get support all day</span>
                    </div>
                </div>
                <div className='col-3 d-flex justify-content-between'>
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
        <div className='row products p-5'>
            <div className='col-12 d-flex  flex-column align-items-center justify-content-center p-0'>
                <div className='col-12 productsTitleHomePage d-flex flex-column align-items-center'>
                    <div className='col-4 text-center'><span>Our</span> Products</div>
                    <div className='col-4 text-center my-3'>Check all of our products</div>
                </div>
                <Slider className='col-10 ' {...ProductsSettings}>
                    {allProducts?.map((product:Product)=>{
                        return <div className='d-flex justify-content-center p-1'  key={product.id}>
                            <div className=' col-10 p-2 d-flex flex-column align-items-center rounded productBoxSlider' >
                                <div className='col-12 imgBoxSlider position-relative'>

                                    <img alt='product' className='img-fluid w-100 h-100' src={product.thumbnail} />
                                </div>
                                <div className='col-12 my-2 priceSlider text-center'>
                                    Price: <span className='me-1'>{product.price}</span>$
                                </div>
                                <div className='d-flex justify-content-center align-items-center productOffSlider'> <span>{product.discountPercentage}%</span> Off</div>
                                <button onClick={() => handleUpdate(product)} className='col-5 mt-3 p-2 rounded'>Add to cart</button>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
        <div className='row testimonials p-5'>
            <div className='col-12 d-flex justify-content-center p-0'>
                <div style={{backgroundColor:'white'}} className='rounded col-8 p-3'>
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
        <div className='row aboutHome p-5'>
            <div className='col-12 p-0 d-flex justify-content-center'>
                <div className='col-10 d-flex justify-content-between '>
                    <div className='homeAboutPage col-5 rounded overflow-hidden'>
                        <img alt='aboutpage' src={about} className='img-fluid h-100 w-100'/>
                    </div>
                    <div className='col-6 aboutBox d-flex flex-column'>
                        <span className='col-12'>Since Year 1999</span>
                        <h3>We are <span>HyperShop</span></h3>
                        <p className='col-12 mt-3'>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. <br></br>  <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                        <Link className='col-3 toabout text-center p-2 rounded ' to='/about'>Know more</Link>

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
                        {brandsArray?.map((brand: string) => {
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