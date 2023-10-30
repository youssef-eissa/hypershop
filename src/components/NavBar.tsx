import './NavBar.css'
import ResponsiveAppBar from './materialUI/AppBar';
import { OneUser } from '../types/app';

type TNavBar = {
    setSignup: (e: boolean) => boolean;
    user: OneUser;
    isSuccess: boolean;
}
function NavBar({ setSignup,user,isSuccess }: TNavBar) {
return (
    <div className='container position-absolute navbarCon'>
        <div className='row'>
            <div className='col-12 p-0'>
                <ResponsiveAppBar user={user as OneUser} isSuccess={isSuccess} setSignup={setSignup as (e : boolean) => boolean} />
            </div>
        </div>

    </div>
)
}

export default NavBar