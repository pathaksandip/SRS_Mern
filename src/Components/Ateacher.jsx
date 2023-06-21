import React, { useState } from "react";
import "./Pages/Ateacher.css";
import axios from "axios";

function Ateacher() {
  const [tName, setTName] = useState("");
  const [temail, setTEmail] = useState("");
  const [tphone, setTPhone] = useState("");
  const [taddress, settaddress] = useState("");
  const [tgender, settgender] = useState("");
  const [tusername, settusername] = useState("");
  const [tsubject, settsubject] = useState("");
  const [tpassword, settpassword] = useState("");
  const [tdob, settdob] = useState("");

  const Teacherdetail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/teacherdetail", {
        tName,
        temail,
        tphone,
        taddress,
        tgender,
        tusername,
        tsubject,
        tdob,
        tpassword,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="textnav">
            <h1>Add Teacher Details</h1>
            <form action="/teacherdetail" method="post" className="form1">
              <div className="row1">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    value={tName}
                    onChange={(e) => setTName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div className="form-group email">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={temail}
                  onChange={(e) => setTEmail(e.target.value)}
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group phone1">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  value={tphone}
                  onChange={(e) => setTPhone(e.target.value)}
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group address">
                <label htmlFor="address">Address:</label>
                <textarea
                  className="form-control"
                  id="address"
                  value={taddress}
                  onChange={(e) => settaddress(e.target.value)}
                  rows="3"
                  placeholder="Enter address"
                ></textarea>
              </div>
              <div className="form-group dateofbirth">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={tdob}
                  onChange={(e) => settdob(e.target.value)}
                />
              </div>
              <div className="form-group phone">
                <label htmlFor="gender">Gender:</label>
                <select
                  className="form-control"
                  id="gender"
                  value={tgender}
                  onChange={(e) => settgender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group phone">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  value={tusername}
                  onChange={(e) => settusername(e.target.value)}
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group phone">
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
                  value={tpassword}
                  onChange={(e) => settpassword(e.target.value)}
                  className="form-control"
                  id="password"
                  placeholder="Set password"
                />
              </div>
              <div className="form-group address1">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  value={tsubject}
                  onChange={(e) => settsubject(e.target.value)}
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>
              <button
                onClick={Teacherdetail}
                type="submit"
                className="btn btn-primary submit"
              >
                Submit
              </button>
            </form>
            <div className="container mt-5">
              <h1>Teacher User List</h1>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Username</th>
                    <th>Subject</th>
                    <th>Subject</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ateacher;
