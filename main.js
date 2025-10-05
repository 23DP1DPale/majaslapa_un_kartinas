const dark_mode = document.getElementById("dark-mode");
const navigation = document.getElementById("nav-section")
const background = document.getElementById("main-section");
const cards = document.querySelectorAll(".card");

dark_mode.addEventListener("click", () => {
    navigation.classList.toggle("dark-mode");
    background.classList.toggle("dark-mode");
    cards.forEach((card) => {
        card.classList.toggle("dark-mode-card");
    })
})