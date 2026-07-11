// using promises
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             const success = true;
             if(success){
                resolve({id:20,name:'engsham',age:25});
             }else{
                reject("failed to get user");
             }
            },2000);
        })
   
}

getUser().then((data)=>console.log(data))
.catch((err) => console.log(err))