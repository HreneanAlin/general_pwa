import React from 'react';
import Pokemon from "./pokemon";

function PokemonList(props) {
    const {pokemons} = props
    return (
        <div className="pokemons-container">
            {pokemons.map(pokemon =>
                    <Pokemon
                        key={pokemon.url}
                        pokemonUrl ={pokemon.url}
                    />

            )}
        </div>
    );
}

export default PokemonList;