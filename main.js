const hamMenu = document.getElementById("ham-menu");
const offscreenNavigation = document.getElementById("navigation");
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenNavigation.classList.toggle('active');
})

const fName = document.getElementById("form-name");
const fEmail = document.getElementById("form-email");
const fText = document.getElementById("form-text");
const fSubmit = document.getElementById("form-submit");
const fMessage = document.getElementById("form-message")

fSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (fName.value == "" || fEmail.value == "" || fText.value == "") {
        fMessage.style.color = "red";
        fMessage.style.opacity = "100%";
        fMessage.style.transform = "scale(100%)";
        fMessage.innerHTML = "Nevar būt tukšu lauku";
    } else if (validEmail(fEmail.value) == false) {
        fMessage.style.color = "red";
        fMessage.style.opacity = "100%";
        fMessage.style.transform = "scale(100%)";
        fMessage.innerHTML = "e-pasts neder";
    } else {
        fMessage.style.color = "lightgreen";
        fMessage.style.opacity = "100%";
        fMessage.style.transform = "scale(100%)";
        fMessage.innerHTML = "Forma ir veiksmīgi iesniegta";
    }
});

function validEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}