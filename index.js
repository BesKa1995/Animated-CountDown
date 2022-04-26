const nums = document.querySelectorAll('.nums span')
const final = document.querySelector('.final')
const counter = document.querySelector('.counter')
const replay = document.getElementById('replay')


replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})

runAnimation()
function runAnimation() {
  nums.forEach((num, idx) => {
    num.addEventListener('animationend', (e) => {

      if (e.animationName === 'goIn' && idx < nums.length) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        final.classList.add('show')
        counter.classList.add('hide')
      }
    })
  })

}


function resetDOM() {
  nums.forEach(num => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
  final.classList.remove('show')
  counter.classList.remove('hide')
}