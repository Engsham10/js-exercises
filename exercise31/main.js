// fetching API

async function getUser(){

    // online fetching fake API
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok){
        throw new Error(`HTTP error! status ${response.status}`);
        
    }
    const data = await response.json();
    console.log(data);
    }
   catch(error){
    console.log(error);
   }

}
getUser();