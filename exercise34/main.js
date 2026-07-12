
// query selector by class
const list = document.querySelector('.list');


function addItem(){
    const item = document.createElement('li');
    item.textContent = 'new item';
    list.appendChild(item);
}
function removeItem(){
    if(list.lastChild)
    {
     list.removeChild(list.lastChild);
    }
    else{
        alert('you removed successfully');
    }
    console.log(sham);
}