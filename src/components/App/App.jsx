import React, { Component } from "react";
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

const CONTACTS_KEY = 'contacts'

export class App extends Component  {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };
  
  getContacts=(elements)=> {
    const { contacts } = this.state;
    const name = elements.name;
    for (const contact of contacts){
      const contactLower = contact.name.toLowerCase();
      const nameLower = name.toLowerCase();
      if(contactLower === nameLower) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    this.setState({ contacts: [
      ...contacts,
      elements
    ]})
  };

  handleFilter=(event)=> {
    this.setState({ filter: event.target.value });
  };

  displayFilteredResults=()=> {
    const filterName = this.state.filter;
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(({ name, number, id }) => {
      const searchResultLower = filterName.toLowerCase();
      const contactNameLower = name.toLowerCase();
      return contactNameLower.includes(searchResultLower);
    })
    return filteredContacts;
  };

  deleteContact = (id)=> {
    const { contacts } = this.state;
    const deletedContact = contacts.filter(contact=> id !== contact.id);
    this.setState({ contacts: [...deletedContact] });
  };

  componentDidMount() {
    const { contacts } = this.state;
    const contactsJSON = JSON.stringify(contacts);
    const contactsLocalStorage = localStorage.getItem(CONTACTS_KEY);
    if(!contactsLocalStorage) {
      try {
        localStorage.setItem(CONTACTS_KEY, contactsJSON);
      } catch(error) {
        console.loe(error);
      }
    } else {
      try {
        const contactsParsed = JSON.parse(contactsLocalStorage);
        this.setState({ contacts: [...contactsParsed]});
      } catch(error) {
        console.loe(error);
      }
    }
  };

  componentDidUpdate(nextProps, nextState) {
    if(this.state.contacts !== nextState.contacts) {
      const { contacts } = this.state;
      const contactsJSON = JSON.stringify(contacts);
      try {
        localStorage.setItem(CONTACTS_KEY, contactsJSON);
      } catch(error) {
        console.loe(error);
      }
    }
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.displayFilteredResults();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
            changeContacts={this.getContacts}
            />
        <h2>Contacts</h2>
        <Filter 
            filterContacts={filter}
            onChangeFilter={this.handleFilter}
            />
        <ContactList 
            contactList={filteredContacts}
            onDelete={this.deleteContact}/>
      </div>
    )
  }
};
