import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import Productlist from './components/ProdutList'
import Cart from './components/Cart'
import UserList from './api/UserList'
import SecondUserList from './api/SecondUserList'
import UserListAxioS from './api/UserAxios'
import Fetch from '../middleware/Fetch.'
import FirstError from '../error/FirstError'
import Second from '../error/SecondError'
import ErrorBoundary from '../error/rrorboundary'
function App() {
  

  return (
    
      <div>
        <h1>Redux</h1>  
           {/*    <Counter/> */}
           {/* <Productlist/>
           <Cart/> */}{/* 
           <UserList/> */}
          {/*  <SecondUserList/> */}
        {/*   <UserListAxioS/> */}
          {/*  <Fetch/> */}
        <ErrorBoundary>
          <FirstError name="SANJU"/>
        
        </ErrorBoundary>

        </div>
        )
       
}

export default App
