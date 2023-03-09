const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const openCookie = document.querySelector('#fortuneCookie');
const openAnotherCookie = document.querySelector('#anotherCookie');

openCookie.addEventListener('click', handleClickOpen);
openAnotherCookie.addEventListener('click', handleClickReset) ;


function handleClickOpen(){
  toggleScreen();
  console.log(screen1.classList)
  console.log(screen2.classList)    
};
  
function handleClickReset(){
  toggleScreen();
  console.log(screen1.classList)
  console.log(screen2.classList)
};

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
};

console.log(screen1.classList)
console.log(screen2.classList)