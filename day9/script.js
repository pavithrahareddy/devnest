const box = document.querySelector('.container')
let booked = 0
let remain = 36

box.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    if (e.target.classList.contains('boxclicked')) {
      alert('Oops! This seat has been already booked!')
    } else {
      const confirmation = confirm('Would you like to book this seat?')
      if (confirmation == true) {
        e.target.classList.add('boxclicked')
        booked++
        remain--
        document.getElementById('booked').innerHTML = booked
        document.getElementById('remain').innerHTML = remain
      }
    }
  }
})
