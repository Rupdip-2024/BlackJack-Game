let player = {
  name: "Pena",
  chip: 190
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chip

function getRandomCard() {
  let randomCard = Math.floor( Math.random() * 13) + 1
  if ( randomCard === 1) {
    return 11
  } else if( randomCard > 10) {
    return 10
  } else {
    return randomCard
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do wanna draw a new card?"
  } else if (sum === 21) {
    message = "You've got a blackjack"
    hasBlackjack = true
  } else {
    message = "You are out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if( isAlive === true && hasBlackjack === false) {
    let drawnCard = getRandomCard()
    sum += drawnCard
    cards.push(drawnCard)
    renderGame()
  }
}