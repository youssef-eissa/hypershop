import { Wrapper } from "./ReusableComponents/Wrapper.style"
import { OneUser } from "../types/app"
import './profile.css'
import SimpleBackdrop from "./materialUI/Backdrop"
import { ToastContainer, toast } from 'react-toastify';


type TProfile={
    user: OneUser
    refetch: () => void
}
function Profile({ user,refetch }: TProfile) {
return (
    <div className="container-fluid">
        <div className="row">
            <Wrapper className="col-12 d-flex flex-column justify-content-center align-items-center">
                <span className="col-12 text-center mb-3">Hello</span>
                <h1 className="col-12 text-center">Profile Page</h1>
            </Wrapper>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-10 profileBox my-3 d-flex flex-column">
                <h1 className="col-12">Profile Info</h1>
                <p className="col-12">Name: <span>{user?.name}</span></p>
                <p className="col-12">Email: <span>{user?.email}</span></p>
                <p className="col-12">user: <span>{user?.username}</span></p>
                <div className="col-md-3 col-6 p-2 rounded d-flex mx-auto justify-content-center align-items-center"><SimpleBackdrop notify={toast.success as (e : string)=>void} refetch={refetch} /></div>
                    <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={true}
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
)
}

export default Profile