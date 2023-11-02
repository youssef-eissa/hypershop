import { Wrapper } from './ReusableComponents/Wrapper.style'
import {  useQuery} from '@tanstack/react-query'
import axios from 'axios'
import  { useState } from 'react'
import {  ProductsArray } from '../types/app';
import './shop.css'
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductsMapping from './ReusableComponents/ProductsMapping';



function Shop() {
    const [skipPagination, setSkipPagination] = useState<number>(0)
    const [showAllProducts, setShowAllProducts] = useState<boolean>(true)
    const [SelectedCategory,setCategory]=useState<string>('')

    function getProducts() {
        return axios.get(`https://dummyjson.com/products?skip=${skipPagination}&limit=10`)
    }

    const { data:AllProducts,isSuccess:AllProductsSuccess,isFetching:AllProductsFetching,refetch:AllProductsRefetch} = useQuery({
        queryKey: ['allProducts',skipPagination],
        queryFn: getProducts,
        select: (data) => data.data,
        refetchOnWindowFocus: false,
        enabled:showAllProducts


    })

    function handlePaginationChange(e:any, value:number) {
        setSkipPagination((value - 1) * 10)
        window.scrollTo(0, 0)
    }
    function GetCategories() {
        return axios.get(`https://dummyjson.com/products/categories`)
    }
    const { data:Categories } = useQuery({
        queryKey: ['Categories'],
        queryFn: GetCategories,
        select: (data) => data.data,
    })
    function GetCategoriesProducts() {
        return axios.get(`https://dummyjson.com/products/category/${SelectedCategory}`)
    }
    const { data:CategoriesProducts,isSuccess:CategoriesProductsSuccess,isFetching:CategoriesProductsFetching,refetch:CategoriesProductsRefetch } = useQuery({
        queryKey: ['CategoriesProducts',SelectedCategory],
        queryFn: GetCategoriesProducts,
        select: (data) => data.data,
        enabled:!showAllProducts
    })

    const CategoriesSettings = {
    dots: false,
    speed: 1000,
    arrows: true,
    infinite: true,
    touchMove: true,
    autoplay:false,
    autoplaySpeed: 3000,
    nextArrow: <ArrowForwardIcon fontSize='medium' sx={{ backgroundColor: 'white', color: '#F99417', transition: '0.3s', border: '1px solid #F99417', borderRadius: '50%' }} />,
    prevArrow: <ArrowBackIcon onClick={() => console.log('clicked')} className='slick-prev slick-arrow' fontSize='medium' sx={{ backgroundColor: 'white', color: '#F99417', transition: '0.3s', border: '1px solid #F99417', borderRadius: '50%' }} />,
    responsive: [{
    breakpoint: 1700,
    initialSlide: 1,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    },
    {
    breakpoint: 1700,
    initialSlide: 1,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    },{
    breakpoint: 800,
    initialSlide: 1,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    },]
    }

return (
    <div className='container-fluid'>
        <div className='row Wtitle'>
            <Wrapper className='col-12 d-flex justify-content-center align-items-center flex-column'>
        <span className='col-12 text-center mb-3'>explore and have fun </span>
        <h1 className='col-12 text-center'>Shop</h1>
    </Wrapper>
        </div>
        <div className='row  ShopProductsPage d-flex justify-content-center'>
            <Slider className='col-10 slider mt-5 ' {...CategoriesSettings}>
                <div>
                    <button style={SelectedCategory === '' ? { backgroundColor: '#F99417', color: 'white' } : { backgroundColor: 'white', color: '#F99417' }} onClick={() => { AllProductsRefetch(); setShowAllProducts(true); setCategory('')}} className='p-3 col-12'>All</button>
                </div>
                {Categories?.map((category:string) => {
                    return <div className='d-flex align-items-center  justify-content-center' key={category}>
                        <button style={category === SelectedCategory ? { backgroundColor: '#F99417', color: 'white' } : { backgroundColor: 'white', color: '#F99417' }} onClick={() => { setCategory(category); CategoriesProductsRefetch(); setShowAllProducts(false)}} className='col-12 p-3'>{category}</button>
                    </div>
                })}

        </Slider>
            {showAllProducts&& <div className='col-12  allProductsShop d-flex flex-wrap gap-3 justify-content-center'>
                <ProductsMapping  products={AllProducts?.products as ProductsArray} isSuccess={AllProductsSuccess as boolean} isFetching={AllProductsFetching as boolean}  total={AllProducts?.total as number} handlePaginationChange={handlePaginationChange} />
            </div>}
            {!showAllProducts&&<div className='col-12  allProductsShop d-flex flex-wrap gap-3 justify-content-center'>
                <ProductsMapping isSuccessCategories={CategoriesProductsSuccess as boolean} products={CategoriesProducts?.products as ProductsArray}  isFetching={CategoriesProductsFetching as boolean}  total={CategoriesProducts?.total as number} handlePaginationChange={handlePaginationChange} />
            </div>}

        </div>
    </div>
)
}


export default Shop
