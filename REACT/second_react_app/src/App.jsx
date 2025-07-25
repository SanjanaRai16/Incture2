
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
function App() {
  function handleClick(){
    alert("Function from parent component");
  }
  
  return (
    <div>
      {/* <h1>React App with vite</h1> */}
  {/*  <First/>
      <Second/>
      <Third/>
      <Fourth/> */}
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
     <FirstCounter/>
     <SecondCounter/>
     <ThirdCounter/>

    
    </div>
  )
}

export default App
