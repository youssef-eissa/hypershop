import './NavBar.css'
import ResponsiveAppBar from './materialUI/AppBar';

type TNavBar = {
    setSignup: (e : boolean) => boolean;
}
function NavBar({ setSignup }: TNavBar) {
return (
    <div className='container position-absolute navbarCon'>
        <div className='row'>
            <div className='col-12 p-0'>
                <ResponsiveAppBar setSignup={setSignup as (e : boolean) => boolean}   />
            </div>
        </div>

    </div>
)
}

export default NavBar