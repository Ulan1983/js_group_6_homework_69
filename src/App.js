import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Dishes from "./containers/Dishes";


const App = () => (
        <Switch>
            <Route path="/" exact component={Dishes} />
        </Switch>
);


export default App;
