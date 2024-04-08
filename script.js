const menu = document.querySelector('.menu')
const ham_menu = document.querySelector('.ham-menu')
const ham_menu_ul = document.querySelector('.ham-menu_ul')
menu.addEventListener('click', openMenu)
ham_menu.addEventListener('click', closeMenu)
function openMenu(){
    ham_menu_ul.classList.remove('hidden')
}
function closeMenu(){
    ham_menu_ul.classList.add('hidden')
}
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 3000
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  