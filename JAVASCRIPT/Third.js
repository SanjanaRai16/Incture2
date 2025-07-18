/* export function add(x,y){

    return x+y;
}
export function sub(x,y){

    return x-y;
}
 */
/* function add(x,y){

    return x+y;
}
export default add; */


const datas=[

        {name:"ABC",Profession:"Software Developer"},
        {name:"XYZ",Profession:"Software Tester"},

    
];
function getDatas(){
    setTimeout(() =>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}-${data.Profession}</li>`
        })
        document.body.innerHTML=output;
    },3000);
}
function createDatas(newData,callback){
    setTimeout(() =>{
        
        datas.push(newData);
        x=callback();
            
        },5000);
}
createDatas({name:"ajay",Profession:"senior Developer"},getDatas);