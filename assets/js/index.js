const vacationVibes = document.querySelector('#vacationVibes')
const favorites = document.querySelector('#favorites')
const usa = document.querySelector('#usa')
const caribbean = document.querySelector('#caribbean')
const india = document.querySelector('#india')
const italy = document.querySelector('#italy')
const japan = document.querySelector('#japan')
const middleEast = document.querySelector('#middleEast')


usa.addEventListener('click', function () {
    localStorage.setItem('region', 'usa')
    window.location.replace('./results.html')

})

caribbean.addEventListener('click', function () {
    localStorage.setItem('region', 'caribbean')
    window.location.replace('./results.html')

})

india.addEventListener('click', function () {
    localStorage.setItem('region', 'india')
    window.location.replace('./results.html')

})

italy.addEventListener('click', function () {
    localStorage.setItem('region', 'italy')
    window.location.replace('./results.html')

})

japan.addEventListener('click', function () {
    localStorage.setItem('region', 'japan')
    window.location.replace('./results.html')

})

middleEast.addEventListener('click', function () {
    localStorage.setItem('region', 'middleEast')
    window.location.replace('./results.html')

})