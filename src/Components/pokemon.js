import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Loader from "./Loader";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

function Pokemon(props) {

    const {pokemonUrl} = props
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get(pokemonUrl).then(res => {
            setLoading(false)

            setPokemon(new Object({
                name: res.data.name,
                imageUrl: res.data.sprites.front_default
            }))
        })

    }, [pokemonUrl])

    if (loading) return <Loader/>

    return (
        <div className="pokemon-container">

                <h2>{pokemon.name}</h2>
                <img src={pokemon.imageUrl} alt={pokemon.name}/>
                <Link to={`/details/${pokemon.name}`}>More </Link>


        </div>
    );
}

export default Pokemon;