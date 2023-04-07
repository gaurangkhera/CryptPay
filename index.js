const mbtn = document.getElementById('mbtn');
let nav = document.getElementById('mobile-menu');

mbtn.addEventListener('click', function(){
    if (nav.classList.contains('hidden')){
    nav.classList.remove('hidden');
    }
    else{
        nav.classList.add('hidden');
    }
});