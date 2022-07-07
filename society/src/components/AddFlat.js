import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddFlat({showalert}) {

    const navigate = useNavigate()
    const [HouseNumber, setHouseNumber] = useState("")
    const [Locality, setLocality] = useState("")
    const [State, setState] = useState("")
    const [City, setCity] = useState("")
    const [PinCode, setPinCode] = useState("")
    const [Description, setDescription] = useState("")
    const [Area, setArea] = useState(0)
    const [NumberOfRooms, setNumberOfRooms] = useState(0)
    const [Rent, setRent] = useState(10000)
    
    const insertFlat = () =>{
        if(HouseNumber.length<1 | Locality.length<1 || State.length<1 || City.length<1 || PinCode.length<1 || Area<1 || NumberOfRooms<1){
            console.log("Invalid Flat Details")
            showalert("All fields are required","danger")
        }
        else{
            axios.post('http://localhost:8080/house', 
            {
                    "state": State,
                    "city": City,
                    "locality": Locality,
                    "pincode": PinCode,
                    "houseNumber":HouseNumber,
                    "noOfRooms": NumberOfRooms,
                    "rent": Rent,
                    'area' : Area,
                    'description' : Description,
                    'status' : 'Available',
                    "userRegistration":{
                        "userId": localStorage.getItem("userId")
                    }
                
          })
          .then((response) => {
            const l = response.data.length
            const id = response.data[l-1].houseId
            showalert("Flat succesfully added.",'success')
            navigate(`/addImage/${id}`)

          }, (error) => {
            console.log(error)
            console.log();
            showalert("You are not allowed to add flats.","danger")
          });
        }
    }



  return (
    <div className='container my-5 w-50'  style={{marginTop:23}}>
      <div className="card-body text-black">
        <h3 style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,textAlign:'center'}}>Add Flat</h3><br></br>
        <div className="row">
          <div className="col-md-4 mb-4">
          <div className="form-outline">
          <input
            type="number"            
            className="form-control form-control-lg"
            value={Rent} onChange={(e)=> setRent(e.target.value)}
          />
          <label className="form-label" >
            Selling Price
          </label>
        </div>
          </div>
          <div className="col-md-4 mb-4">
          <div className="form-outline mb-4">
          <input
            type="number"            
            className="form-control form-control-lg"
            value={NumberOfRooms} onChange={(e)=> setNumberOfRooms(e.target.value)}
          />
          <label className="form-label" >
            Number of rooms
          </label>
        </div>
          </div>

          <div className="col-md-4 mb-4">
          <div className="form-outline mb-4">
          <input
            type="number"            
            className="form-control form-control-lg"
            value={Area} onChange={(e)=> setArea(e.target.value)}
          />
          <label className="form-label" >
            Area
          </label>
        </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"            
            className="form-control form-control-lg"
            value={HouseNumber} onChange={(e)=> setHouseNumber(e.target.value)}
          />
          <label className="form-label" >
            House Number
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"            
            className="form-control form-control-lg"
            value={Locality} onChange={(e)=> setLocality(e.target.value)}
          />
          <label className="form-label" >
            Locality
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"            
            className="form-control form-control-lg"
            value={City} onChange={(e)=> setCity(e.target.value)}
          />
          <label className="form-label" >
            City
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"            
            className="form-control form-control-lg"
            value={State} onChange={(e)=> setState(e.target.value)}
          />
          <label className="form-label" >
            State
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"            
            className="form-control form-control-lg"
            value={PinCode} onChange={(e)=> setPinCode(e.target.value)}
          />
          <label className="form-label" >
            Pincode
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="textarea"            
            className="form-control form-control-lg"
            rows={10}
            value={Description} onChange={(e)=> setDescription(e.target.value)}
          />
          <label className="form-label" >
            Description
          </label>
        </div>
        
        <div className="d-flex justify-content-end pt-3">
          <button type="button" className="btn btn-warning btn-lg ms-2" onClick={insertFlat} style={{backgroundColor:"#a64848", color:"white", fontSize: 25,}}>
            Submit Form
          </button>
        </div>
      </div>
    </div>
  )
}
