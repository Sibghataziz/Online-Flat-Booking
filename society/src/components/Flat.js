import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";



const Flat = memo(({ room }) => {
  const { state, city, locality,  houseId, image_url, rent } = room;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
      <img
        src={"https://m.lemontreehotels.com/CMSWebParts/MobileWebParts/showpropertyGalleryimage.ashx?Hid=491"}
        alt=""
        height={200}
        width={200}
        />
        <div className="price-top">
          <h6>Rs {rent}</h6>
          <p>Starting Price</p>
        </div>
        <Link to={`/rooms/${houseId}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{`${state} ${city} ${locality}`}</p>
    </article>
  );
});


export default Flat;
