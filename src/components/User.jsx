import React, { useContext, useState } from 'react'
import mapContext from './context_reducer/mapContext'
import './user.css'

const User = () => {

    const { state, dispatch } = useContext(mapContext)

    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [mail, setMail] = useState('')

    const [valid, setValid] = useState(true)

    const submit = (e) => {
        e.preventDefault()
        const values = e.target.elements
        const lastName = values.namedItem('lastName').value
        const firstName = values.namedItem('firstName').value
        const mail = values.namedItem('mail').value
        if (!lastName || !firstName || !mail) {
            setValid(false)
            return
        } else {
            setValid(true)
        }

        dispatch({ user: { lastName, firstName, mail }, type: 'infos' })
    }

    return <form onSubmit={submit} className="input">
                <label htmlFor="lastname">Votre nom</label>
                <input type="text" id="lastName" name="lastName" onChange={e => setLastName(e.target.value)} />

                <br />

                <label htmlFor="firstname">Votre prénom</label>
                <input type="text" id="firstName" name="firstName" onChange={e => setFirstName(e.target.value)} />

                <br />

                <label htmlFor="mail">Votre adresse mail</label>
                <input type="email" id="mail" name="mail" onChange={e => setMail(e.target.value)} />

                <input type="submit" value="Enregistrer" className="submit"/>

                {!valid && <p>Veuillez renseigner tous les champs</p>}
            </form>
}

export default User