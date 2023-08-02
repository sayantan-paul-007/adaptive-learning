const form = document.querySelector('form');
const formclose = document.querySelector('.form-close');
const overlay = document.querySelector('.overlay');
// window.onload = (event) => {
//   form.classList.add('form-show');
  
// };
// formclose.addEventListener('click', function(){
//   document.body.classList.remove('no-scroll');
//   form.classList.remove('form-show');
//   overlay.remove();
// })
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 500;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {counter.innerText = target;}
  };
  updateCounter();
});
const hamicon= document.querySelector('.ham-icon');
const hamlist = document.querySelector('.ham-list');
const hamclose = document.querySelector('.ham-close');
hamicon.addEventListener('click',function () {
  hamlist.classList.add('show');
  hamlist.classList.remove('close');
  document.body.classList.add('no-scroll');
})
hamclose.addEventListener('click', function () {
  hamlist.classList.remove('show');
  hamlist.classList.add('close');
  document.body.classList.remove('no-scroll');
})

