
let toggleNav=document.getElementById('toggleNav');

toggleNav.addEventListener('click',_=>{
    document.querySelector('.mobile-nav').classList.toggle('show');
    document.getElementById('open').classList.toggle('d-none');
    document.getElementById('close').classList.toggle('d-none');
})