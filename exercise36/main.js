
const colorPicker= document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorhistory = document.querySelector('#colorhistory');
const clearhistorybutton = document.querySelector('#clearhistorybutton');

colorPicker.addEventListener('change', function(){
    colorPreview.style.backgroundColor = colorPicker.value;
})

colorPicker.addEventListener("change", function () {
    const newColor = document.createElement("li");
    newColor.textContent = colorPicker.value;
    colorhistory.appendChild(newColor);
})


clearhistorybutton.addEventListener('change', function(event){
    event.preventDefault();
})

function clearHistoryButton(){
   colorhistory.remove('lastChild');
}