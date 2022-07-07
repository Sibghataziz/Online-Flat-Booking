import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const BookFlat = ({showalert}) => {
    const location = useLocation();
    const id_list = location.pathname.split("/");
    const id = id_list[id_list.length - 1];
    const navigate = useNavigate()

    
    const [filter, setFilter] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });

    const handleChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    };

    // const bookFlat = async () => {
    //     if(filter.email.length<1 || filter.firstName.length<1 || filter.lastName.length<1 || filter.phone.length<1){
    //         // console.log("All fields are required.")
    //         showalert("All fields are required.",'danger')
    //     }
    //     else{
    //         const formdata = new FormData();
    //         formdata.append('id',id)
    //         const res = await axios.post(`http://localhost:8080/house/booking/${id}`, formdata);
    //         // console.log(res)
    //     }
    // };  

    const bookFlat = () => {
        if(filter.email.length<1 || filter.firstName.length<1 || filter.lastName.length<1 || filter.phone.length<1){
            // console.log("All fields are required.")
            showalert("All fields are required.",'danger')
        }
        else{            
            axios.post(`http://localhost:8080/house/booking/${id}`,{
              'houseId': id,
              'buyerFirstName':filter.firstName,
              'buyerLastName':filter.lastName,
              'buyerEmail':filter.email,
              'buyerPhone':filter.phone,
              'status': 'Booked'
            })
          .then((response) => {
            // console.log(response,'success')
            showalert(response.data,'success')

          }, (error) => {
            // console.log(error,'error')
            showalert("Flat Already Booked",'warning')
          });
          navigate('/home')
        }
    };

  return (
    <div className='container my-5 w-50' >
      <div className="card-body text-black">
        <h3 style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,}}>Flat Booking</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input
                type="text"
                value={filter.firstName}
                name='firstName'
                className="form-control form-control-lg"
                onChange={handleChange}
              />
              <label className="form-label">
                First name
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input
                type="text"
                name='lastName'
                value={filter.lastName}
                className="form-control form-control-lg"
                onChange={handleChange}
              />
              <label className="form-label" >
                Last name
              </label>
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            name='email'
            value={filter.email}
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          <label className="form-label" >
            Email ID
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            name='phone'
            value={filter.phone}
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          <label className="form-label" >
            Phone Number
          </label>
        </div>

        <div className="d-flex justify-content-end pt-3">
          <button type="button" className="btn btn-warning btn-lg ms-2" onClick={bookFlat} style={{fontWeight: 'bold', color:"white", fontSize: 25, backgroundColor:"#a64848"}}>
            Submit Form
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookFlat
