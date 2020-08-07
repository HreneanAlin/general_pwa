import React from 'react';
import Flashcard from "./Flashcard";

function FlashCardList({flashCards}) {

    return (
        <div className="card-grid" >
            {flashCards.map(flashCard =>{
                return <Flashcard flashcard={flashCard}
                                   key={flashCard.id}/>
            })}

        </div>
    );
}

export default FlashCardList;