import React from 'react';

function PokemonPagination(props) {
    const{gotoNextPage, gotoPreviousPage} = props
    return (
        <div className="pokemons-pagination">
            {gotoPreviousPage && <button className="btn" onClick={gotoPreviousPage}>Previous</button>}
            {gotoNextPage && <button className="btn" onClick={gotoNextPage}>Next</button>}
        </div>
    );
}

export default PokemonPagination;