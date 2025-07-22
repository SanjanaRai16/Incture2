
import First from "./First.jsx"
import Second from "./Second.jsx"
import Third from "./Third.jsx"
import Fourth from "./Fourth.jsx"
import Card from "./Card.jsx"
import Store from "./Store.jsx"
import Counter from "./Counter.jsx"
import NewComp from "./NewComp.jsx"
//import First from "./First.jsx"
import FirstEvent from "./FirstEvent.jsx"

function App() {
  function handleClick(){
    alert("Function from parent component");
  }
  
  return (
    <div>
      <h1>React App with vite</h1>
  {/*  <First/>
      <Second/>
      <Third/>
      <Fourth/> */}
{/*       <Card name="Ashu" city="Mangalore"/>
       <Card name="Abhi" city="Bcroad"/>
       <Card name="Sanju" city="Kudla"/> */}
       <Card label="Click Me" onClick={handleClick}/>
       <Store/>
       <Counter initialCount={100}/>
       <NewComp/>
       <FirstEvent/>

       
       
    
    
    </div>
  )
}

export default App
