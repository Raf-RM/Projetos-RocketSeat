
export default function() {

  const soundCard1Selected = new Audio('./sounds/Floresta.wav')
  const soundCard2Selected = new Audio('./sounds/Chuva.wav')
  const soundCard3Selected = new Audio('./sounds/Cafeteria.wav')
  const soundCard4Selected = new Audio('./sounds/Lareira.wav')

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const alarmTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  let volumeCard1 = document.querySelector('#volume-control-card1')
  let volumeCard2 = document.querySelector('#volume-control-card2')
  let volumeCard3 = document.querySelector('#volume-control-card3')
  let volumeCard4 = document.querySelector('#volume-control-card4')
  console.log(volumeCard1.value)

  volumeCard1.addEventListener('change', function(e) {
    soundCard1Selected.volume = e.currentTarget.value/100
  })
  volumeCard2.addEventListener('change', function(e) {
    soundCard2Selected.volume = e.currentTarget.value/100
  })
  volumeCard3.addEventListener('change', function(e) {
    soundCard3Selected.volume = e.currentTarget.value/100
  })
  volumeCard4.addEventListener('change', function(e) {
    soundCard4Selected.volume = e.currentTarget.value/100
  })

  soundCard1Selected.loop = true
  soundCard2Selected.loop = true
  soundCard3Selected.loop = true
  soundCard4Selected.loop = true
  soundCard1Selected.volume = 0.5
  soundCard2Selected.volume = 0.5
  soundCard3Selected.volume = 0.5
  soundCard4Selected.volume = 0.5

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
