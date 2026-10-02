const menu = document.querySelector("section");
const btn = document.querySelector(".btn");
const btnStyle = document.querySelector(".btn_style");

function loadMenu() {
    fetch("js/data.json")
        .then(res => res.json())
        .then(products => {
            menu.innerHTML = products.map((product) => `
                <div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">$ ${product.price}</p>
                </div>
            `).join(" "); 
        });
}

function changeStyles() { document.body.classList.toggle("dark"); }

btn.addEventListener("click", loadMenu);
btnStyle.addEventListener("click", changeStyles);
