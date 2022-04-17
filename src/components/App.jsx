import React, { Component } from 'react';
import { Container, Title } from './App.styled';
import PhonebookSection from './phonebook/Phonebook';
import ContactList from './contacts/ContactsList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const contactInState = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactInState) {
      alert(`${name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Title>PHONEBOOK APP</Title>
        <PhonebookSection contacts={contacts} onAddContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        <ContactList
          filteredContacts={this.getFilteredContacts()}
          onRemove={this.handleRemove}
        />
      </Container>
    );
  }
}
