
var modal= document.querySelector('.modal');
var overlay=document.querySelector('.overlay');
var btnCloseModal= document.querySelector('.close-modal');
var btnOpenModal=document.querySelectorAll('.show-modal');



for(var i=0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', function () {
        console.log('botton clicked');

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
        
        
    })
}
// close button
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    
})

// overlay
overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
    
})

// keyboard event
document.addEventListener('keydown', function (e) {

    console.log(e.key)
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden'))
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        //console.log('esc was pressed')
    }
    
})





















