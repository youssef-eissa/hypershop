import './cart.css'
import { Button } from './ReusableComponents/Button.style';
import { Wrapper } from "./ReusableComponents/Wrapper.style"
import { Product ,OneUser} from "../types/app"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import axios from "axios";
import {  useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner'



type IUpdateCart = {
    id: number,
    productRemoved: Product;

}

type TCart ={
    user: OneUser;
    isFetching: boolean;
    isSuccess: boolean;
    refetch: () => void
}
function Cart({ user, isFetching, isSuccess, refetch }: TCart) {


    function removeProduct(arg: IUpdateCart) {
        const {id,productRemoved}=arg
        return axios.put(`https://hypershop-db.vercel.app/users/${id}`,{...user,carts:[...user.carts.filter((product:Product) => product.id !== productRemoved.id)]})
    }
const { mutate,isPending} = useMutation({
    mutationFn: removeProduct,

    onSuccess: (data) => {
        refetch()
        toast.success("product removed")
    }
})

    function handleProductDeletion(id: number, product: Product) {
        mutate({ id, productRemoved: product })

    }
    if(isPending){
        return <div className="col-12 position-absolute z-3 min-vh-100 d-flex justify-content-center align-items-center"><ThreeCircles innerCircleColor='#F28123' middleCircleColor='yellow' /></div>
    }
    const TotalPriceArray = user?.carts.map((product: any) => product.price)
    const total=TotalPriceArray?.reduce((a: number, b: number) => a + b, 0)


return (
    <div className="container-fluid">
        <div className="row">
            <Wrapper className="col-12 d-flex flex-column justify-content-center align-items-center">
                <span className="col-12 text-center">check your cart</span>
                <h1>Cart</h1>
            </Wrapper>
        </div>
        <div  className="row d-flex justify-content-center">
                <div className="col-12 col-md-11 p-0 py-md-2 d-flex my-3 justify-content-center">
                {user?.carts.length !== 0 ?
                    <div className="col-12 d-flex flex-column align-items-center align-items-md-start flex-md-row cartBox  justify-content-around">
                        <div className="col-md-6 col-12 d-flex flex-column row-gap-2 CartsBox">
                        {isSuccess ? user?.carts.map((product: Product) => {
                            return <div key={product.id} className={`col-12 d-flex align-items-center flex-column flex-md-row ${isSuccess ? `justify-content-around row-gap-3 row-gap-md-0` : isFetching ? 'justify-content-center' : ''}`}>
                                <div className="col-md-3 col-8 rounded d-flex  overflow-hidden">
                                    <img alt="productImg" className="img-fluid h-100 w-100" src={product.thumbnail} />
                                </div>
                                <div className="col-md-7 col-12  d-flex flex-column row-gap-md-2 ">
                                    <div className="col-12 text-md-start text-center">{product.title}</div>
                                    <p className="col-12 text-md-start text-center m-0">{product.description}</p>
                                    <div className="col-12 text-md-start text-center">{product.price} $</div>
                                </div>
                                <div>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleProductDeletion(user.id, product)} >
                                            <DeleteIcon sx={{ color: 'red', ":hover": { color: "crimson" }, transition: '0.3s' }} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        }) : isFetching ? <div className="col-12 d-flex justify-content-center"><ThreeCircles innerCircleColor='#F28123' middleCircleColor='yellow' />
                        </div> : null}
                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                </div>
                    <div className="col-md-4 col-11 d-flex p-2 rounded flex-column row-gap-2 CartTotalBox">
                        <h4 className="col-12">Summary</h4>
                            <div className="col-12 d-flex align-items-center totalBox flex-column">
                                <div className="col-10 mb-3">Subtotal: {total} $</div>

                                {total <= 750 ? <div className="col-10 mb-3 shipping">Shipping : 45$</div> : <div className="col-10 mb-3 shipping">Shipping : 0 $</div>}

                                {total <= 750 ? <div className="col-10 ">Total: {total + 45} $</div> : <div className="col-10 ">Total: {total} $</div>}
                                <Button onClick={() => toast.success("Order Placed", {
                                    position: "bottom-center",
                                })} className='col-10 mt-3 p-2 rounded'>Checkout</Button>
                        </div>
                </div>
                    </div>
                    :
                    <div className="col-12 d-flex justify-content-center align-items-center emptyCart ">
                    <div >No Selected Items...</div>
                    </div>}
                </div>
        </div>
    </div>
)
}

export default Cart