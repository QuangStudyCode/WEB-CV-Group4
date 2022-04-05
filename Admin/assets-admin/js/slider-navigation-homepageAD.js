var Btn=document.getElementById('button');
// console.log(Btn)
var Nav=document.querySelector('#slidebar');
// console.log(Nav)
var section=document.querySelector('.section')
// console.log(section)
Btn.addEventListener('click',function(){
    Nav.classList.toggle('to-left1');
    section.classList.toggle('to-left');
});