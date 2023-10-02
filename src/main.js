import { renderItems } from "./view.js";
import { filterData, computeStats } from "./dataFunctions.js";
import { ordenBy } from "./dataFunctions.js";
import data from "./data/pokemon/pokemon.js";

//data que usaremos
let pokemones = data.pokemon;
const renderPokemons = renderItems(pokemones);

//capturar elemento dom
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const ordenByController= document.querySelector("#select-sort");
const ulElement = document.querySelector("#tarjetas");
const filtro = document.getElementById("filter-by");


//update ul element...render
ulElement.replaceWith(renderPokemons);

//Eventos para menu hamburguesa
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

filtro.addEventListener("change", () => {
  const tipoPokemon = filtro.value;
  pokemones = filterData(data.pokemon, tipoPokemon);
  ordenBy(pokemones, ordenByController.value);
  const ulElement = document.querySelector("#tarjetas");
  const renderPokemons = renderItems(pokemones);
  ulElement.replaceWith(renderPokemons);



  
  const totalPokemones = computeStats(pokemones);
  const totalPokemonesNum = document.getElementById("count-pokemon");
  totalPokemonesNum.textContent = `Pokemones: ${totalPokemones}`;
 
});

ordenByController.addEventListener("change",()=>{
  const tipoPokemon = filtro.value;
  pokemones = filterData(data.pokemon, tipoPokemon);

  ordenBy(pokemones, ordenByController.value);
  


  const ulElement = document.querySelector("#tarjetas");
  const prueba = renderItems(pokemones);
  ulElement.replaceWith(prueba);
  const totalPokemones = computeStats(pokemones);
  console.log(totalPokemones);
  const totalPokemonesNum = document.getElementById("count-pokemon");
  totalPokemonesNum.textContent = `Pokemones: ${totalPokemones}`;
})


const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  pokemones = data.pokemon;
  const ulElement = document.querySelector("#tarjetas");
  ulElement.replaceWith(renderPokemons);
  const totalPokemones = computeStats(pokemones);
  const totalPokemonesNum = document.getElementById("count-pokemon");
  totalPokemonesNum.textContent = `Pokemones: ${totalPokemones}`;
  const filtroDefault = document.getElementById("filter-by");
  filtroDefault.value = "default";
});