import  React from 'react';
import {AppBar,Box ,Toolbar , Typography , Button} from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { authe } from '../redux/slice';


 const Header = () => {
   const navigate = useNavigate()
  //  const dispatch = useDispatch()

   const navi = () =>{
    navigate("/cart")
  }
  const fav  = () =>{
    navigate("/fav")
  }
  const logout = () =>{
    // dispatch (authe( false))
    // localStorage.setItem("isLoggedIn" , JSON.stringify(false)) ;
  
  }

  return (
    // style={{position:"fixed" , width:"100%" , marginTop:"0%"}}
    <div > 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BRAND
          </Typography>
          <Button color="inherit" 
          onClick={()=>{navi()}}
          >VIEW CART</Button>
          <Button color="inherit" 
          onClick= {() =>{fav()}}
          >FAV CART</Button>
          <Button color="inherit" onClick={logout()}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}


export default Header ;