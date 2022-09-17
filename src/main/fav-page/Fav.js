import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fav } from '../redux/slice'


const Fav = () => {
  const dispatch = useDispatch()
  const state = useSelector((state)=> state)
 
 const favour= state.cart.favCart

// remove fav element
 const removeEle =  (data) =>{
   const remove = favour.filter((ele) =>{
      return ele !== data
   })
console.log(remove , "re");
dispatch(fav([...remove]))
 }

  return (
    <div>
            <h1 style={{textAlign:"center"}}>LIST OF HEADSET</h1>
      <div className='headset-con'>
      {favour.map((ele,index)=>(
        <div className='headset-item' key ={index}>
          <img src={ele.pic} alt=""></img>
          <p>{ele.features}</p>
          <div style={{textAlign:"center" ,marginTop:"20px" ,marginBottom:"50px"}}>
          
          <Button variant="contained" color="secondary"  onClick ={()=> removeEle(ele)} >
      
            REMOVE CART
          </Button>
         </div>

          
        </div>
        
      ))}
        </div>
      
    </div>
  )
}

export default Fav