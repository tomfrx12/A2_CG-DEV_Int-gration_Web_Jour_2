function toggleMenu() {
    const nav = document.getElementById('nav');
    const burger = document.querySelector('.burger-menu');
    
    nav.classList.toggle('active');
    burger.classList.toggle('active');
}


document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});