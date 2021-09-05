import axios, { AxiosResponse } from "axios";
import { PokeResponse } from "../models/api";
const url = 'https://pokeapi.co/api/v2/pokemon'

export async function ListPokemon(params: { limit: number; offset: number; }):Promise<PokeResponse> {
   try {
     const pokemonList:AxiosResponse<PokeResponse> = await axios.get(`${url}?limit=${params.limit}&offset=${params.offset}`)
     return await pokemonList.data;
   } catch (error) {
       console.log('Ohh Poke error', error)
   }
}
export async function ListNextPokemon(params: { useUrl: boolean; url: string; }) {
   if (params.useUrl) {
    try {
        const pokemonList = await axios.get(params.url)
        return await pokemonList.data;
      } catch (error) {
          console.log('Ohh Poke error', error)
      }
   }
}
export async function ListPrevPokemon(params: { useUrl: boolean; url: string; }) {
   if (params.useUrl) {
    try {
        const pokemonList = await axios.get(params.url)
        return await pokemonList.data;
      } catch (error) {
          console.log('Ohh Poke error', error)
      }
   }
}

export async function ShowPokemon(params: { limit: number; offset: number; }) {
   try {
     const pokemonList = await axios.get(`${url}?limit=${params.limit}&offset=${params.offset}`)
     return await pokemonList.data;
   } catch (error) {
       console.log('Ohh Poke error', error)
   }
}