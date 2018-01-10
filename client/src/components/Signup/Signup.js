import Input from '../Input/Input';
import { message } from 'antd';
import axios from 'axios';
import React from 'react';

const Signup = function(props) {

  const signupForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    message.config({
      top: 80,
      duration: 8,
    });
    const signupSuccess = function() {
      message.success('Successfully signed up! Please proceed to log in.');
    }
    axios.post('/api/signup', {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log("Response:", response);
      if (response.status === 200) {
        {signupSuccess()};
        console.log("successfully signed up");
        props.history.push("/login");
      } else {
        console.log("Unable to signup. Username already taken.");
      }
    })
  }

  return (
    <div className='signUpContainer'>
      <h1 className='title'>Sign Up Today!</h1>

      <form onSubmit={signupForm}>
        <input inputtype="input" placeholder="email" id="email" name="email"></input>
        <input inputtype="input" type="password" placeholder="password" id="password" name="password"></input>
        <button className='formButton' type="submit">Sign Up</button>
      </form>
    </div>

  )
};

export default Signup;
