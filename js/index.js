const header = document.querySelector('header')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const ulMenu = document.querySelector('.menu')

window.addEventListener('scroll',() => {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add('active-header')
    } else {
        header.classList.remove('active-header')
    }
})

openMenu.addEventListener('click',() => {
    ulMenu.classList.remove('hidden')
    ulMenu.classList.add('flex')
})
closeMenu.addEventListener('click',() => {
    ulMenu.classList.add('hidden')
    ulMenu.classList.remove('flex')
})