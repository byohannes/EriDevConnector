import React from "react";

const Login = () => {
  return (
    <div classname="login">
      <div classname="container">
        <div classname="row">
          <div classname="col-md-8 m-auto">
            <h1 classname="display-4 text-center">Log In</h1>
            <p classname="lead text-center">
              Sign in to your DevConnector account
            </p>
            <form action="dashboard.html">
              <div classname="form-group">
                <input
                  type="email"
                  classname="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div classname="form-group">
                <input
                  type="password"
                  classname="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <input type="submit" classname="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
