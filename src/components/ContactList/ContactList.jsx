import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem'

export const ContactList = ({ contacts }) => {
	return (
		<ul>
			{contacts.map(contact => {
				return (
					<li key={contact.id}>{contact.name}: {contact.number}</li>
				);
			}
			)}
		</ul>
		// <ContactList/>
	)
	
}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired, 
	// filtredСontacts: PropTypes.func.isRequired,
};