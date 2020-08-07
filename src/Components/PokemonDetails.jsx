import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Loader from "./Loader";

function PokemonDetails(props) {

    const {id} = useParams()
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get(pokemonUrl).then(res => {
            setLoading(false)
            console.log(res.data)


            setPokemon(new Object({
                name: res.data.name,
                imagesUrlBShiny: res.data.sprites.back_shiny,
                imagesUrlFShiny: res.data.sprites.front_shiny,
                imagesUrlback_default: res.data.sprites.back_default,
                imagesUrlfront_default: res.data.sprites.front_default,
                base_experience:res.data.base_experience
            }))
        })

    }, [pokemonUrl])

    if (loading) return <Loader/>
    return (
        <main className="details-container">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.imagesUrlFShiny} alt={pokemon.name}/>
            <img src={pokemon.imagesUrlBShiny} alt={pokemon.name}/>
            <img src={pokemon.imagesUrlfront_default} alt={pokemon.name}/>
            <img src={pokemon.imagesUrlback_default} alt={pokemon.name}/>
            <p>Experience: {pokemon.base_experience}</p>
            <Link to={"/pokemon"}> Back</Link>
        </main>
    );
}

export default PokemonDetails;