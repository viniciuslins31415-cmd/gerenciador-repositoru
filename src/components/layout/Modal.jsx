import { useEffect, useState } from "react"

import styles from './Modal.module.css'
import Select from './Select'

function Modal({isOpen, onClose, children, title, text, val1, val2}) {
    if (!isOpen) return null

    const [tipo, setTipo] = useState("")
    const [nome, setNome] = useState("")
    const [filmes, setFilmes] = useState([])

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY

    useEffect(() => {
        if (!nome || !tipo) return

        const controller = new AbortController()

        const endpoint =
            tipo === "Filme"
                ? "movie"
                : tipo === "Série"
                ? "tv"
                : null

        if (!endpoint) return

        fetch(
            `https://api.themoviedb.org/3/search/${endpoint}?api_key=${API_KEY}&language=pt-BR&query=${nome}`,
            { signal: controller.signal }
        )
            .then(res => res.json())
            .then(data => setFilmes(data.results || []))
            .catch(() => {})

        return () => controller.abort()
    }, [nome, tipo])

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>
                    ×
                </button>
                <h2>{title}</h2>
                <p>{text}</p>
                <Select
                label="Tipo de conteúdo"
                name="tipoConteudo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                options={[
                    { value: val1, label: val1 },
                    { value: val2, label: val2 },
                ]}
                />

                {tipo && (
                    <div className={styles.field}>
                        <label htmlFor="nome">
                        Nome do {tipo.toLowerCase()}
                        </label>

                        <input
                        id="nome"
                        type="text"
                        placeholder={"Digite o nome"}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />

                        {(tipo === "Filme" || tipo === "Série") && filmes.length > 0 && (
                            <ul className={styles.suggestions}>
                                {filmes.slice(0, 5).map(item => (
                                    <li
                                        key={item.id}
                                        onClick={() => {
                                            setNome(item.title || item.name)
                                            setFilmes([])
                                        }}
                                    >
                                        {item.title || item.name}
                                    </li>
                                ))}
                            </ul>
                        )}

                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal
