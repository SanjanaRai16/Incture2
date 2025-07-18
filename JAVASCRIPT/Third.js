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
/* function createDatas(newData,callback){
    setTimeout(() =>{
        
        datas.push(newData);
        x=callback();
            
        },5000);
}
createDatas({name:"ajay",Profession:"senior Developer"},getDatas); */
/* function createDatas(newData){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{ 
        datas.push(newData);
        let error=false;
        if(!error){
            resolve();
        }
        else{
            reject("error")
        }
        
       
            
        },5000);
})
}
createDatas({name:"ajay",Profession:"senior Developer"})
.then(getDatas)
.catch(err=>console.log(err)) */
function createDatas(newData){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{ 
        datas.push(newData);
        let error=true;
        if(!error){
            resolve();
        }
        else{
            reject("error")
        }
        
       
            
        },5000);
})
}
createDatas({name:"ajay",Profession:"senior Developer"})
.then(getDatas)
.catch(err=>console.log(err))