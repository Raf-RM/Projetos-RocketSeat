
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

  //impedindo que o evento click ocorra para o slider
  volumeCard1.addEventListener('click', function(event){
    event.stopPropagation()
  })
  volumeCard2.addEventListener('click', function(event){
    event.stopPropagation()
  })
  volumeCard3.addEventListener('click', function(event){
    event.stopPropagation()
  })
  volumeCard4.addEventListener('click', function(event){
    event.stopPropagation()
  })

  soundCard1Selected.loop = true
  soundCard2Selected.loop = true
  soundCard3Selected.loop = true
  soundCard4Selected.loop = true

  function soundCard1() {
    volumeCard1.value = 50
    soundCard1Selected.volume = 0.5
    soundCard1Selected.play()
    soundCard2Selected.pause()
    soundCard3Selected.pause()
    soundCard4Selected.pause()
  }

  function soundCard2() {
    volumeCard2.value = 50
    soundCard2Selected.volume = 0.5
    soundCard1Selected.pause()
    soundCard2Selected.play()
    soundCard3Selected.pause()
    soundCard4Selected.pause()
  }

  function soundCard3() {
    volumeCard3.value = 50
    soundCard3Selected.volume = 0.5
    soundCard1Selected.pause()
    soundCard2Selected.pause()
    soundCard3Selected.play()
    soundCard4Selected.pause()
  }

  function soundCard4() {
    volumeCard4.value = 50
    soundCard4Selected.volume = 0.5
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

  function resetVolume() {
    volumeCard1.value = 0
    volumeCard2.value = 0
    volumeCard3.value = 0
    volumeCard4.value = 0
  }

  return {
    soundCard1,
    soundCard2,
    soundCard3,
    soundCard4,
    stopSounds,
    pressButton,
    timeIsEnd,
    resetVolume,
  }
}
