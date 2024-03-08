import axios from "axios";

export const getPokemon = async <T> ():Promise<T>=>{
    const response = await axios.get<T>(
        `https://pokeapi.co/api/v2/pokemon`
    )

    return response.data
    }