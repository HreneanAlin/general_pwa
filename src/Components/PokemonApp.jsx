import React, {useEffect, useState} from 'react';
import PokemonList from "./PokemonList";
import axios from 'axios';
import Loader from "./Loader";
import PokemonPagination from "./PokemonPagination";

function PokemonApp(props) {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(" https://pokeapi.co/api/v2/pokemon?offset=0&limit=24")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [previousPageUrl, setPreviousPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(res => {

                setLoading(false)
                setNextPageUrl(res.data.next)
                setPreviousPageUrl(res.data.previous)
                setPokemons(res.data.results)
            })

        return () => cancel()
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)

    }

    function gotoPreviousPage() {
        setCurrentPageUrl(previousPageUrl)

    }


    if (loading) return <Loader/>

    return (
        <main className="pokemon-app-container">
            <h1>Pokemons</h1>
            <PokemonList pokemons={pokemons}/>
            <PokemonPagination
             gotoNextPage ={nextPageUrl ? gotoNextPage : null}
             gotoPreviousPage = {previousPageUrl ? gotoPreviousPage :null}/>
        </main>
    );
}

export default PokemonApp;