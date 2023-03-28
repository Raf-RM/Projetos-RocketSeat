import Sounds from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'
import Elements from './elements.js'

const sounds = Sounds()
const timer = Timer()
const controls = Controls()
const elements = Elements()

elements.buttonCard1Selected.addEventListener('click', handleCard1Selected)
elements.buttonCard2Selected.addEventListener('click', handleCard2Selected)
elements.buttonCard3Selected.addEventListener('click', handleCard3Selected)
elements.buttonCard4Selected.addEventListener('click', handleCard4Selected)

elements.buttonMore.addEventListener('click', timer.handleButtonMore)
elements.buttonLess.addEventListener('click', timer.handleButtonLess)

elements.buttonPlay.addEventListener('click', handleButtonPlay)
elements.buttonStop.addEventListener('click', handleButtonStop)

function handleCard1Selected () {
  if(elements.buttonCard1Selected.classList.contains('selected')){
    sounds.stopSounds()
    buttonCard1Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard1()
  }
  elements.buttonCard1Selected.classList.add('selected')
  elements.buttonCard2Selected.classList.remove('selected')
  elements.buttonCard3Selected.classList.remove('selected')
  elements.buttonCard4Selected.classList.remove('selected')
  sounds.pressButton()
}
function handleCard2Selected () {
  if(elements.buttonCard2Selected.classList.contains('selected')){
    sounds.stopSounds()
    elements.buttonCard2Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard2()
  }
  elements.buttonCard1Selected.classList.remove('selected')
  elements.buttonCard2Selected.classList.add('selected')
  elements.buttonCard3Selected.classList.remove('selected')
  elements.buttonCard4Selected.classList.remove('selected')
  sounds.pressButton()
}
function handleCard3Selected () {
  if(elements.buttonCard3Selected.classList.contains('selected')){
    sounds.stopSounds()
    elements.buttonCard3Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard3()
  }
  elements.buttonCard1Selected.classList.remove('selected')
  elements.buttonCard2Selected.classList.remove('selected')
  elements.buttonCard3Selected.classList.add('selected')
  elements.buttonCard4Selected.classList.remove('selected')
  sounds.pressButton()
}
function handleCard4Selected () {
  if(elements.buttonCard4Selected.classList.contains('selected')){
    sounds.stopSounds()
    elements.buttonCard4Selected.classList.remove('selected')
    return
  } else{
    sounds.soundCard4()
  }
  elements.buttonCard1Selected.classList.remove('selected')
  elements.buttonCard2Selected.classList.remove('selected')
  elements.buttonCard3Selected.classList.remove('selected')
  elements.buttonCard4Selected.classList.add('selected')
  sounds.pressButton()
}

function handleButtonPlay(){
  timer.countdown()
  controls.toggle()
  sounds.pressButton()
}

function handleButtonStop(){
  timer.stopCountdown()
  controls.toggle()
  sounds.pressButton()
}