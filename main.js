const hamMenu = document.getElementById("ham-menu");
const offscreenNavigation = document.getElementById("navigation");
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenNavigation.classList.toggle('active');
})