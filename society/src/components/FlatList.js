import React from "react";
import Flat from "./Flat";


const FlatList = ({ rooms,}) => {
    // console.log(rooms)
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Flat key={item.houseId} room={item}/>;
        })}
      </div>
    </section>
  );
};

export default FlatList;
