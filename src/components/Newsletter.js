import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { Component } from 'react';
import {
  NewsletterWrapper,
  NewsletterForm,
  SubmitButton,
  NewsletterTitle,
  FormInput,
} from '../styles/newsletter-styles';
class Newsletter extends Component {
  state = {
    FNAME: null,
    LNAME: null,
    email: null,
    success: null,
    error: null
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, {
      FNAME: this.state.FNAME,
      LNAME: this.state.LNAME
    })
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        this.setState({ success: msg, FNAME: null, LNAME: null, email: null });
      })
      .catch(err => {
        this.setState({ error: err });
      });
    e.target.reset();
  };

  render() {
    return (
      <NewsletterWrapper id='newsletter'>
        <NewsletterTitle>
            Sign up to be notified when <br />Advance Review Copies become available
        </NewsletterTitle>
        <NewsletterForm
          method='POST'
          name='pascale-book-newsletter-form'
          onSubmit={this._handleSubmit}
        >
          <FormInput
            type='text'
            name='FNAME'
            onChange={this._handleChange}
            placeholder='First Name'
          />
          <FormInput
            type='text'
            name='LNAME'
            onChange={this._handleChange}
            placeholder='Last Name'
          />
          <FormInput
            type='email'
            name='email'
            onChange={this._handleChange}
            placeholder='Email'
          />
          {this.state.error ? (
            <p style={{ fontSize: '.8em', color: 'red' }}>
              {this.state.error}
            </p>
          ) : null}
          <SubmitButton type='submit' name='subscribe'>
              SUBSCRIBE
          </SubmitButton>
          {this.state.success ? (
            <p style={{ fontSize: '.8em', color: 'green' }}>
              {this.state.success}
            </p>
          ) : null}
        </NewsletterForm>
      </NewsletterWrapper>
    );
  }
}

export default Newsletter;
