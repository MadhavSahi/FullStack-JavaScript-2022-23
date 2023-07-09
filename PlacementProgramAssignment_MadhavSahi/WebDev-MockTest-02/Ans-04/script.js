const navbarMenu = document.getElementById('navbar-menu');
const navbarToggler = document.getElementById('navbar-toggler');

navbarToggler.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});
