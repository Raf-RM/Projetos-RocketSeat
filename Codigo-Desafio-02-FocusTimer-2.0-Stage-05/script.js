import Sounds from './sounds.js'

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonCard1Selected = document.querySelector(".card1")
const buttonCard2Selected = document.querySelector(".card2")
const buttonCard3Selected = document.querySelector(".card3")
const buttonCard4Selected = document.querySelector(".card4")

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlay2 = document.querySelector('.play2')
const buttonStop2 = document.querySelector('.stop2')

const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

let timerTimeOut

const sounds = Sounds()

function handleCard1Selected () {
  if(buttonCard1Selected.classList.contains('selected')){
    sounds.stopSounds()
    buttonCard1Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard1()
  }
  buttonCard1Selected.classList.add('selected')
  buttonCard2Selected.classList.remove('selected')
  buttonCard3Selected.classList.remove('selected')
  buttonCard4Selected.classList.remove('selected')
  sounds.pressButton()
}
function handleCard2Selected () {
  if(buttonCard2Selected.classList.contains('selected')){
    sounds.stopSounds()
    buttonCard2Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard2()
  }
  buttonCard1Selected.classList.remove('selected')
  buttonCard2Selected.classList.add('selected')
  buttonCard3Selected.classList.remove('selected')
  buttonCard4Selected.classList.remove('selected')
  sounds.pressButton()
}
function handleCard3Selected () {
  if(buttonCard3Selected.classList.contains('selected')){
    sounds.stopSounds()
    buttonCard3Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard3()
  }
  buttonCard1Selected.classList.remove('selected')
  buttonCard2Selected.classList.remove('selected')
  buttonCard3Selected.classList.add('selected')
  buttonCard4Selected.classList.remove('selected')
  sounds.pressButton()
}
function handleCard4Selected () {
  if(buttonCard4Selected.classList.contains('selected')){
    sounds.stopSounds()
    buttonCard4Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard4()
  }
  buttonCard1Selected.classList.remove('selected')
  buttonCard2Selected.classList.remove('selected')
  buttonCard3Selected.classList.remove('selected')
  buttonCard4Selected.classList.add('selected')
  sounds.pressButton()
}

let minutes = Number(minutesDisplay.textContent)
let newMinutes = minutes

function countdown() {
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    if(seconds <= 0){
      seconds = 6
      newMinutes = newMinutes - 1
    }
    if(newMinutes >= 0){
      minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
    } else {
      console.log(newMinutes)
      stopCountdown()
      sounds.timeIsEnd()
      return
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
    countdown()
  },1000)
}

function stopCountdown() {
  clearTimeout(timerTimeOut)
  minutesDisplay.textContent = String(minutes).padStart(2,'0')
  secondsDisplay.textContent = '00'
  newMinutes = minutes
}

function handleButtonMore() {
  newMinutes = minutes
  secondsDisplay.textContent = '00'
  newMinutes += 5
  minutes = newMinutes
  minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
  sounds.pressButton()
}

function handleButtonLess() {
  if(minutes >= 5) {
    newMinutes = minutes
    secondsDisplay.textContent = '00'
    newMinutes -= 5
    minutes = newMinutes
    minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
    sounds.pressButton()
  }
}

function toggle() {
  buttonPlay.classList.toggle('hide')
  buttonPlay2.classList.toggle('hide')
  buttonStop.classList.toggle('hide')
  buttonStop2.classList.toggle('hide')
}


buttonCard1Selected.addEventListener('click', handleCard1Selected)
buttonCard2Selected.addEventListener('click', handleCard2Selected)
buttonCard3Selected.addEventListener('click', handleCard3Selected)
buttonCard4Selected.addEventListener('click', handleCard4Selected)

buttonMore.addEventListener('click', handleButtonMore)
buttonLess.addEventListener('click', handleButtonLess)

buttonPlay.addEventListener('click', function(){
  countdown()
  toggle()
  sounds.pressButton()
})

buttonStop.addEventListener('click', function(){
  stopCountdown()
  toggle()
  sounds.pressButton()
})
