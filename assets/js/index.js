const vacationVibes = document.querySelector('#vacationVibes')
const favorites = document.querySelector('#favorites')
const usa = document.querySelector('#usa')
const caribbean = document.querySelector('#caribbean')
const india = document.querySelector('#india')
const italy = document.querySelector('#italy')
const japan = document.querySelector('#japan')
const middleEast = document.querySelector('#middleEast')

usa.addEventListener('click', function() {
localStorage.setItem('region', 'usa')
window.location.replace('./results.html')

})