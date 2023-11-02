import React, { FC } from 'react'
import { ProductsArray } from '../../types/app'
import { ThreeCircles } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../redux/product';
type TProductsMapping = {
    products: ProductsArray;
    isSuccess?: boolean;
    isFetching: boolean;
    total: number;
    isSuccessCategories?: boolean;
    handlePaginationChange: (e: any, value: number) => void
}
const ProductsMapping: FC<TProductsMapping> = ({ products, isSuccess, isFetching,total,handlePaginationChange,isSuccessCategories }: TProductsMapping) => {
    const dispatch=useDispatch()

    const Success = isSuccessCategories || isSuccess
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-md-4 p-2  allProductsShop d-flex flex-wrap gap-3 justify-content-center'>
                {Success&& !isFetching ?products.map((product:any) => {
                    return <Link onClick={()=>dispatch(setProduct(product))} style={{ textDecoration: 'none', color: 'black' }} to={`/shop/${product.id}`} key={product.id} className='col-md-3 col-12 row-gap-2 d-flex flex-column productShop p-3 rounded'>
                        <div className='col-12 rounded imgShopBox overflow-hidden'>
                            <img className='img-fluid h-100 w-100' src={product.thumbnail} alt={product.title}/>
                        </div>
                        <div className='col-12 d-flex productShopTitle flex-column'>
                            <div className='col-12'> Title : <span>{product.title}</span></div>
                        </div>
                        <p>{product.description}</p>

                        <div className='col-12 d-flex productShopPrice flex-column'>
                            <div className='col-12'> Price : <span>{product.price} $</span> <del className='ms-2'>{ (product.price+product.discountPercentage).toFixed(2)}</del> $</div>
                        </div>
                        <div className='col-12 d-flex productShopCategory flex-column'>
                            <div className='col-12'> Category : <span>{product.category}</span></div>
                        </div>
                        <div className='col-12 '>
                        <div className='col-12'> Off : <span>{product.discountPercentage}%</span></div>
                        </div>
                    </Link>
                }) : isFetching && <ThreeCircles innerCircleColor='#F28123' middleCircleColor='yellow' />}
                {isSuccess&&products.length>8&& <div className='col-12 AllProductsPagination p-5 d-flex justify-content-center'>
                <Stack spacing={2}>
                    <Pagination color='primary' onChange={(e, value: number) => handlePaginationChange(e, value)} count={total/10} />
                </Stack>
                </div>}
            </div>
        </div>
    </div>
)
}

export default ProductsMapping
