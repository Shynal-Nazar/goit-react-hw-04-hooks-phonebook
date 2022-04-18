import { useState } from 'react';
import {
  PhoneSection,
  PhoneSectionName,
  PhoneForm,
  PhoneLabel,
  PhoneInput,
  PhoneBtn,
} from './Phonebook.styled';
import PropTypes from 'prop-types';

function PhonebookSectionp({ onAddContact }) {
  const [nameInput, setNameInput] = useState('');
  const [numberInput, setNumberInput] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setNameInput(value);
        break;

      case 'number':
        setNumberInput(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (nameInput && numberInput) {
      onAddContact(nameInput, numberInput);
      setNameInput('');
      setNumberInput('');
    }
  };

  return (
    <PhoneSection>
      <PhoneSectionName>Phonebook</PhoneSectionName>
      <PhoneForm onSubmit={handleSubmit}>
        <PhoneLabel>
          Name
          <PhoneInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={nameInput}
            onChange={handleChange}
          />
        </PhoneLabel>
        <PhoneLabel>
          Number
          <PhoneInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={numberInput}
            onChange={handleChange}
          />
        </PhoneLabel>
        <PhoneBtn type="submit">Add contacts</PhoneBtn>
      </PhoneForm>
    </PhoneSection>
  );
}

export default PhonebookSectionp;

PhonebookSectionp.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onAddContact: PropTypes.func.isRequired,
};
