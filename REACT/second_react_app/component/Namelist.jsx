
function NameList(){



    
    const names=[{id:1,name:"Sanju",age:"20"},
        {id:2,name:"Saanu",age:"21"},
        {id:3,name:"Ashu",age:"23"},
        {id:4,name:"Alva",age:"24"},
        {id:5,name:"Rai",age:"25"},
            ]
    return(
        <div>
            <h2>TASK 1</h2>
            {
                names.map((names)=><p key={names.id}>{names.name}</p>)
            }
            </div>
    )
} 


    

export default NameList;


