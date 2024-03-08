export interface Pokemons {
    count:string
    next:string
    results:Pokemon[]
}
interface Pokemon {
    name:string
    url:string
}