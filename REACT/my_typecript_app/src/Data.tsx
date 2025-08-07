

function Data() {

    let userName:string="Sanju"
    //userName=1234
    let userAge:number=25
    let isActive:boolean= true
    //isActive="hi"

    const course:string[] = ["React", "Angular", "Vue"]; 
    
    /* const emp1={
        id:100,
        name:"Sanju",
      city:"Bangalore",

    } */
   type Employee={
        id:number,  
        name:string,
        city:string }
    const emp1:Employee={
        id:100,     
        name:"Sanju",
        city:"Bangalore"}

  return (
    <div>
      <h2>User Profile</h2>
        <p>Name: {userName}</p>
        <p>Age: {userAge}</p>
        <p>Is Active:{isActive ===true ?"YES":"NO"}</p>
        <ul>
            {course.map((item, index) => (
                <li key={index}>{item}</li>   
            ))}      
        </ul>
        <h2>Employee Profile</h2>
        <p>EMPLOYEE ID: {emp1.id}</p>        
        <p> Employee Name: {emp1.name}</p>
        <p>Employee City: {emp1.city}</p>
    </div>
  );
}
export default Data;