function TableList(){
    const students=[
        {id:1,name:"Sanju",city:"Mangaluru"},
        {id:2,name:"Saanu",city:"Bengaluru"},
        {id:3,name:"Ashu",city:"Mysuru"},
        {id:4,name:"Alva",city:"Mumbai"},
        {id:5,name:"Rai",city:"Pune"},
    ]

return(
 <div>
    <h2>Students List:</h2>
        <table border="2" cellPadding="10" cellSpacing="0">
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
   
 </div>
)
}
export default TableList;
