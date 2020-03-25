import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

// CSS
import './style.css'

// API
import api from '../../services/api'

// Imgs
import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [casos, setCasos] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: localStorage.getItem('ong_id')
            }
        }).then((response) => {
            setCasos(response.data.incidents)
        })
    }, [localStorage.getItem('ong_id')])

    function handleDeleteIncident(id) {
        try {
            api.delete(`/incident/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('ong_id')
                }
            })

            setCasos(casos.filter(caso => caso.id !== id))
        } catch (error) {
            alert('Error')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be the Hero"/>
                <span>Bem vinda, { localStorage.getItem('ong_name') }</span>


                <button type="submit">                    
                    <Link to="/incidents/new">Cadastrar novo caso</Link>
                </button>

                <Link to="/" onClick={ handleLogout } className="icon">
                    <FiPower size="18" color="#E02041"/>
                </Link>
            </header>

            <h1>CASOS</h1>

            <ul>
                {
                    casos.map((caso) => (
                    <li key={ caso.id }>
                        <strong>CASO</strong>
                        <p>{caso.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{ caso.description }</p>

                        <strong>VALOR</strong>
                        <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.value) }</p>

                        <button onClick={ () => handleDeleteIncident(caso.id) }>
                            <FiTrash2 size="20" color="#a8a8b3" />
                        </button>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
