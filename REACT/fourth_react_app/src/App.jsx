import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import Productlist from './components/ProdutList'
import Cart from './components/Cart'
function App() {
  

  return (
    
      <div>
        <h1>Redux</h1>  
           {/*    <Counter/> */}
           <Productlist/>
           <Cart/>
        </div>
        )
       
}

export default App
