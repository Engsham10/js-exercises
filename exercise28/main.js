// using Async/ Await
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

console.log('sham');

async function getUserData() {
    try{    
        const user = await getUser();
        console.log(user);
    }
    catch(error){
        console.error(error);
    }
} 

getUserData();