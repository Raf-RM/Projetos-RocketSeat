import Elements from './elements.js'

export default function Controls () {
  
  function toggle() {
    Elements().buttonPlay.classList.toggle('hide')
    Elements().buttonPlay2.classList.toggle('hide')
    Elements().buttonStop.classList.toggle('hide')
    Elements().buttonStop2.classList.toggle('hide')
  }
  
  return {
    toggle,
  }
}