// Your code goes here

//**********BEGIN MOUSEENTER EVENT**********//
const busImg = document.querySelector('#bus');
busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = 'scale(2)';
    busImg.style.transition = 'all 0.3s';
})
//**********END MOUSEENTER EVENT**********//



//**********BEGIN MOUSELEAVE EVENT**********//
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
    busImg.style.transition = 'all 0.3s';
})
//**********END MOUSELEAVE EVENT**********//



//**********BEGIN WHEEL EVENT**********//
busImg.addEventListener('wheel', () => {
    busImg.style.visibility = 'hidden';
})
//**********END WHEEL EVENT**********//



//**********BEGIN SCROLL EVENT**********//
const adventureImg = document.querySelector('#adventure');
window.addEventListener('scroll', () => {
    adventureImg.src = 'https://media.giphy.com/media/ZedVN1A1uQX25J8Oou/giphy.gif';
    adventureImg.style.transition = 'all 1s';
})
//**********END SCROLL EVENT**********//



//**********BEGIN CURSOR EVENT**********//
const cursor = window.style.cursor;
cursor.addEventListener('mousemove', () => {
cursor.style.cursor = 'img/plane.svg';
})
//**********END CURSOR EVENT**********//



//**********BEGIN RESIZE EVENT**********//
const dark = document.body;
window.addEventListener('onresize', () => {
    dark.style.backgroundColor = 'red'
})
//**********END RESIZE EVENT**********//



//**********BEGIN CLICK EVENT**********//
const sun = document.querySelector('#sun');
sun.addEventListener('click', () => {
    document.querySelector('#destination').src = 'https://images.unsplash.com/7/sunset-hair.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
})

const mountain = document.querySelector('#mountain');
mountain.addEventListener('click', () => {
    document.querySelector('#destination').src = 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'
})

const island = document.querySelector('#island');
island.addEventListener('click', () => {
    document.querySelector('#destination').src = 'https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
})
//**********END CLICK EVENT**********//

