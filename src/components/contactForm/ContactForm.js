import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ContactForm.scss";

class ContactForm extends Component {
  static defaultProps = {
    initialInput: "",
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: this.props.initialInput,
    number: this.props.initialInput,
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label>
          <p className="Form__label">Name:</p>
          <input
            className="Form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label>
          <p className="Form__label">Number:</p>
          <input
            className="Form__input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className="Form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
