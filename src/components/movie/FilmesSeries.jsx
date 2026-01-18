import { useState } from "react"
import styles from "./FilmesSeries.module.css"
import { IoMdAddCircle } from "react-icons/io"
import FilmesForm from "./FilmesForm"

function FilmesSeries() {
  const [movieForm, setMovieForm] = useState(false)

  async function handleAddMovie(movie) {
        try {
            const response = await fetch('http://localhost:3000/filmes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tmdb_id: movie.id,
                    titulo: movie.title,
                    sinopse: movie.overview,
                    ano: movie.release_date?.slice(0, 4),
                    poster: movie.poster_path,
                    nota: movie.vote_average
                })
            })

            if (!response.ok) {
                throw new Error('Erro ao salvar filme')
            }

            const data = await response.json()
            console.log('Filme salvo:', data)

        } catch (error) {
            console.error(error)
        }
    } 

    useEffect(() => {
      fetch
    })

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>🎥 Aventuras Cinematográficas</h1>
        <h2>Registre aqui seus filmes e séries assistidos</h2>
      </header>

      <div className={styles.actions}>
        <button
          className={styles.addButton}
          onClick={() => setMovieForm(true)}
        >
          <IoMdAddCircle />
          Adicionar Filme/Serie
        </button>
      </div>
      {movieForm &&
        <div>
          <FilmesForm
            text="Adcione um filme ou série:"
            handleSubmit={handleAddMovie}
          />
        </div>
      }

    </section>
  )
}

export default FilmesSeries
