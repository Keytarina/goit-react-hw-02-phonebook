import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, handleChange}) => {
	return (
		<label className='label'>
			Find contacts by name
			<input 
			type="text" 
			name="filter"
			onChange={handleChange}
			value={value} />
		</label>
	);
}

Filter.propTypes = {
	value: PropTypes.string,
	handleChange: PropTypes.func,
};