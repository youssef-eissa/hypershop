import { useSelector } from "react-redux"
import { Wrapper } from "./ReusableComponents/Wrapper.style"
import './productPage.css'
import { Button } from "./ReusableComponents/Button.style"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { OneUser ,Product,ProductsArray} from "../types/app"
import { useState } from "react"

type IUpdateCart = {
    id: number;
    UpdatedUser: OneUser;
}
type IProductPage = {
    user:OneUser
}
function ProductPage({user}:IProductPage) {
    const product = useSelector<{ product: { product: Product } }>((state) => state.product.product) as Product

    const [theUpdatedUser, setTheUpdatedUser] = useState<OneUser>(user)

    function UpdateUserCart(arg:IUpdateCart) {
        const { id, UpdatedUser } = arg
        return axios.put(`http://localhost:3001/users/${id}`,UpdatedUser)
    }
    const { mutate } = useMutation({
        mutationFn:UpdateUserCart
    })
    function handleUpdate(product: Product) {
        setTheUpdatedUser({ ...theUpdatedUser, carts: [...theUpdatedUser.carts as ProductsArray, product] as ProductsArray })
        mutate({id:theUpdatedUser.id, UpdatedUser: theUpdatedUser})
    }
    
return (
    <div className="container-fluid">
        <div className="row">
            <Wrapper className="col-12 d-flex flex-column justify-content-center align-items-center">
                <h1 className="col-12">{product.title }</h1>
            </Wrapper>
        </div>
        <div className="row productPage d-flex justify-content-center py-3">
            <div className="col-10 d-flex flex-column align-items-center p-0">
                <div className="col-5 imgBoxProductPage rounded overflow-hidden ">
                    <img alt="imgProduct" className="img-fluid h-100 w-100" src={product.thumbnail} />
                </div>
                <div className="col-6 productInfo d-flex mt-3 flex-column">
                    <p className="col-12">Description : <span>{product.description}</span></p>
                    <div className="col-12">Price : <span>{product.price} $</span> <del>{product.price + product
                    .discountPercentage}</del></div>
                    <div className="col-12">Category : <span>{product.category}</span></div>
                    <div className="col-12">Brand : <span>{product.brand}</span></div>
                    <div className="col-12">Rating : <span>{ product.rating}</span></div>
                </div>
                <div className="col-6 d-flex flex-wrap gap-3 mt-3 justify-content-center">
                    {product.images.map((img: string) => {
                        return <div key={img} className="col-3 rounded overflow-hidden">
                            <img alt="img" src={ img} className="img-fluid h-100" />
                        </div>
                    })}
                </div>
                <Button onClick={() => handleUpdate(product)} className="col-3 mt-3 rounded p-3">Add to cart</Button>
            </div>
        </div>

    </div>
)
}

export default ProductPage