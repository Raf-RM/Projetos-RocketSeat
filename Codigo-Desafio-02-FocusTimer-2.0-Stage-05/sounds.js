
export default function() {

  const soundCard1Selected = new Audio('./sounds/Floresta.wav')
  const soundCard2Selected = new Audio('./sounds/Chuva.wav')
  const soundCard3Selected = new Audio('./sounds/Cafeteria.wav')
  const soundCard4Selected = new Audio('./sounds/Lareira.wav')

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const alarmTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  soundCard1Selected.loop = true
  soundCard2Selected.loop = true
  soundCard3Selected.loop = true
  soundCard4Selected.loop = true

  function soundCard1() {
    soundCard1Selected.play()
    soundCard2Selected.pause()
    soundCard3Selected.pause()
    soundCard4Selected.pause()
  }

  function soundCard2() {
    soundCard1Selected.pause()
    soundCard2Selected.play()
    soundCard3Selected.pause()
    soundCard4Selected.pause()
  }

  function soundCard3() {
    soundCard1Selected.pause()
    soundCard2Selected.pause()
    soundCard3Selected.play()
    soundCard4Selected.pause()
  }

  function soundCard4() {
    soundCard1Selected.pause()
    soundCard2Selected.pause()
    soundCard3Selected.pause()
    soundCard4Selected.play()
  }

  function stopSounds() {
    soundCard1Selected.pause()
    soundCard2Selected.pause()
    soundCard3Selected.pause()
    soundCard4Selected.pause()  
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeIsEnd() {
    alarmTimer.play()
  }

  return {
    soundCard1,
    soundCard2,
    soundCard3,
    soundCard4,
    stopSounds,
    pressButton,
    timeIsEnd,
  }
}
