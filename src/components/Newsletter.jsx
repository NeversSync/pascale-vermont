import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { Component } from 'react';
import {
  NewsletterWrapper,
  NewsletterForm,
  SubmitButton,
  NewsletterTitle,
  FormInput,
  List
} from '../styles/newsletter-styles';

class Newsletter extends Component {
  state = {
    FNAME: null,
    LNAME: null,
    email: null,
    one: null,
    two: null,
    four: null,
    success: null,
    error: null
  };

  _handleChange = e => {
    if(e.target.name === 'group[18217][1]') {
      this.setState({
        one: e.target.value
      });
    }
    if(e.target.name === 'group[18217][2]') {
      this.setState({
        two: e.target.value
      });
    }
    if(e.target.name === 'group[18217][4]') {
      this.setState({
        four: e.target.value
      });
    }
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, {
      FNAME: this.state.FNAME,
      LNAME: this.state.LNAME,
      'group[18217][1]': this.state.one,
      'group[18217][2]': this.state.two,
      'group[18217][4]': this.state.four,
    })
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        this.setState({ success: msg, FNAME: null, LNAME: null, email: null, one: null, two: null, four:null });
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
          Sign up to receive a free chapter of Surviving the Unimaginable
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
          <List>
            <li>
              <input type="checkbox" value="1" name="group[18217][1]" id="mce-group[18217]-18217-0" onChange={this._handleChange}/>
              <label for="mce-group[18217]-18217-0">Bereaved parent</label>
            </li>
            <li>
              <input type="checkbox" value="2" name="group[18217][2]" id="mce-group[18217]-18217-1" onChange={this._handleChange}/>
              <label for="mce-group[18217]-18217-1">Friend or family of a bereaved parent</label>
            </li>
            <li>
              <input type="checkbox" value="4" name="group[18217][4]" id="mce-group[18217]-18217-2" onChange={this._handleChange}/>
              <label for="mce-group[18217]-18217-2">Medical professional</label>
            </li>
          </List>
          {this.state.error ? (
            <p style={{ fontSize: '.8em', color: 'red' }}>
              {this.state.error}
            </p>
          ) : null}
          <SubmitButton type='submit' name='subscribe'>
              SUBMIT
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
