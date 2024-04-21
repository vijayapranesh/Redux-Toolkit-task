
import { useEffect } from 'react'
import './App.css'
import CartProducts from './components/CartProducts'
import Navbar from './components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { updateTotal } from './Slice/cartSlice'

function App() {
 const {products} = useSelector((store)=>store.cart)
 const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(updateTotal())
 },[products,dispatch])

  return (
    <>
      <Navbar/>
      <CartProducts/>
    </>
  )
}

export default App
