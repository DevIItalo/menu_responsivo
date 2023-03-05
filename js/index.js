const menuMobile = document.getElementById("menuMobile");

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

menuMobile.addEventListener('click', toggleMenu);