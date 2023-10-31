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
function Cart({ user,isFetching,isSuccess,refetch }: TCart) {

    function removeProduct(arg: IUpdateCart) {
        const {id,productRemoved}=arg
        return axios.put(`http://localhost:3001/users/${id}`,{...user,carts:[...user.carts.filter((product:Product) => product.id !== productRemoved.id)]})
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
    

return (
    <div className="container-fluid">
        <div className="row">
            <Wrapper className="col-12 d-flex flex-column justify-content-center align-items-center">
                <span className="col-12 text-center">check your cart</span>
                <h1>Cart</h1>
            </Wrapper>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-11 py-2 d-flex justify-content-center">
                <div className="col-6 d-flex flex-column row-gap-2 CartsBox">
                    { isSuccess ? user?.carts.map((product: Product) => {
                        return <div key={product.id} className={ `col-12 d-flex align-items-center ${isSuccess ? `justify-content-around`:isFetching ?'justify-content-center':''}`}>
                            <div className="col-3 rounded d-flex  overflow-hidden">
                                <img alt="productImg" className="img-fluid h-100 w-100" src={product.thumbnail} />
                            </div>
                            <div className="col-7 d-flex flex-column">
                                <div className="col-12">{product.title }</div>
                                <p className="col-12">{product.description}</p>
                                <div className="col-12">{ product.price} $</div>
                            </div>
                            <div>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => handleProductDeletion(user.id, product)} >
                                        <DeleteIcon sx={{ color: 'red', ":hover": { color: "crimson" },transition: '0.3s' }} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    }) : isFetching ? <div className="col-12 d-flex justify-content-center"><ThreeCircles innerCircleColor='#F28123' middleCircleColor='yellow' />
                    </div> :null}
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

            </div>
        </div>
    </div>
)
}

export default Cart