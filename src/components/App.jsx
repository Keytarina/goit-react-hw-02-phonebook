import React, { Component } from "react";

import { Section } from 'components/Section/Section';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';


export class App extends Component {
  state = {
    name: '',
    number: '',
    // contacts: [],
    // filter: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state });
  }

  render() {
    const { name } = this.state.name;
    const { number } = this.state.number;
    return (
      <div className="App">
        <Section title="Phonebook">
          <Phonebook 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
          name={name} 
          number={number}/>
        </Section>
        <Section title="Contacts">
          <Contacts/>
        </Section>
      </div>
    )
  }
}