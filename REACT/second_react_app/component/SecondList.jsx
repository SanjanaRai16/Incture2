function SecondList(){
    const students=[
        {id:1,name:"Sanju",city:"Mangaluru"},
        {id:2,name:"Saanu",city:"Bengaluru"},
        {id:3,name:"Ashu",city:"Mysuru"},
        {id:4,name:"Alva",city:"Mumbai"},
        {id:5,name:"Rai",city:"Pune"},
    ]

    return(
        <div>
            <h2>Students</h2>
                {
                    students.map((student)=><p key={student.id}>Name:{student.name} City:{student.city}</p>)
                }
           
        </div>
    )
}
export default SecondList;