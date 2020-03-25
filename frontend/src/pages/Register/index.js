import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

// CSS
import './style.css'

// IMGS
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'


export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('/ongs', data)
            if(!response) alert('Erro na API')

            localStorage.setItem('ong_id', response.data.id)
            history.push('/profile')
        } catch (error) {
            alert('Error')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be the hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041"/> &nbsp; Voltar para logon
                    </Link>
                </section>

                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />

                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value) }
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade" 
                            value={city}
                            onChange={ e => setCity(e.target.value) }
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: "80px" }}
                            value={uf}
                            onChange={ e => setUf(e.target.value) }
                        />
                    </div>

                    <button type="submit">REGISTRAR</button>
                </form>
            </div>
        </div>
    )
}
