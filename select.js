let selectEl = document.querySelector('#select-level');
selectEl.addEventListener('change', selectLevel);

function selectLevel() {
    switch(selectEl.value) {
        case 'easy':
            cardsContainer.innerHTML = {};
            
            easyStart();
            cards = document.querySelectorAll('.memory-card');
            restartGame();
            
        break;

        case 'middle':  
            cardsContainer.innerHTML = {};
            cardsContainer.style.width = 620 + 'px';
            cardsContainer.style.height = 380 + 'px';
            controlContainer.style.height = 380 + 'px';        
            middleStart(); 
            cards = document.querySelectorAll('.memory-card');
            restartGame();
        break;

        case 'advance': 
            cardsContainer.innerHTML ={};
            cardsContainer.style.width = 620 + 'px';
            cardsContainer.style.height = 420 + 'px';
            controlContainer.style.height = 420 + 'px';         
            advanceStart();
            cards = document.querySelectorAll('.memory-card'); 
            restartGame();         
        break;
    }  
   
}

 

