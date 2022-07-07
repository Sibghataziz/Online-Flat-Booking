import axios from 'axios'
import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register({showalert}) {
    
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Occupation, setOccupation] = useState("")
    const [Email, setEmail] = useState("")
    const [PanCard, setPanCard] = useState("")
    const [Adhaar, setAdhaar] = useState("")
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [Terms , setTerms] = useState(false)

    const navigate = useNavigate()

    const RegisterUser = () =>{
        if(FirstName.length<1 || LastName.length<1 || Occupation.length<1 || Email.length<1 || PanCard.length<1 || Adhaar.length<1 || Phone.length<1 || Password.length<1 || ConfirmPassword.length<1){
            // console.log("All fields are required.")
            showalert("All fields are required.",'danger')
        }
        else if(!Terms){
            // console.log("Please to through the terms and conditions.")
            showalert("Please accept the terms and conditions",'dangaer')
        }
        else if(Password!==ConfirmPassword){
            // console.log("Password do not match")
            showalert("Password do not match",'danger')
        }
        else{
            axios.post('http://localhost:8080/user', {
                "firstName":FirstName,
                "lastName":LastName,
                "email":Email,
                "phoneNo": Phone,
                "password":Password,
                "role":"both",
                "adhaarNo":Adhaar,
                "pancard":PanCard,
                "occupation":Occupation
          })
          .then((response) => {
            // console.log(response.data.email);
            // console.log("registered")
            // auth.login(response.data)
            showalert("You are successfully registered",'success')
            navigate('/')

          }, (error) => {
            // console.log(error)
            // console.log("byeeee");
            showalert("Already a user",'danger')
          });
        }
    }





  return (
    <div className='container my-5 w-50' >
      <div className="card-body text-black">
        <h3>User Registration</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input
                type="text"
                id="form3Example1m"
                className="form-control form-control-lg"
                value={FirstName} onChange={(e)=> setFirstName(e.target.value)}
              />
              <label className="form-label" for="form3Example1m">
                First name
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input
                type="text"
                id="form3Example1n"
                className="form-control form-control-lg"
                value={LastName} onChange={(e)=> setLastName(e.target.value)}
              />
              <label className="form-label" for="form3Example1n">
                Last name
              </label>
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            value={Email} onChange={(e)=> setEmail(e.target.value)}
          />
          <label className="form-label" for="form3Example97">
            Email ID
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            value={Occupation} onChange={(e)=> setOccupation(e.target.value)}
          />
          <label className="form-label" for="form3Example97">
            Occupation
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            value={PanCard} onChange={(e)=> setPanCard(e.target.value)}
          />
          <label className="form-label" for="form3Example97">
            PanCard Number
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            value={Adhaar} onChange={(e)=> setAdhaar(e.target.value)}
          />
          <label className="form-label" for="form3Example97">
            Adhaar Number
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            value={Phone} onChange={(e)=> setPhone(e.target.value)}
          />
          <label className="form-label" for="form3Example97">
            Phone Number
          </label>
        </div>

        <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" value={Password} onChange={(e)=> setPassword(e.target.value)}/>
            <label className="form-label" for="form2Example2">Password</label>
        </div>

        <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" value={ConfirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <label className="form-label" for="form2Example2">Confirm Password</label>
        </div>

        <div className="form-check">
                <input className="form-check-input" type="checkbox" id="form2Example31" value={Terms} onChange={(e)=> setTerms(e.target.checked?true:false)}/>
                <label className="form-check-label" for="form2Example31"> Agree to the Terms and Conditions </label>
        </div>

        <div className="d-flex justify-content-end pt-3">
          <button type="button" className="btn btn-warning btn-lg ms-2" onClick={RegisterUser}>
            Submit form
          </button>
        </div>
      </div>
    </div>
  );
}
