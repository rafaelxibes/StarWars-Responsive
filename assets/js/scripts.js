/* =========== MENU SHOW AND HIDDEN ===========*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

//Show
toggleMenu.addEventListener('click', ()=>{
   navMenu.classList.toggle('show')
})
//Close
closeMenu.addEventListener('click', ()=>{
   navMenu.classList.remove('show')
})

/* =========== MOUSE HOME IMG ===========*/
document.addEventListener('mousemove', move)

function move(e){
   this.querySelectorAll('.move').forEach(layer =>{
      const speed = layer.getAttribute('data-speed')

      const x = (window.innerWidth - e.pageX*speed)/120
      const y = (window.innerWidth - e.pageY*speed)/120

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
   })
}

/* =========== GSAP ANIMATION ===========*/
//NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1.5, delay: 2, y:10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: .5, y:30, stagger: 0.2})

//HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay: 1.6, y:30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay: 1.8, y:30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay: 2.1, y:30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay: 1.3, y:30})




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
 }
 window.addEventListener('scroll', scrollHeader)