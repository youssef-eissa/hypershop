import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './AppBar.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { OneUser } from '../../types/app';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../redux/user';
import { useLocation } from 'react-router-dom';
import CustomizedBadges from './CartBadge';
import { Button } from '../ReusableComponents/Button.style';
import { setUser } from '../../redux/user';
type TResponsiveAppBar = {
    setSignup: (e: boolean) => boolean;
    isSuccess: boolean;
    user: OneUser;
}
function ResponsiveAppBar({ setSignup,user,isSuccess }: TResponsiveAppBar) {
    const location=useLocation()
    const dispatch=useDispatch()
    const navigate = useNavigate()
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};
function handlelogout() {
    localStorage.clear()
        setSignup(false)
        dispatch(resetUser())
        window.location.reload()
        navigate('/login')
    }

return (
    <AppBar sx={{ backgroundColor: "transparent",boxShadow: "none",padding:0 }} position="static">
        <Container style={{padding:0}} maxWidth="xl">
        <Toolbar disableGutters>
                <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
            }}
        >
        <div style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); window.location.reload()}} className='col-12 d-flex-column align-items-center logo '>
        <div className='col-12 d-flex  justify-content-center align-items-center logo'><ShoppingBasketIcon className='me-2'/>HyperShop</div>
        <span className='col-12 text-center'>Online store</span>
            </div>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
                justifyContent: 'center',
            }}
            >
            <div style={{width:'300px'}} className='d-flex flex-column'>
            <Link style={location.pathname === '/' ? { color: '#F99417' } : { color: 'black' }} reloadDocument className='col-12 mb-3 toSection text-center' to='/' >Home</Link>
            <Link style={location.pathname==='/about'? { color: '#F99417' } : {color: 'black'}} reloadDocument className='col-12 mb-3 toSection text-center' to='/about' >About</Link>
            <Link style={location.pathname==='/shop'? { color: '#F99417' } : {color: 'black'}} reloadDocument className='col-12 mb-3 toSection text-center' to='/shop' >Shop</Link>
            <Link style={location.pathname === '/contact' ? { color: '#F99417' } : { color: 'black' }} reloadDocument className='col-12 toSection text-center' to='/contact' >Contact</Link>
            </div>
            </Menu>
        </Box>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
                textDecoration: 'none',
            
            
            }}
        >
        <div style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); window.location.reload()}} className='col-12 d-flex-column align-items-center logo '>
        <div className='col-12 d-flex  justify-content-center align-items-center logo'><ShoppingBasketIcon className='me-2'/>HyperShop</div>
        <span className='col-12 text-center'>Online store</span>
            </div>
        </Typography>
        <Box  sx={{ flexGrow:1 , display: { xs: 'none', md: 'flex' } }}>
            <Link style={location.pathname === '/' ? { color: '#F99417' } : { color: 'white' }} reloadDocument className='col-2 toSection text-center' to='/' >Home</Link>
            <Link style={location.pathname==='/about'? { color: '#F99417' } : {color: 'white'}} reloadDocument className='col-2 toSection text-center' to='/about' >About</Link>
            <Link style={location.pathname==='/shop'? { color: '#F99417' } : {color: 'white'}} reloadDocument className='col-2 toSection text-center' to='/shop' >Shop</Link>
            <Link style={location.pathname==='/contact'? { color: '#F99417' } : {color: 'white'}} reloadDocument className='col-2 toSection text-center' to='/contact' >Contact</Link>
        </Box>

            <Box sx={{ flexGrow: 0 ,width:'150px'}}>
            <Link reloadDocument className='col-5 me-md-5 me-3' to='/cart'> <CustomizedBadges user={user as OneUser} isSuccess={isSuccess} /></Link>
            <Tooltip title="Open settings">
                        
            <IconButton className='col-3  just' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.name} src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        
            </Tooltip>
                    <Menu

            sx={{ mt: '45px', }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
                    >
                    <div style={{ width: '200px' }} className='d-flex flex-column align-items-center settingBox'>
                    <Link reloadDocument onClick={()=>dispatch(setUser(user as OneUser))} className='col-10 mb-3 p-1 rounded text-center toProfile' to={`/profile/${user?.name}`}>Profile</Link>
                <Button onClick={handlelogout} className='col-10 rounded'>logout</Button>
                </div>
            </Menu>
        </Box>
        </Toolbar>
    </Container>
    </AppBar>
);
}
export default ResponsiveAppBar;