import React from 'react'
import "./home.css"
// import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {  setAdd ,fav } from '../redux/slice'



const Home = () => {
const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  const cartData = state.cart.cartItem
   
  const add =(data) =>{

const secCart = state.cart.setAddCart
const isExit = secCart.some((val) => val.id === data.id)
if (isExit){
  return  data
}
else{
  dispatch(setAdd([...secCart , {...data , qty :1}]))

}
  }



  const favorite =(data) =>{
    console.log(data , "dA")
    const setFav = state.cart.favCart
    const isExit = setFav.some((val) => val.id === data.id)
    if (isExit){
      return  data
    }
    else{
      dispatch(fav([...setFav , {...data , qty :1}]))
    
    }
      }


  return (
    <div >
      <h3>cartv :{cartData.length}</h3>
      <h1 style={{textAlign:"center"}}>LIST OF HEADSET</h1>
      <div className='headset-con'>
      {cartData.map((ele,index)=>(
        <div className='headset-item' key ={index}>
          <img src={ele.pic} alt=""></img>
          <p>{ele.features}</p>
          <h2 style={{textAlign:"center"}}>Price : {ele.price }</h2>
         <div className="icon">
         <i  id = "icon-1" onClick={() => add(ele)} className="fa fa-cart-plus" aria-hidden="true"></i>
          <i  id="icon-2" onClick={() => favorite(ele)} className="fa fa-heart" aria-hidden="true"></i>
          </div>

          
        </div>
        
      ))}
     
</div>

      
    </div>
  )
}

export default Home