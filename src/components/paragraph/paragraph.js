import React from 'react'
import './paragraph.css'


const Paragraph = ({ corFundo, corTexto, texto }) => {
    return <div className='content' style={{ backgroundColor: corFundo, textTransform: 'uppercase' }}>
        <p style={{ color: corTexto }}>{texto}</p>
    </div>
}

Paragraph.defaultProps = {
    corFundo: "crimson",
    corTexto: "#fff",
    texto: "Isto é apenas um texto padrão. "
}

export default Paragraph