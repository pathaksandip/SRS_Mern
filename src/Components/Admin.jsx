import React from "react";
import Teacher from "./Teacher";

function Admin() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 leftside">
            <p id="tname">MBSS</p>
            <img src={"/images/logo.png"} className="logo" alt="logo" />
            <h2 className="quote">
              Transforming Education:Effortlessly Accurate Online School
              Results!
            </h2>
          </div>
          <div className="col-md-6 rightside">
            <form action="/loginadmin" method="post" className="login">
              <h1 className="row justify-content-center">
                School Result System
              </h1>
              <h5 className="row justify-content-center"> Admin Panel</h5>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button
                  href="dashboard.html"
                  type="submit"
                  className="btn btn-primary"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
