import styles from './Select.module.css'

function Select({ label, name, value, onChange, options }) {
  return (
    <div className={styles.select_wrapper}>
      <label htmlFor={name}>{label}</label>

      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione uma opção</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
