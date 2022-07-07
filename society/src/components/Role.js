import Hero from "./Hero"
import React from 'react'
import Banner from "./Banner"

import { useNavigate } from 'react-router-dom'

const Role = () => {
    const navigate = useNavigate()
    const handleRole = (role) =>{
        localStorage.setItem("Role",role)
        navigate("/home")
    }
  return (
    
    <div className='container' style={{marginTop:100}}>
       <Hero hero="roomsHero">
       <Banner title="CHOOSE YOUR ROLE">
     
          <button type="button" className="btn btn-primary" onClick={()=>{handleRole("Seller")}}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Seller &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
      &nbsp;
          <button type="button" className="btn btn-primary" onClick={()=>{handleRole("Buyer")}}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buyer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        
        </Banner>
        </Hero>
    </div>
  )
}

export default Role
