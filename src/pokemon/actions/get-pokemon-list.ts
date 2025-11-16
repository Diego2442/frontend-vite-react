import axios from "axios";
import { pokemonApi } from "../api/pokemonApi";
import type { PokemonListResponse } from "../interfaces/pokemon-list-response.interface";
import type { Pokemon } from "../interfaces/pokemon.interface";

export const getPokemonList = async () => {
    const {data} = await pokemonApi.get<PokemonListResponse>("?limit=151");

    const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
            const {data} = await axios<Pokemon>(pokemon.url);
            return data;
        })
    );

    return detailedPokemon;
}