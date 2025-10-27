const dark_mode = document.getElementById("dark-mode");
const body = document.getElementById("bdy");
const cards = document.querySelectorAll(".card");
const cardContainer = document.getElementById("card-section");
const searchContent = document.getElementById("search-content");
const searchBtn = document.getElementById("search-btn");

dark_mode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    cards.forEach((card) => {
        card.classList.toggle("dark-mode-card");
    })
})

const products = [
    {name: "Stanley Termokrūze", image: "images/stanley.jpg", desc: "Nerūsējošā tērauda termokrūze ar vakuuma izolāciju, kas uztur dzērienu karstu līdz 7h."},
    {name: "Xiaomi Mi Smart Band", image: "images/watch.jpg", desc: "Gudrais fitnesa aproce ar treniņu režīmiem, sirdsdarbības un miega monitoringu."},
    {name: "Kafijas automāts", image: "images/kafija.jpg", desc: "Kompakts un ērts kafijas aparāts ar kapsulām gardai kafijai mājās."}
];

searchBtn.addEventListener("click", () => {
    showCards();
});


function showCards() {
    cardContainer.innerHTML = "";
    products.forEach(product => {
        let card = null;
        if (product.name.search(searchContent.value) != -1) {
            card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h1>${product.name}</h1>
                    <img alt="image" src=${product.image}>
                    <p>${product.desc}</p>
                    <div class="button">
                        <div>
                            <div></div>
                        </div>
                    </div>
            `;
            cardContainer.append(card);
        }
    });
};

window.onload = showCards();