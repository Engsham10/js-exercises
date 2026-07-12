
// query selector by id

function changeImage(){
    const image = document.querySelector('#image');
    const url = prompt('enter your url');
    const border = prompt('enter image border');
    const width = prompt('enter image width');
    const height = prompt('enter image height');
    const borderRadius = prompt('enter image border-radius');
    image.setAttribute('src', url);
    image.style.border = border;
    image.style.width = width;
    image.style.height = height;
    image.style.borderRadius = borderRadius;
}
