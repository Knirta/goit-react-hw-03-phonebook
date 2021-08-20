import React, { Component } from "react";
import ContactForm from "./components/contactForm";
import Filter from "./components/filter";
import ContactList from "./components/contactList";
import Container from "./components/container";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = (contactData) => {
    if (
      this.state.contacts.find((contact) => contact.name === contactData.name)
    ) {
      alert(contactData.name + " is already in contacts");
      return;
    }

    const contact = {
      id: uuidv4(),
      name: contactData.name,
      number: contactData.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContact();

    return (
      <Container>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
