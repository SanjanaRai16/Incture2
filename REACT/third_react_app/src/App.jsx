import {BrowserRouter,Routes,Route,Router} from "react-router-dom";
//import Profile from "./component/Profile";
import Home from "./component/Home";
import { Link } from "react-router-dom";
import NavBar from "./component/Navbar";
import Error from "./component/Error";
import { Navigate } from "react-router-dom";
import User from "./profile/User";
import { NavLink } from "react-router-dom";
import "./App.css";
import Profile from "./nested/Profile";
import Setting from "./nested/Setting";
import Dashboard from "./nested/Dashboard";
import Product from "./nested/Product";
import FirstForm from "../form/FirstForm";
import SecondForm from "../form/SecondForm";
import ThirdForm from "../form/Thirdform";
import FourthForm from "../form/Fourthform";
import FormValid from "../external_form/FormValid";
import FormValidation from "../external_form/FormValid2";
import Form3 from "../external_form/Form3";
function App() {
 


    /*  <BrowserRouter> 
      <nav style={{ margin: '20px' }}></nav>  */
        {/* <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: "15px",
            color: isActive ? 'green' : 'blue',
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            marginRight: "15px",
            color: isActive ? 'green' : 'blue',
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Profile
        </NavLink>
        <NavLink
          to="/user/ram"
          style={({ isActive }) => ({
            marginRight: "15px",
            color: isActive ? 'green' : 'blue',
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Ram
        </NavLink> */}
      {/*   
        <NavLink to="/" className={({isActive})=>isActive?"active-link":"link"}>Home</NavLink>
   <NavLink to="/profile" className={({isActive})=>isActive?"active-link":"link"}>Profile</NavLink>
    */}
   {/*    <NavBar /> */}
      {/* <Routes>
        <Route path="/home" element={<Home/>}/>
         <Route path="/profile" element={<Profile/>}/>
      </Routes> */}
      
      {/* <Routes> */}
        {/* <Route path="/" element={<Home/>}/>
         <Route path="/profile/" element={<Profile/>}/>
         <Route path="/*" element={<Error/>}/>
         <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/user/:userName" element={<User/>}/>  */}
         /*  <Route path="/" element={<Home/>}/> 
          <Route path="/product" element={<Product/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="profile"  element={<Profile/>} />
          <Route path="setting"  element={<Setting/>} />
          </Route> */
      /* </Routes>

         </BrowserRouter> 
         */
        return (
        <div>
{/* <FirstForm/> */}
{/* <SecondForm/> */}
{/* <FourthForm/> */}
{/* <FormValid/> */}
{/* <RegistrationForm/> */}
<FormValidation/>
<Form3/>




        </div>
  )
}

export default App
