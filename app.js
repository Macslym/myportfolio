const toTop = document.querySelector('#toTop')
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');



hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

toTop.addEventListener('click', goTop);

function goTop() {
  scrollTo(0,0);
}