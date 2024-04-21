import {useDispatch} from 'react-redux'
import {incrementFunc,decrementFunc,removeFunc} from '../Slice/cartSlice.js'

const Product = ({name, description, price, images, quantity}) => {
    const dispatch = useDispatch()

  return (
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-evenly',border:'1px solid black',marginTop:'1em',padding:'1em 0'}}>

      <div style={{display:'flex',width:'70%',paddingLeft:'1em',flexWrap:'wrap'}}>
        <div>
            <img src={images} style={{width:'10em', height:'10em',paddingRight:'1em'}}></img>   
        </div>
        <div>
            <h2>{name}</h2>
            <h3>{description}</h3>    
        </div>  
      </div>
      
      
        <div>
             <button style={{cursor:'pointer'}} onClick={() => {dispatch(incrementFunc({name}))}}>+</button>
             <h3>{quantity}</h3>
            <button style={{cursor:'pointer'}}  onClick={() => {if (quantity>1) dispatch(decrementFunc({name}))}}>-</button>     
        </div> 
        <div>
            <h2>price:${price}</h2>
            <h3 onClick={() => {dispatch(removeFunc({name}))}} style={{color:'red',cursor:'pointer'}}>REMOVE</h3>
        </div>
       
    </div>
    
  )
}

export default Product