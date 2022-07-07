import React from 'react'
import Loading from './Loading'
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link,useNavigate } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";


const FlatDetail = ({flat, loading, showalert}) => {
    const navigate = useNavigate()
    if(loading){
        return <Loading/>
    }
    // console.log(flat.userRegistration)
  const handleBook = () =>{
    if(flat.userRegistration.userId==localStorage.getItem('userId')){
      showalert("You cannot book your own Flat.",'danger')
    }
    else{
      navigate(`/bookflat/${flat.houseId}`)
    }
  }

  return (
    <div>
      <StyledHero img={defaultBcg}>
          <Banner title={`${flat.locality} room`}>
            <Link to="/rooms" className="btn-primary">
              back to flats
            </Link><br></br><br></br>
            <button onClick={handleBook} className="btn-primary">
              book flat
            </button>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
              <img src="https://m.lemontreehotels.com/CMSWebParts/MobileWebParts/showpropertyGalleryimage.ashx?Hid=491" />
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{flat.description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : Rs {flat.rent}</h6>
              <h6>Size : {flat.area} SQFT</h6>
              <h6>Locality : {flat.locality}</h6>
              <h6>City : {flat.city}</h6>
              <h6>State : {flat.state}</h6>
            </article>
          </div>
        </section>
    </div>
  )
}

export default FlatDetail
