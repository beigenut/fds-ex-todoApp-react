import React, { Component } from 'react';

import LoginForm from '../components/LoginForm.js'
import {UserConsumer} from '../contexts/UserContext.js'

export default class LoginPage extends Component {
  render() {
    return (
      <UserConsumer>
        {value => (
          <LoginForm onLogin={value.login} />
        )}
      </UserConsumer>
    )
  }
}