
import First from "./First.jsx"
import Second from "./Second.jsx"
import Third from "./Third.jsx"
import Fourth from "./Fourth.jsx"
import Card from "./Card.jsx"
import Store from "./Store.jsx"
import Counter from "./Counter.jsx"
import NewComp from "./NewComp.jsx"
//import First from "./First.jsx"
import FirstList from "../component/FirstList.jsx"
import FirstEvent from "./FirstEvent.jsx"
import SecondList from "../component/SecondList.jsx"
import EmployeeList from "../component/EmployeeList.jsx"
import CourseList from "../component/CourseList.jsx"
import TableList from "../component/TableList.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrapTable from "../component/BootStrapTable.jsx"
import NameList from "../component/Namelist.jsx"
import NameList2 from "../component/NameList2.jsx"
import NameList3 from "../component/NameList3.jsx"
import NameList4 from "../component/NameList4.jsx"
import NameList5 from "../component/NameList5.jsx"
import LifeCycleFirst from "../life_cycle_component/LifeCycleFirst.jsx"
import LifeCycleSecond from "../life_cycle_component/LifeCylceSecond.jsx"
import LifeCycleThird from "../life_cycle_component/LifeCycleThird.jsx"
import FirstComp from "../hooks/FirstComp.jsx"
import SecondComp from "../hooks/SecondComp.jsx"
import ThirdComp from "../hooks/ThirdComp.jsx"
import FourthComp from "../hooks/FourthComp.jsx"
import FifthComp from "../hooks/FifthComp.jsx"
import SixthComp from "../hooks/SixthComp.jsx"
import Parent from "../hooks/Parent.jsx"
import FirstCounter from "../custom_hooks/FirstCounter.jsx"
import SecondCounter from "../custom_hooks/SecondCounter.jsx"
import ThirdCounter from "../custom_hooks/ThirdCounter.jsx"
import FirstComponent from "../context/FirstComponent.jsx"
import UserContext from "../context/userContext.jsx"
import ThemeProvider from "../new_context/ThemeContext.jsx"
import ThemeToggleComp from "../new_context/ThemeToggleContext.jsx"
import { useState,useEffect } from "react"

function App() {
  /* function handleClick(){
    alert("Function from parent component"); */
    //const username="sachin";
  
  

    {/* <UserContext.Provider value={username} */}
   /*  <div> */ 
      {/* <h1>React App with vite</h1> */}
   {/* <First/>
      <Second/>
      <Third/>
      <Fourth/>  */}
{/*       <Card name="Ashu" city="Mangalore"/>
       <Card name="Abhi" city="Bcroad"/>
       <Card name="Sanju" city="Kudla"/> */}
      {/*  <Card label="Click Me" onClick={handleClick}/>
       <Store/>
       <Counter initialCount={100}/>
       <NewComp/>
       <FirstEvent/> */}
       {/* <FirstList/>
       <SecondList/>
       <EmployeeList/>
       <CourseList/>
       <TableList/>
       <BootStrapTable/> */}
       {/* <NameList/>
       <NameList2/>
       <NameList3/>
       <NameList4/>
       <NameList5/> */}
    {/*    <LifeCycleFirst/> */}
    {/* <LifeCycleSecond/>
    <LifeCycleThird/>
  
   {/*  <SecondComp/> */}
   {/*  <ThirdComp/>
 */}
       {/* <FourthComp/>
       <SecondComp/>
       <FifthComp/> */}
      {/*  <SixthComp/>
       <Parent/>
     */}
     {/* <FirstCounter/>
     <SecondCounter/>
     <ThirdCounter/>
 */}
 {/* <FirstComponent username={username}/> */}


/*  </ *//* 
 <FirstComponent/> */
 //</div> 
/*  </UserContext.Provider>   */ //useercontext provider outside div
  /* return (
<ThemeProvider>
      <h1 style={{ textAlign: 'center' }}>Theme Toggle Application</h1>
      <ThemeToggleComp />
    </ThemeProvider>
  );
} */

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [cities, setCities] = useState([]);
  //if useeffect does not savedName then wen u refresgh the data is lost
  //so u have to save the data i n the local storage and use ity9yiiiiiiii
  /* useEffect(()=>{
    localStorage.removeItem("username");
    const savedName=localStorage.getItem("username")
    if(savedName){
      setName(savedName);
    }

  },[]) */
  /* useEffect(()=>{
    //sessionStorage.removeItem("username");
    const savedName=sessionStorage.getItem("username")
    const savedNumber=sessionStorage.getItem("number")
    if(savedName){
      setName(savedName);
      
    }
    if(savedNumber){
      
      setNumber(savedNumber)
    }


  },[]) */
  useEffect(() => {
    const savedName = sessionStorage.getItem("username");
    const savedEmail = sessionStorage.getItem("email");
    const savedNumber = sessionStorage.getItem("number");
    const savedGender = sessionStorage.getItem("gender");
    const savedCities = sessionStorage.getItem("cities");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedNumber) setNumber(savedNumber);
    if (savedGender) setGender(savedGender);
    if (savedCities) setCities(JSON.parse(savedCities));
  }, []);

  
  //const handleChange=(event)=>{
    /* setName(event.target.value);
    sessionStorage.setItem("username",event.target.value)
    setNumber(event.target.value);
    sessionStorage.setItem("number",event.target.value) */
    /*  const [ name, value ] = event.target;

  if (name === "username") {
    setName(value);
    sessionStorage.setItem("username", value);
  } else if (name === "number") {
    setNumber(value);
    sessionStorage.setItem("number", value);
  }
}; */
const handleNameChange = (e) => {
    setName(e.target.value);
    sessionStorage.setItem("username", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    sessionStorage.setItem("email", e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    sessionStorage.setItem("number", e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    sessionStorage.setItem("gender", e.target.value);
  };

  const handleCitiesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setCities(selectedOptions);
    sessionStorage.setItem("cities", JSON.stringify(selectedOptions));
  };

  
   
 /*      <div>
<h1>Welcome:{name||'Guest'}</h1>
<input type="text" value={name} onChange={handleChange} placeholder="Enter name"/>
      </div>
    )
   
  
  } */return(

  
  <div><br></br>
    <form action="/submit" method="post">
  
  <label for="username">Username:</label>
  <input type="text" name="username"  value={name} onChange={handleNameChange} required/><br></br><br></br>

 
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"  value={email}  onChange={handleEmailChange} required/><br></br><br></br>

  <label for="phone">Phone Number:</label>
  <input type="number"   name="number" value={number} onChange={handleNumberChange}  required/><br></br><br></br>


  <label>Gender:</label>
  <input type="checkbox"  name="gender" value="male" onChange={handleGenderChange}/>
  <label for="male">Male</label>
  <input type="checkbox"  name="gender" value="female"  onChange={handleGenderChange}/>
  <label for="female">Female</label><br></br><br></br>
 
  

  <label for="cities">Cities:</label>
<select id="cities" name="cities[]" multiple size="4" onChange={handleCitiesChange}>
  <option value="Chennai">Chennai</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Delhi">Delhi</option>
  <option value="Bangalore">Bangalore</option>
</select><br></br><br></br>


  <input type="submit" value="Submit"/>
</form>
</div>
)
}

export default App

