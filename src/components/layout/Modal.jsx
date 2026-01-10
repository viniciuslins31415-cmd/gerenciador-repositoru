import styles from './Modal.module.css'

function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>
                    ×
                </button>
                <h1>Adicionar filmes/série</h1>
                <p>Selecione o gênero:</p>
            </div>
        </div>
    )
}

export default Modal
