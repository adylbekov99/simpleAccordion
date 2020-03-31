const accordionBlock = document.querySelector('#accordion-block');

accordionBlock.addEventListener('click', function(e){
    if(e.target.tagName == 'A') {
        const li = e.target.parentElement;
        if(li.classList.contains('active')){
            li.classList.remove('active');
        } else {
            li.classList.add('active');
            
        }
    }
})