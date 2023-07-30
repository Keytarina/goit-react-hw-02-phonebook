import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem'

export const ContactList = ({ filtredСontacts, onDeleteContact }) => {
	return (
		<ul>
			{filtredСontacts.map(contact => {
				console.log(contact);
				<ContactListItem 
				key={contact.id}
				contact={contact}
				onDeleteContact={onDeleteContact}/>
			}
			)}
		</ul>
	)
	
}

ContactList.propTypes = {
	filtredСontacts: PropTypes.array.isRequired, 
	onDeleteContact: PropTypes.func.isRequired,
};