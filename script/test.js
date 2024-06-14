const buttons = document.querySelectorAll('.discover__btn');
// console.log(buttons);
const cards = document.querySelectorAll('.discover__card-item');
// console.log(cards);
buttons.forEach(button => {
   button.addEventListener('click', () => {
       buttons.forEach((btn) => {
           btn.classList.remove('active');
       });
       const cardFor = button.dataset.for;
       console.log('1. cardFor = ' + cardFor);
       cards.forEach(card => {
           const tab = card.dataset.tab;
           console.log('2. tab = ' + tab + ', cardFor = ' + cardFor);
           // if(tab === cardFor) {
           if(tab.indexOf(cardFor) < 0) card.classList.add('invisible');
           else card.classList.remove('invisible');
       });
       button.classList.add('active');
   });
});

/*
console.log("Hello JavaScript!")
const a = document.querySelector('.learn__counters');
const b = document.querySelectorAll('.learn__counters');
console.log("a = " + a);
console.log(a);
console.log("b = " + b);
console.log(b);
a.addEventListener('click', () => {
    alert('Hello World!');
});
for(let i=0; i < b.length; i++) {
    b[i].addEventListener('click', () => {
        alert('Hello World #' + (i+1));
    });
};
*/
