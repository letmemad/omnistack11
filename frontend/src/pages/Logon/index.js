import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

// IMGs
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// CSS
import './style.css'

export default function Logon() {
    const [id, setID] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        if(!id.length) return alert('Por favor preencha todos os campos.')
        
        try {
            const response = await api.post('/session', { id })
            localStorage.setItem('ong_id', id)
            localStorage.setItem('ong_name', response.data.ong.name)
            history.push('/profile')
        } catch (error) {
            alert('Falha no login, favor tentar novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Be the Hero"/>

                <form onSubmit={ handleLogin }>
                    <input placeholder="Ong ID" value={ id } onChange={ e => setID(e.target.value) } />
                    <button type="submit">ENTRAR</button>
                </form>

                <Link to="/register">
                    <FiLogIn size={16} color="#E02041"/> &nbsp; Não tenho cadastro
                </Link>
            </section>

            <img src={ heroesImg } alt="Heroes" className="heroes"/>
        </div>
    )
}
