let menu=document.getElementById("menu");
let nav=document.querySelector(".navbar");

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times')
    nav.classList.toggle('active')
})

