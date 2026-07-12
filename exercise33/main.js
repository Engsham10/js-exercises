
// DOM

// query selector by id
const header = document.querySelector('#header');
// query selector by class
const text = document.querySelector('.text');


function changeContent(){
 header.textContent = 'Welcome to a new mentorship';
 text.innerHTML = 'this mentorship will take upto 6month';

}