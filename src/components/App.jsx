import './App.css';
import React from 'react'
import Map from './Map'
import Liste from './Liste'
import User from './User';
import mapContext from "./context_reducer/mapContext"
import { useReducer } from 'react'
import mapReducer from './context_reducer/mapReducer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

const App = () => {

    const [state, dispatch] = useReducer(mapReducer, { markers: []})

    return <>
        <mapContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    
                    <Route path="/liste">
                        <Link to="/">Revenir à la map</Link>
                        <Liste />
                        
                    </Route>
                    <Route path="/user">
                        <Link to="/">Revenir à la map</Link>
                        <User />
                    </Route>

                    <Route path="/">
                        <Link to="/liste">Voir la liste des markers</Link>
                        <br/>
                        <Link to="/user">User</Link>
                        <Map />
                    </Route>

                   
                </Switch>
            </Router>
        </mapContext.Provider>
    </>
}

export default App