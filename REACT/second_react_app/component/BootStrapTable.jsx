import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function BootStrapTable(){
     const students=[
        {id:1,name:"Sanju",city:"Mangaluru"},
        {id:2,name:"Saanu",city:"Bengaluru"},
        {id:3,name:"Ashu",city:"Mysuru"},
        {id:4,name:"Alva",city:"Mumbai"},
        {id:5,name:"Rai",city:"Pune"},
    ]
    const handleClick=(id)=>{
        alert(`delete ${id}`);
    }
    

    return(
        <div className='container mt-4'>
            <h2 className='head 3'>Student Table:</h2>   
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                     {
                    students.map((s)=>(
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.city}</td>
                            <td>
                                 <Button variant="danger" onClick={()=>{handleClick(s.id)}}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>

    )
}
export default BootStrapTable;