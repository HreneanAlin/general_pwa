import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import MoneyConverter from "./Components/MoneyConverter";
import Users from "./Components/Users";
import FlashCardQuiz from "./Components/flashCardQuiz";
import PokemonApp from "./Components/PokemonApp";
import PokemonDetails from "./Components/PokemonDetails";
import WeatherApp from "./Components/WeatherApp";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/money-converter">
                        <MoneyConverter/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/quiz">
                        <FlashCardQuiz/>
                    </Route>
                    <Route path="/pokemon">
                        <PokemonApp/>
                    </Route>
                    <Route path="/details/:id">
                        <PokemonDetails/>
                    </Route>
                    <Route path="/weather">
                        <WeatherApp/>
                    </Route>

                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
