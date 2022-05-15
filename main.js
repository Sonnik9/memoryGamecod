
let cards = document.querySelectorAll('.memory-card');

// let arrCard = [];
let countCard = 0;

let flagCardEqual = false;
let flagCardUnEqual = false;

let firstCard;
let secondCard,
    antyDoudle = false;


// cards.forEach(card =>
//   arrCard.push(card),
//   // 
  
// );

cards.forEach(card => card.addEventListener('click', flipCard));




// (function shuffle() {
//     cards.forEach(card => {
//       let randomPos = Math.floor(Math.random() * 12);
//       card.style.order = randomPos;
//     });
//   })();

function flipCard() { 
  // let countCardElse = 0;  
  // countCardElse++;     
  // if(this.dataset.ind !== countCardElse) {
    
    countCard++;

  
  if(countCard == 2) {   
    this.classList.add('flip');
    secondCard = this;
    console.log(secondCard + 'sec');
    if (firstCard.dataset.name == secondCard.dataset.name) {
      disableCards(); 
      flagCardEqual = true;
      // console.log(firstCard + 'first');
    }
    else {
      flagCardEqual = false;
      // console.log(firstCard + 'first');

    }    
  }
  else if (flagCardEqual == false && countCard == 3) {
    unflipCards();
    this.classList.add('flip');
    firstCard = this;
    countCard = 1;
    // console.log(firstCard + 'first');
  }

  else if (flagCardEqual == true && countCard == 3) { 
    disableCards();
    this.classList.add('flip'); 
    firstCard = this;
    countCard = 1;
    flagCardEqual = false;
  }

  else if(countCard == 1) {
    this.classList.add('flip');
    firstCard = this;
    console.log(firstCard + 'first'); 
    console.log('djdjdjdj')   
  }

  // if(countCardElse ==2)
  //   countCardElse = 0;
  // console.log(countCardElse) 
    
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() { 
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');     
}






