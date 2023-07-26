import css from './ContactForm.module.css';
import { Component } from 'react';

export class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	}
	// Метод оновлення полів input
	handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
	  }
	
	  handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state);
		// Скидання форми
		this.setState({ name: '', number: '' });
	  }

	render() {
		return (
			<form className={css.statstic_wrapper} onSubmit={this.handleSubmit}>
				<label className='label'>
					Name
					<input 
						type="text"
						name="name"
						onChange={this.handleChange}
						value={this.state.name}
						pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				  </label>
				  <label className='label'>
					Number
					<input
						type="tel"
						name="number"
						onChange={this.handleChange}
						value={this.state.number}
						pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				  </label>
				<button type="submit">Add contact</button>
			</form>
		);
	}	
}