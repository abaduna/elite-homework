import type { Pokemon } from "./pokemon";
import { getPokemon } from "./getPokemo";

async function pokemon() {
    const pokemon = await getPokemon<Pokemon>(5)
    console.log(pokemon.name);
    
}

pokemon()