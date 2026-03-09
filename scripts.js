console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let titulo1 = document.getElementById("gen-1");
titulo1.innerText = "Generasión 1 Pokimon2";



// 2. Cambia el color de fondo de la primera generación de Pokimon.
let gen1 = document.querySelector(".infocard");
// console.log(gen1);
gen1.style.background = "black";

// 3. Imprime por consola la URL de la página.
console.log(window.location.href);

// 4. Imprime por consola el dominio de la página.
console.log(window.location.hostname);

// 5. Imprime todos los nodos de imagen.
console.log(document.getElementsByTagName("img"));

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
let imgList = document.getElementsByTagName("img");
for (let img of imgList) {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

/* P R E M I U M */

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
let voladores = document.querySelectorAll(".itype.flying");
//console.log(voladores);
//console.log(textoPokemon);

for (let volador of voladores) {
    let tarjeta = volador.closest(".infocard");
    let texto = tarjeta.querySelector(".infocard-lg-data.text-muted");
    texto.style.backgroundColor = "red";
}