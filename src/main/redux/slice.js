import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem:  [
      {
        id:1,
        price: 500,
        head: "laptop brand",
        pic: require("../../asset/1.jpg"),
        features:
          "More and more people are turning to headsets for making calls, for listening to music, for playing games.",
      },
      {
        id:2,
        price: 600,
        head: "laptop brand",
        pic: require("../../asset/2.png"),
        features:
          " More and more people are turning to headsets for making calls, for listening to music, for playing games." ,
      },
      {
        id:3,
        price: 700,
        head: "laptop brand",
        pic: require("../../asset/3.jpg"),
        features:
          " More and more people are turning to headsets for making calls, for listening to music, for playing games.",
      },
      {
        id:4,
        price: 800,
        head: "laptop brand",
        pic: require("../../asset/4.jpg"),
        features:
          " More and more people are turning to headsets for making calls, for listening to music, for playing games.",
      },
    ],
    setAddCart : [] ,
    favCart : [] ,
    authenticated :  JSON.parse(localStorage.getItem('isLoggedIn'))|| false ,
  },
  reducers: {
    setAdd : (state , action) =>{
      state.setAddCart = action.payload
    }, 
    fav : (state , action) =>{
      state.favCart = action.payload
    },
    authe : (state , action) =>{
      state.authenticated = action.payload
    }
  },
});

export const {addToCart , setAdd , fav , authe} = cartSlice.actions
export default  cartSlice.reducer