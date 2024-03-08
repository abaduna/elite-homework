import type { Pokemons } from "./pokemon";
import { getPokemon } from "./getPokemo";

async function pokemon() {
    const pokemon = await getPokemon<Pokemons>()
    console.log(pokemon.results[0].name);
    for (let i = 0; i < pokemon.results.length; i++) {
        const pokemonName = pokemon.results[i].name
        console.log(pokemonName);
        
        // Obtener el elemento por su ID
        const element = document.getElementById(`${i}`);

        // Verificar si el elemento existe antes de intentar modificarlo
        if (element) {
            // Agregar el nombre del Pokémon al contenido del elemento
            element.innerHTML = `Nombre del Pokémon: ${pokemonName}`;
            // O puedes usar innerText en lugar de innerHTML, dependiendo de tus necesidades
            // element.innerText = `Nombre del Pokémon: ${pokemonName}`;
        } else {
            console.error(`No se encontró el elemento con ID ${i}`);
        }
    }
}

pokemon()