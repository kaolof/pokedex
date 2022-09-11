btn=document.querySelector('.btn-menu');
navMenu=document.querySelector('.end');
btn.addEventListener('click', ()=>{
    console.log('hola');
    navMenu.classList.toggle('show');
});