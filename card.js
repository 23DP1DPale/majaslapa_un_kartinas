const dark_mode = document.getElementById("dark-mode");
const navigation = document.getElementById("nav-section")
const background = document.getElementById("main-section");
const cards = document.querySelectorAll(".card");
const cardContainer = document.getElementById("main-section")

dark_mode.addEventListener("click", () => {
    navigation.classList.toggle("dark-mode");
    background.classList.toggle("dark-mode");
    cards.forEach((card) => {
        card.classList.toggle("dark-mode-card");
    })
})

const products = [
    {name: "Stanley Termokrūze", image: "images/stanley.jpg", desc: "Nerūsējošā tērauda termokrūze ar vakuuma izolāciju, kas uztur dzērienu karstu līdz 7h."},
    {name: "Xiaomi Mi Smart Band", image: "images/watch.jpg", desc: "Gudrais fitnesa aproce ar treniņu režīmiem, sirdsdarbības un miega monitoringu."},
    {name: "Kafijas automāts", image: "images/kafija.jpg", desc: "Kompakts un ērts kafijas aparāts ar kapsulām gardai kafijai mājās."}
]

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h1>${product.name}</h1>
            <img alt="image" src=${product.image}">
            <p>${product.desc}</p>
            <div class="button">
                <div>
                    <div></div>
                </div>
            </div>
    `;

    cardContainer.append(card);
});