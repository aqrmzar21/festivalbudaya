document.querySelector('.navbar-toggler').addEventListener('click', function () {
document.querySelector('.navbar-links').classList.toggle('active');
this.classList.toggle('active'); // Untuk animasi icon toggler
});

// Optional: Close dropdown if clicked outside
document.addEventListener('click', function (event) {
const dropdowns = document.querySelectorAll('.navbar-links .dropdown-toggle');
dropdowns.forEach(function (dropdownToggle) {
  const dropdownMenu = dropdownToggle.nextElementSibling;
  if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target) && dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
  }
});
});

// Toggle dropdown for custom navbar
document.querySelectorAll('.navbar-links .dropdown-toggle').forEach(item => {
item.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  const dropdownMenu = this.nextElementSibling;
  dropdownMenu.classList.toggle('show');
});
});