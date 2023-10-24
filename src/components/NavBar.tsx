import './NavBar.css'
import ResponsiveAppBar from './materialUI/AppBar';


function NavBar() {
return (
    <div className='container position-relative navbarCon'>
        <div className='row  '>
            <div className='col-12 p-0'>
                <ResponsiveAppBar  />
            </div>
        </div>

    </div>
)
}

export default NavBar