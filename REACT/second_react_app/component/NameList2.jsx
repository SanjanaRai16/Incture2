
function NameList2(){


const names=[
        {id:1,name:"Sanju",age:"20"},
        {id:2,name:"Saanu",age:"21"},
        {id:3,name:"Ashu",age:"23"},
        {id:4,name:"Alva",age:"24"},
        {id:5,name:"Rai",age:"25"},
            
           
        ]
  
return(
 <div>
    <h2>TASK 2</h2>
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
                    names.map((n)=>(
                        <tr key={n.id}>
                            <td>{n.id}</td>
                            <td>{n.name}</td>
                            <td>{n.age}</td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
   
 </div>
)
}
export default NameList2;