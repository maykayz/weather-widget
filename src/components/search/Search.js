import React from 'react'
import styles from './Search.module.css'

const Search = ({onSubmit,onCityChanged,city}) => {

	return(
		<div className={styles.form__container} data-testid="search-form">
			<form className={styles.form__form} onSubmit={onSubmit}>
				<input className={styles.form__input} value={city} onChange={onCityChanged} placeholder="Search by city" data-testid="search-input"></input>
				<button className={styles.form__submit} type="submit" data-testid="search-btn">Search</button>
			</form>
		</div>
	)
}

export default Search