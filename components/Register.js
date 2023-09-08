  // import "../components/showalert"
  // const login =()=>{
  //   return (
  // <body>
  //         <center><h1>User Login</h1></center>
  //         <hr></hr>
      
          {/* <div class="container">
              <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4">
                      <div class="card bg-success">
                          <div class="card-body">
                            <h5 class="card-title">LOGIN PAGE</h5>
                            <form>

                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <div id="emailHelp" class="form-text"></div>
                              </div>

                              <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"></input>
                              </div> */}

                              {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                              </div> */}
                              
      
          
              
          
        
                              {/* <button type="submit" class="btn btn-warning" onClick="showAlert()">Login</button>
                            </form>
                          </div>
                        </div>
                  </div>
                  <div class="col-md-4"></div>
              </div>
      
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        </body>
    )
  }

  // export default login */}

// components/Register.js

import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
    };
    // Implement logic to make a POST request to the backend to register the user
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
