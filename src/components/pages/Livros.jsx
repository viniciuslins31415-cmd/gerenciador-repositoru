import { useState } from "react"
import Modal from "../layout/Modal"
import styles from "./FilmesSeries.module.css"
import { IoMdAddCircle } from "react-icons/io"

function Livros() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>📖 Experiências Literárias</h1>
        <h2>Gerencie suas leituras aqui</h2>
      </header>

      <div className={styles.actions}>
        <button
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          <IoMdAddCircle />
          Adicionar Livro
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

export default Livros
