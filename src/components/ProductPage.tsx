import { useSelector, useDispatch } from "react-redux"
import { Wrapper } from "./ReusableComponents/Wrapper.style"
import './productPage.css'
import { Button } from "./ReusableComponents/Button.style"
import axios from "axios"
import { useMutation} from "@tanstack/react-query"
import { OneUser ,Product} from "../types/app"
import { setUser } from "../redux/user";
import { ToastContainer, toast } from 'react-toastify';




type IProductPage = {
    user: OneUser;
    isSuccess: boolean;
    refetch: () => void
}
function ProductPage({ user, isSuccess, refetch }: IProductPage) {

const dispatch=useDispatch()
    const product = useSelector<{ product: { product: Product } }>((state) => state.product.product) as Product

    function UpdateUserCart(id:number) {
        return axios.put(`https://hypershop-db.vercel.app/users/${id}`,{...user,carts:isSuccess&&[...user.carts ,product]})
    }

    const { mutate } = useMutation({
        mutationKey: ['UpdateUserCart'],
        mutationFn: UpdateUserCart,
        onSuccess: (data) => {
            refetch()
            toast.success("product added")
        }
    })
    function handleUpdate(id: number) {
        dispatch(setUser(user))
        mutate(id)
        window.scrollTo(0, 0)
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
                <div className="col-md-5 col-11 imgBoxProductPage rounded overflow-hidden ">
                    <img alt="imgProduct" className="img-fluid h-100 w-100" src={product.thumbnail} />
                </div>
                <div className="col-md-6 col-12 productInfo d-flex mt-3 flex-column">
                    <p className="col-12">Description : <span>{product.description}</span></p>
                    <div className="col-12">Price : <span>{product.price} $</span> <del>{product.price + product
                    .discountPercentage}</del></div>
                    <div className="col-12">Category : <span>{product.category}</span></div>
                    <div className="col-12">Brand : <span>{product.brand}</span></div>
                    <div className="col-12">Rating : <span>{ product.rating}</span></div>
                </div>
                <div className="col-md-6 col-12 d-flex flex-wrap gap-3 mt-3 justify-content-center">
                    {product.images.map((img: string) => {
                        return <div key={img} className="col-3 rounded overflow-hidden">
                            <img alt="img" src={ img} className="img-fluid h-100" />
                        </div>
                    })}
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Button onClick={() => { isSuccess && handleUpdate(user.id)}} className="col-md-3 col-6 mt-3 rounded p-3">Add to cart</Button>
            </div>
        </div>

    </div>
)
}

export default ProductPage