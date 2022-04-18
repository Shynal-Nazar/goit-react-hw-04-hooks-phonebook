import { useState } from 'react';
import useLocalStorage from 'components/useLocalStorage';
import { Container, Title } from './App.styled';
import PhonebookSection from './phonebook/Phonebook';
import ContactList from './contacts/ContactsList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setfilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const contactInState = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactInState) {
      alert(`${name} is already in contacts!`);
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
  };

  const handleChangeFilter = filter => {
    setfilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemove = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <Title>PHONEBOOK APP</Title>
      <PhonebookSection contacts={contacts} onAddContact={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChangeFilter={handleChangeFilter} />
      <ContactList
        filteredContacts={getFilteredContacts()}
        onRemove={handleRemove}
      />
    </Container>
  );
}
