import { Link } from "react-router-dom"
import { Wrapper } from "./ReusableComponents/Wrapper.style"
function Notfound() {
return (
    <div className='container-fluid'>
        <div className='row'>
            <Wrapper className="col-12 d-flex justify-content-center align-items-center flex-column">
                <span className="col-12 text-center">Page Not Found</span>
                <h1 className="col-12 text-center mt-3">404 Error</h1>
            </Wrapper>
        </div>
        <div className="row">
            <div style={{ height: '50vh' }} className="col-12 d-flex justify-content-center align-items-center d-flex flex-wrap">
                <h3 className="col-12 text-center">Sorry, This pgae is not found</h3>
                <Link to ='/'>Back to home</Link>
        </div>
        </div>
    </div>
)
}

export default Notfound