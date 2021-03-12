import React, { useContext } from 'react'
import mapContext from './context_reducer/mapContext'
import './dataUser.css'


const DataUser = () => {

    const { state } = useContext(mapContext)

    return <div className="utilisateur">
        <h2>
           Bienvenue {state.user.firstName} {state.user.lastName}
        </h2>
        <p> {state.user.mail}</p>
    </div>
}

export default DataUser;