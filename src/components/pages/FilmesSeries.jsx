import { useState } from "react"
import Modal from "../layout/Modal"
import styles from "./FilmesSeries.module.css"
import { IoMdAddCircle } from "react-icons/io"

function FilmesSeries() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>🎥 Aventuras Cinéfilas</h1>
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
      >
        <h2>Novo registro</h2>
        <p>Conteúdo da janela aqui.</p>
      </Modal>
    </section>
  )
}

export default FilmesSeries
