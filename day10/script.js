document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'harry',
      img: 'images/harry.jpg',
    },
    {
      name: 'hermione',
      img: 'images/hermoine.jpg',
    },
    {
      name: 'ron',
      img: 'images/ron.jpg',
    },
    {
      name: 'dumbeldore',
      img: 'images/dumbeldore.jpg',
    },
    {
      name: 'snape',
      img: 'images/snape.jpg',
    },
    {
      name: 'hagrid',
      img: 'images/hagrid.jpg',
    },
    {
      name: 'dobby',
      img: 'images/dobby.jpg',
    },
    {
      name: 'mcgonagall',
      img: 'images/mcgonagall.jpg',
    },
    {
      name: 'harry',
      img: 'images/harry.jpg',
    },
    {
      name: 'hermione',
      img: 'images/hermoine.jpg',
    },
    {
      name: 'ron',
      img: 'images/ron.jpg',
    },
    {
      name: 'dumbeldore',
      img: 'images/dumbeldore.jpg',
    },
    {
      name: 'snape',
      img: 'images/snape.jpg',
    },
    {
      name: 'hagrid',
      img: 'images/hagrid.jpg',
    },
    {
      name: 'dobby',
      img: 'images/dobby.jpg',
    },
    {
      name: 'mcgonagall',
      img: 'images/mcgonagall.jpg',
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/card.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/correct.jpg')
      cards[optionTwoId].setAttribute('src', 'images/correct.jpg')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/card.jpg')
      cards[optionTwoId].setAttribute('src', 'images/card.jpg')
    }
    cardsChosenId = []
    cardsChosen = []
    document.getElementById('result').innerHTML = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      document.getElementById('result').innerHTML = 'Congratulations! You found them all!'
    }
  }

  function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  
  createBoard()
})
