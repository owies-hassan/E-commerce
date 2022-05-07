import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {controllerLogin, isLoggedFun, storageImgFun} from "../../Store/Action";
import './Header.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import {Badge} from "@mui/material";

const pages = [{name:'PRODUCTS',icon:<AddBusinessOutlinedIcon />,badge:false},{name:'BUY',icon:<AddShoppingCartIcon/>,badge:true}];
const settings = ['Profile', 'Account', 'Logout'];
const otherPage = ['login', 'register']

const Header = () => {
    const history = useNavigate();
    const dispatch = useDispatch()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const {controlLogin, isLogged,storageImg,incBadge,selectImg} = useSelector(state => state)


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const goPages = (event) => {
        switch (event.textContent) {
            case 'PRODUCTS':
                return history('/products')
            case 'BUY':
                return history('/buy')
            case 'LOGIN':
                return history('/log')
        }
        return console.log('error')
    }
    const goHome = () => {
        return history('/')
    }
    const handleSetting = (e) => {
        switch (e.textContent) {
            case 'Logout':
                 dispatch(isLoggedFun(false))
                localStorage.setItem('isLogged',false)
            case 'Account':
                return console.log('account')
            case 'Profile':
                return  history('/profile')
        }
        return console.log('error')
    }
    const handleSwitchLogin = (item) => {
        if (item === 'login') {
            dispatch(controllerLogin(!controlLogin))
            history('/log')
        } else if ('register') {
            dispatch(controllerLogin(!controlLogin))
            history('/register')
        }
    }


    const checkerLogged=JSON.parse(localStorage.getItem('isLogged'))
    useEffect(() => {
        if (checkerLogged===true){
        dispatch(isLoggedFun(true))

        }else {
            dispatch(isLoggedFun(false))
        }
    }, [checkerLogged])


    return (

        <AppBar  position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        className='pointer'
                        onClick={goHome}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        OwiesStore
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page,id) => (
                                <MenuItem   key={Math.random()*19}  onClick={handleCloseNavMenu}>
                                    <Button onClick={(e) => goPages(e.target)}
                                        // sx={{my: 2, color: 'white', display: 'flex'}}
                                            variant="outlined" startIcon={page.icon}>
                                        {page.name}
                                    </Button> </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page,id) => (
                           <div   key={id} style={{position:'relative'}}>
                               <Button  onClick={(e) => goPages(e.target)}

                                        sx={{my: 2, color: 'white', display: 'flex'}}
                                        variant="outlined" startIcon={page.icon}>

                                   {page.name}

                               </Button>
                               {page.badge&&<Badge className='content-badge' color="secondary" badgeContent={incBadge}>

                               </Badge>}
                           </div>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        {isLogged === false &&
                            <div> {otherPage.map(item => {
                            return (<Button
                                onClick={() => handleSwitchLogin(item)} key={item} variant='contained'
                                color='error'>{item}</Button>)
                        })}</div>}
                        {isLogged === true && <Box>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar
                                        src={selectImg}
                                        alt="Remy Sharp"/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography onClick={(e) => handleSetting(e.target)}
                                                    textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;

