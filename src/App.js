import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import './App.css'
import Header from './main/header-page/Header';
import Login from './main/login-page/Login';
import Home from './main/home-page/Home';
import Cart from './main/cart-page/Cart';
import Fav from './main/fav-page/Fav';
import { store } from './main/redux/store';
import { Provider } from 'react-redux';







function App() {

  
  return (
    <div className="App">
     
      <Provider store={store}>
      <BrowserRouter> 
      {/* {state?.cart?.authenticated ? ( */}
            <> 
            <Header></Header>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="fav" element={<Fav />}></Route>
                <Route path="*" element={<Navigate to="home"></Navigate>}></Route>

              </Routes>
            </>
              
          {/* ) : (
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
              </Routes>
          )} */}
      </BrowserRouter>
      </Provider>
     
      
    </div>
  );
}

export default App;
