import React, { useState } from "react";
import axios from 'axios';

export default function ForgotPassword({showalert}) {
    const [Email,setEmail] = useState()

    const retreivePassword =() => {
        axios.post('http://localhost:8080/retreivePassword', {
                'email' : Email
          })
          .then((response) => {
            // console.log(response.data.password);
            showalert(`Your password is ${response.data.password}`,'success')
            // console.log("registered)
            // auth.login(response.data)
          }, (error) => {
            // console.log(error)
            // console.log("You are not a user");
            showalert("You are not a user",'danger')
          });
    }
  return (
    <div className="container my-5 w-25">
      <div className="row">
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" for="form3Example97">
            Email ID
          </label>
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button type="button" className="btn btn-warning btn-lg ms-2" onClick={retreivePassword}>
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
}
