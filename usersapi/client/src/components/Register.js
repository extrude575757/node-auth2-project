import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Register extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        credentials: {
          username: '',
          department: '',
          password: '',
          role:''
        }
      };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  /*
    1. connect to server with username/passowrd
    2. store the token that gets passed on successful login
    3. output an error when we have an unsuccessful login
  */

  login = e => {
    e.preventDefault();
    // login to server
    axiosWithAuth().post("http://localhost:8022/api/auth/register", this.state.credentials)
      .then(res => {
        console.log('bk: Login.js: login: res: ', res)
        localStorage.setItem('token', res.config.data)
        this.props.history.push('/protected')
      })
      .catch(err => {
        console.error(err.response)
      })
  };

  render() {
    return (
      <div>Register
        <form onSubmit={this.login}>
          <label for='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label for='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={this.state.credentials.department}
            onChange={this.handleChange}
          />
          <label for='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <label for='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={this.state.credentials.role}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;