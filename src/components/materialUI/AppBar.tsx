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
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './AppBar.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { UserInfo } from '../../types/app';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../redux/user';

const pages = ['Product', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
type TResponsiveAppBar = {
    setSignup: (e:boolean) => boolean;
    setcorrectPassword: (r:boolean) => boolean;
}
function ResponsiveAppBar({ setSignup, setcorrectPassword }: TResponsiveAppBar) {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const user = useSelector<{ user: { user: UserInfo } }>((state) => state.user.user) as UserInfo
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
        setSignup(false)
        setcorrectPassword(false)
        dispatch(resetUser())
        navigate('/')
        localStorage.clear()
    }

return (
    <AppBar sx={{ backgroundColor: "transparent",boxShadow: "none",padding:0 }} position="static">
        <Container  maxWidth="xl">
        <Toolbar  disableGutters>
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
        <div className='col-12 d-flex-column align-items-center logo '>
        <div className='col-12 d-flex  justify-content-center align-items-center logo'><ShoppingBasketIcon className='me-2'/> HyperShop</div>
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
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
        </Typography>
        <Box  sx={{ flexGrow:1 , display: { xs: 'none', md: 'flex' } }}>
            <Link className='col-2 toSection text-center' to='/home' >Home</Link>
                    <Link className='col-2 toSection text-center' to='/about' >About</Link>
                    <Link className='col-2 toSection text-center' to='/shop' >Shop</Link>
                    <Link className='col-2 toSection text-center' to='/contact' >Contact</Link>
        </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Link className='col-5 me-5' to='/cart'> <ShoppingCartIcon sx={{ color: 'white', ":hover": { color: "#F99417" },transition: '0.3s' }} /></Link>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.name.toUpperCase()} src="/static/images/avatar/2.jpg" />
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
            <button onClick={handlelogout} className=''>logout</button>
            </Menu>
        </Box>
        </Toolbar>
    </Container>
    </AppBar>
);
}
export default ResponsiveAppBar;