import '../styles/globals.css'
import { CartContext, useCartState}  from '../hooks/use-cart.js'
import { createContext, useContext } from 'react'

//import Nav from '../components/Nav/Nav.js';
//import Nav from "react-bootstrap/Nav";


function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return(
  <CartContext.Provider value = {cart}>
  
   <Component {...pageProps} />
  </CartContext.Provider>
  )
}

export default MyApp
