import { useState } from "react"
import Modal from "../layout/Modal"
import styles from "./FilmesSeries.module.css"
import { IoMdAddCircle } from "react-icons/io"

function FilmesSeries() {
  const [isModalOpen, setIsModalOpen] = useState(false) 

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>🎥 Aventuras Cinematográficas</h1>
        <h2>Registre aqui seus filmes e séries assistidos</h2>
      </header>

      <div className={styles.actions}>
        <button
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          <IoMdAddCircle />
          Adicionar Filme/Serie
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src="movieicon.png"
        alt="filmIcon"
        title="Adicionar filme/série..."
        val1="Filme"
        val2="Série"
      >
      </Modal>
    </section>
  )
}

export default FilmesSeries
