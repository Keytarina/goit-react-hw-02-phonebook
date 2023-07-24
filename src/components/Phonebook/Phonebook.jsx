import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const Phonebook = () => {
	return (
	<div className={css.statstic_wrapper}>
		<h3>Name</h3>
		<input
			type="text"
			name="name"
			pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
			title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
			required
		/>
	</div>
	);
}

Phonebook.propTypes = {

};