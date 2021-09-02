import React, { Component } from 'react'

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault()

    //armazenando os valores dos inputs
    const inputEmail = document.querySelector('input[type=email]')
    const inputPassword = document.querySelector('input[type=password]')

    //fazendo a requisicao fake para a API
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputEmail.value,
        password: inputPassword.value
      })
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <main className="login">
        <div className="loginContainer">
          <h1 className="loginTitle">Code Solutions</h1>
          <form onSubmit={this.handleSubmit} className="loginForm">
            <input
              type="email"
              className="inputEmail"
              placeholder="example@example.com"
            ></input>
            <span className="loginInputBorder"></span>

            <input
              type="password"
              className="inputPassword"
              placeholder="Password"
            ></input>
            <span className="loginInputBorder"></span>

            <button type="submit" className="loginSubmit">
              Login
            </button>
          </form>
        </div>
      </main>
    )
  }
}

export default Form
