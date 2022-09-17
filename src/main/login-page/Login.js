import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { TextField ,Button} from "@mui/material/";
// import { useDispatch, useSelector } from "react-redux";
// import { authe } from "../redux/slice";


const Login = () => {
  // const dispatch = useDispatch()
  const [userName] = useState(["MARISELVAM"]);
  const [password] = useState(["123456"]);
  const [getName, setGetName] = useState([]);
  const [getPass, setGetpass] = useState([]);
  const navigate = useNavigate();
//   const state = useSelector((state) => state)
//  const set = state.cart.authenticated


  const loginFun = (event) => {
    if (event.target.name === "Name") {
      setGetName([event.target.value]);
    }
    if (event.target.name === "pass") {
      setGetpass([event.target.value]);
    }
  };

  const include = () => {
    if (userName[0] === getName[0] && password[0] === getPass[0]) {
    navigate("/home");
    } else {
      alert("INVALID USERNAME AND PASSWORD");
    }

    // dispatch(authe(true))
    // localStorage.setItem('isLoggedIn',JSON.stringify(true))
    // console.log(set , "state");
  };



  return (
    <div className="login-part">
      
      <div className="login-box">
        <h1>LOGIN </h1>

        <div className="login-btn">
          <form>
            <TextField
              name="Name"
              onChange={loginFun}
              type="text"
              id="outlined-basic"
              label="UserName"
              variant="outlined"
            />{" "}
          </form>{" "}
          <br></br>
          
          <form>
            <TextField
             name="pass"
             onChange={loginFun}
              type="password"
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
          </form>
        
         
        </div >
        <div style={{textAlign:"center" ,marginTop:"20px" ,marginBottom:"50px"}}>
         <Button variant="contained" color="secondary" onClick={() => include()}>
            SUBMIT
          </Button>
          </div>
      </div>
    </div>
  );
};

export default Login;
