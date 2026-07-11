
// fetching data

async function getUser(){
    //local fetching data 
    const response = await fetch('./data.json');
    const data = await response.json(); // parsing the json response
    console.log('user')
    console.log(data.id, data.name, data.city);
    console.log("orders")
    console.log(
        data.orders[0].id,
        data.orders[0].product,
        data.orders[0].qauntity);
}

getUser();