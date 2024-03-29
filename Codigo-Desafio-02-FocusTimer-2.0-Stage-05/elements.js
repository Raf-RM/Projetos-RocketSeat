export default function Elements() {
  const buttonPlay = document.querySelector('.play')
  const buttonStop = document.querySelector('.stop')
  const buttonPlay2 = document.querySelector('.play2')
  const buttonStop2 = document.querySelector('.stop2')

  const buttonMore = document.querySelector('.more')
  const buttonLess = document.querySelector('.less')  

  const minutesDisplay = document.querySelector('.minutes')
  const secondsDisplay = document.querySelector('.seconds')
  
  const buttonCard1Selected = document.querySelector(".card1")
  const buttonCard2Selected = document.querySelector(".card2")
  const buttonCard3Selected = document.querySelector(".card3")
  const buttonCard4Selected = document.querySelector(".card4")  

  return {
    buttonPlay,
    buttonPlay2,
    buttonStop,
    buttonStop2,
    buttonMore,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    buttonCard1Selected,
    buttonCard2Selected,
    buttonCard3Selected,
    buttonCard4Selected,
  }
}