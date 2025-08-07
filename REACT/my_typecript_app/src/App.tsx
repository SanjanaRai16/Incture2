
import './App.css'
import Data from './Data'
import PropComp from './Propcomp'
import Button from './Button'
import Card from './Card'
import StateComp from './StateComp'
import FormComp from './FormComp'
function App() {
  const handleClick = () => {
    alert("Button clicked");
  };
 

  return (
    
      <div>
        <h2>React with TypeScript</h2>
       {/*  <Data />
        <PropComp name="Sanju" />
        <Button label="Click" onClick={handleClick}  />
        <Button label="Disabled button" onClick={handleClick} disabled /> */}
        <Card>
          <h2>Card Title</h2>
          <p>This is a simple card with custom styles.</p>
        </Card>
         <Card style={{ backgroundColor: 'lightgray', marginTop:'20px' }}>
          <h2>Styled Card</h2>
          <p>This is a styled card with custom styles via props.</p>
        </Card>
        <StateComp />
        <FormComp/>
       
        </div>
        
  )
}

export default App
