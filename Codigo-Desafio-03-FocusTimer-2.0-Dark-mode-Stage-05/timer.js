import Sounds from './sounds.js'
import Controls from './controls.js'
import Elements from './elements.js'

export default function Timer() {

  let timerTimeOut
  let minutes = Number(Elements().minutesDisplay.textContent)
  let newMinutes = minutes
  function countdown() {
    timerTimeOut = setTimeout(function(){
      let seconds = Number(Elements().secondsDisplay.textContent)
      if(seconds <= 0){
        seconds = 60
        newMinutes = newMinutes - 1
      }
      if(newMinutes >= 0){
        Elements().minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
      } else {
        stopCountdown()
        Sounds().timeIsEnd()
        Controls().toggle()
        return
      }
  
      Elements().secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
      countdown()
    },1000)
  }

  function stopCountdown() {
    clearTimeout(timerTimeOut)
    Elements().minutesDisplay.textContent = String(minutes).padStart(2,'0')
    Elements().secondsDisplay.textContent = '00'
    newMinutes = minutes
  }

  function handleButtonMore() {
    newMinutes = minutes
    Elements().secondsDisplay.textContent = '00'
    newMinutes += 5
    minutes = newMinutes
    Elements().minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
    Sounds().pressButton()
  }
  
  function handleButtonLess() {
    if(minutes > 5) {
      newMinutes = minutes
      Elements().secondsDisplay.textContent = '00'
      newMinutes -= 5
      minutes = newMinutes
      Elements().minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
      Sounds().pressButton()
    }
  }

  return {
    countdown,
    stopCountdown,
    handleButtonMore,
    handleButtonLess,
  }
}