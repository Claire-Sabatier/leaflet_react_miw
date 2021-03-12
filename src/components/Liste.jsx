import React, {useContext} from 'react'
import mapContext from "./context_reducer/mapContext"
import DataUser from "./DataUser"
import './liste.css'


const Liste = () =>{
    const {state, dispatch} = useContext(mapContext);
    return (
        <div>
            {state.user ? <DataUser/>  : ''}
            <h1> Liste des markers</h1>
            <ul>
                {state.markers.map((marker, i) => <li key={i} marker={marker}> <strong>Latitude:</strong> {marker[0]} | <strong>longitude:</strong> {marker[1]} 
                <button onClick={()=> dispatch({i, type: 'delete'})}>Supprimer</button> </li> )}
            </ul>
        </div>
        
    );
}


export default Liste