import React from 'react'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const cartCount = useSelector((store) => store.cart.cartCount)
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-evenly',backgroundColor:'ButtonShadow'}}>
        <h2>HOME</h2>
        <h3 style={{backgroundColor:'lightblue',color:'brown',width:'5em',textAlign:'center',border:'1px solid black',borderRadius:'1em',cursor:'pointer'}}>CART <span>{cartCount}</span></h3>
    </div>
  )
}

export default Navbar