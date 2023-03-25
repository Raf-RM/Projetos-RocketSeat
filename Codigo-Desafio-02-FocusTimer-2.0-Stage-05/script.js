const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonCard1Selected = document.querySelector(".card1")
const buttonCard2Selected = document.querySelector(".card2")
const buttonCard3Selected = document.querySelector(".card3")
const buttonCard4Selected = document.querySelector(".card4")

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')

function handleCard1Selected () {
  buttonCard1Selected.classList.add('selected')
  buttonCard2Selected.classList.remove('selected')
  buttonCard3Selected.classList.remove('selected')
  buttonCard4Selected.classList.remove('selected')
}
function handleCard2Selected () {
  buttonCard1Selected.classList.remove('selected')
  buttonCard2Selected.classList.add('selected')
  buttonCard3Selected.classList.remove('selected')
  buttonCard4Selected.classList.remove('selected')
}
function handleCard3Selected () {
  buttonCard1Selected.classList.remove('selected')
  buttonCard2Selected.classList.remove('selected')
  buttonCard3Selected.classList.add('selected')
  buttonCard4Selected.classList.remove('selected')
}
function handleCard4Selected () {
  buttonCard1Selected.classList.remove('selected')
  buttonCard2Selected.classList.remove('selected')
  buttonCard3Selected.classList.remove('selected')
  buttonCard4Selected.classList.add('selected')
}

buttonCard1Selected.addEventListener('click', handleCard1Selected)
buttonCard2Selected.addEventListener('click', handleCard2Selected)
buttonCard3Selected.addEventListener('click', handleCard3Selected)
buttonCard4Selected.addEventListener('click', handleCard4Selected)

buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  stopCountdown()
})

let minutes = Number(minutesDisplay.textContent)
let newMinutes = minutes
function countdown() {
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    if(seconds <= 0){
      seconds = 6
      newMinutes = newMinutes - 1
    }
    minutesDisplay.textContent = newMinutes
    secondsDisplay.textContent = seconds - 1
    countdown()
  },1000)
}

function stopCountdown() {
  clearTimeout(timerTimeOut)
  minutesDisplay.textContent = minutes
  secondsDisplay.textContent = 0
  newMinutes = minutes
}

