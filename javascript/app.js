const nav2El = document.querySelector('.nav2')
const nav1El = document.querySelector('.nav1')
const open_closeBtnEl = document.querySelector('.open_close')
const icon_class = document.querySelector('.icon_class')

open_closeBtnEl.addEventListener('click', function () {
  nav2El.classList.toggle('open')
  open_closeBtnEl.classList.toggle('move-left-btn')
  open_closeBtnEl.innerHTML =
    open_closeBtnEl.innerHTML == '<i class="fas fa-times"></i>'
      ? '<i class="fas fa-bars"></i>'
      : '<i class="fas fa-times"></i>'
})

// Navbar animation

window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav1El.offsetHeight) {
    nav1El.classList.add('scrollNav')
  } else {
    nav1El.classList.remove('scrollNav')
  }
}

window.addEventListener('click', function (e) {
  if (
    e.target.classList[0] !== icon_class.classList[0] &&
    e.target.classList[0] !== nav2El.classList[0] &&
    e.target.classList[0] !== open_closeBtnEl.classList[0]
  ) {
    nav2El.classList.remove('open')
    open_closeBtnEl.classList.remove('move-left-btn')
    open_closeBtnEl.innerHTML =
      open_closeBtnEl.innerHTML == '<i class="fas fa-times"></i>'
        ? '<i class="fas fa-bars"></i>'
        : '<i class="fas fa-times"></i>'
  }
})

var typed = new Typed('.typing', {
  strings: ['Web', 'ReactJs', 'JavaScript', 'HTML', 'CSS'],
  smartBackspace: true, // Default value
  typeSpeed: 200,
  loop: true,
  backSpeed: 100,
  startDelay: 3000,
  backDelay: 1000,
})
