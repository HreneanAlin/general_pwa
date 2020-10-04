import React from 'react';
import snakePng from '../other-projects-images/snake.PNG'
import marsPng from '../other-projects-images/mars.PNG'
import tictactoePng from '../other-projects-images/tictactoe.PNG'
import covidPng from '../other-projects-images/covid.PNG'
import guitarShopPng from '../other-projects-images/guitarShop.PNG'
import messengerPng from '../other-projects-images/messenger.PNG'
import alanNewsPng from '../other-projects-images/alan.PNG'

const OtherProjects = () => {
    return (
        <main className="other-projects-container">
            <h1>My Other Projects</h1>
            <div className="project-container">
                <h2>Ha-Alan-news</h2>
                <a href="https://ha-alan-news.herokuapp.com/" target="_blank"><img src={alanNewsPng} alt="alan news"/></a>

                <p className="project-description">  news application made with React.js on the frontend and with Alan AI platform on the backend.
                </p>
            </div>
            <div className="project-container">
                <h2>Ha-messanger</h2>
                <a href="https://ha-messenge-app-front.herokuapp.com/" target="_blank"><img src={messengerPng} alt="messenger pwa"/></a>

                <p className="project-description">A messenger pwa with secured authentication and authorization systems.You can also login with Google or Facebook accounts</p>
            </div>
            <div className="project-container">
                <h2>Guitar-Shop</h2>
                <a href="https://thai-guitar-shop.herokuapp.com/" target="_blank"><img src={guitarShopPng} alt="guitar shop"/></a>

                <p className="project-description">The front-end side of an app made in collaboration with a colleague.(Still in progress)</p>
            </div>
            <div className="project-container">
                <h2>Covid-19 pwa tracker</h2>
                <a href="https://ha-covid-tracker.herokuapp.com/" target="_blank"><img src={covidPng} alt="covid-19 tracker"/></a>

                <p className="project-description">An app that tracks the current status of COVID-19 infections, recoveries and deaths. It displays charts on global scale and per country scale</p>
            </div>
            <div className="project-container">
                <h2>The Snake Game </h2>
                <a href="https://ha-snake-game.herokuapp.com" target="_blank"><img src={snakePng} alt="The Snake game"/></a>
                <p className="project-description">The Snake Game made with JavaScript and Jquery</p>
            </div>
            <div className="project-container">
                <h2>Tic Tac Toe the game </h2>
                <a href="https://ha-tic-tac-toe.herokuapp.com/" target="_blank"><img src={tictactoePng} alt="tic tac toe game"/></a>

                <p className="project-description">Tic Tac Toe with various modes, made with JavaScript and Jquery</p>
            </div>
            <div className="project-container">
                <h2>Mars Whether app</h2>
                <a href="https://ha-mars-weather.herokuapp.com/" target="_blank"><img src={marsPng} alt="mars weather"/></a>
                <p className="project-description">A page that shows the current weather on Mars using a NASA api, made with JavaScript.</p>
            </div>
        </main>
    );
};

export default OtherProjects;
