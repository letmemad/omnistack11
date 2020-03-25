import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

// Css
import './style.css'

import api from '../../services/api'

// Imgs
import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault()
        if(!title.length || !description.length || !value.length) return alert('Favor preencher todos os campos.')

        await api.post('/incidents', { title, description, value }, {
            headers: {
                Authorization: localStorage.getItem('ong_id')
            }
        }).then((response) => {
            if(response.data.error) return alert(response.data.error)
            history.push('/profile')
        }).catch(() => {
            alert('Erro ao criar, favor tentar novamente.')
        })
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be the hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreve seu caso detalhadamente para encontrar um herói para resolve-lo.</p>

                    <Link to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/> &nbsp; Voltar para casos
                    </Link>
                </section>

                <form onSubmit={ handleNewIncident }>
                    <input 
                        placeholder="Titulo do caso"
                        value={ title }
                        onChange={ e => setTitle(e.target.value) }
                    />
                    <textarea 
                        placeholder="Descrição"
                        rows="5"
                        value={ description }
                        onChange={ e => setDescription(e.target.value) }
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={ value }
                        onChange={ e => setValue(e.target.value) }
                    />

                    <button type="submit">REGISTRAR</button>
                </form>
            </div>
        </div>
    )
}
