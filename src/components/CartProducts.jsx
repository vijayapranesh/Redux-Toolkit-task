import React from 'react'
import Product from './Product'
import {useSelector} from 'react-redux'

const CartProducts = () => {
  const {products,total,cartCount} = useSelector((store) => store.cart)
  return (
    <div>

        {cartCount>0 ? ( <>
          <div>
              {
                  products.map((item,index) =><Product
                      key={index}
                      images={item.images}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      quantity={item.quantity}/> )
              }       
            </div>
         
            <div style={{backgroundColor:'ButtonShadow',margin:'1em 0',padding:'1em'}}>
               <h3 style={{display:'flex',justifyContent:'space-around'}}>TOTAL: <span>${total}</span></h3>
               <h3 style={{display:'flex',justifyContent:'space-around'}}>SHIPPING: <span>FREE</span></h3>
            </div>

      
            </>) : (<> <h1 style={{backgroundColor:'ButtonShadow',margin:'1em 0',padding:'1em',textAlign:'center'}}>Your Cart Is Empty</h1> </>)}
          </div>
  )
}

export default CartProducts