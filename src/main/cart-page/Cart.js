import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdd } from '../redux/slice'

const Cart = () => {
  const dispatch = useDispatch()
 const state = useSelector((state)=> state)
 console.log(state);
 const view = state.cart.setAddCart
 console.log(view)

// //plus qty 
const plusQty = (el) => {
  const item = view.map((value) => {
    if (value.id === el.id) {
      return {
        ...value,
        qty: value.qty + 1,
      };
    } else {
      return value;
    }
  });
  dispatch(setAdd(item ));
};


// //minusQty
const minusQty = (minus) => {
  console.log(minus);
  if (minus.qty > 1) {
    const isExit = view.some((plusData) => minus.id === plusData.id);
    if (isExit === true) {
      const item = view.map((value) => {
        if (value.id === minus.id) {
          return {
            ...value,
            qty: value.qty - 1,
          };
        } else {
          return value;
        }
      });
      dispatch(setAdd( item));
    }
  } else {
    const eraseZero =view.filter((data) => {
      return data !== minus;
    });
    dispatch(setAdd(eraseZero ));
  }
};
 
// remove ele
 const removeEle =  (data) =>{
  const remove = view.filter((ele) =>{
     return ele !== data
  })
dispatch(setAdd([...remove]))
}

  return (
      <div>
      <h1 style={{textAlign:"center" }}>LIST OF HEADSET</h1>
      <div className='headset-con'>
      {view.map((ele,index)=>(
        <div className='headset-item' key ={index}>
          <img src={ele.pic} alt=""></img>
          <p>{ele.features}</p>
          <h4 style={{textAlign:"center"}}>qty : {ele.qty}</h4>
          <h2 style={{textAlign:"center"}}>Price : {ele.price * ele.qty}</h2>
          <div style={{textAlign:"center" ,marginTop:"20px" ,marginBottom:"50px"}}>
          <Button variant="contained" color="secondary"  style= {{marginRight:"20px"}} onClick = {() => plusQty(ele)} >
      
            +
          </Button>

          <Button variant="contained" color="secondary" style= {{marginRight:"20px"}}  onClick={()=>removeEle(ele)}   >
      
            REMOVE CART
          </Button>
          <Button variant="contained" color="secondary" onClick = {() => minusQty(ele)}  >
      
      -
    </Button>
         </div>

          
        </div>
        
      ))}
        </div>
      
    </div>
  )
}

export default Cart