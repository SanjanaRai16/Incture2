import EmployeeCard from "./EmployeeCard";
function EmployeeList(){
    const employees=[
        {id:1,name:"Sanju",city:"Mangaluru"},
        {id:2,name:"Saanu",city:"Bengaluru"},
        {id:3,name:"Ashu",city:"Mysuru"},
        {id:4,name:"Alva",city:"Mumbai"},
        {id:5,name:"Rai",city:"Pune"},
    ]
    return(
        <div>
            <h2>Employee List:</h2>
        {
            employees.map((employee)=><EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>)
        }
        </div>
    )
}
export default EmployeeList;