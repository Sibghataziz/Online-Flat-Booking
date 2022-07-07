import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import PublicFlats from "./PublicFlats";
import Pagination from "./Pagination";
import Hero from "./Hero"
import Banner from "./Banner"
import { Link } from "react-router-dom";

export default function AllFlats() {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    state: "",
    city: "",
    locality: "",
    budget: 100000,
  });

  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    const fetchFlats = async () => {
      setLoading(true);
      const res = await axios.post(`http://localhost:8080/searching`, {
        ...filter,
      });
      setFlats(res.data);
      setLoading(false);
    };

    fetchFlats();
  }, [filter]);

  // console.log(flats);
  const indexOfLastFlat = currentPage*8
  const indexOfFirstFlat = indexOfLastFlat-8
  const flatsRendering = flats.slice(indexOfFirstFlat,indexOfLastFlat)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // return (
  //   <div className='container my-5'>
  //     <input name='state' type="text" placeholder='State' value={filter.state} onChange={handleChange} />
  //     <input name='city' type="text" placeholder='city' value={filter.city} onChange={handleChange}/>
  //     <input name='locality' type="text" placeholder='locality' value={filter.locality}  onChange={handleChange}/>
  //     <input name='budget' type="text" placeholder='budget' value={filter.budget} onChange={handleChange}/>
  //   </div>
  // )

  return (
    <div className="container">
      <Hero hero="roomsHero">
        <Banner title="ALL FLATS">
          <Link to="/home" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Title title="search flats" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
            className="form-control"
            value={filter.state}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            name="city"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={filter.city}
          />
        </div>
        <div className="form-group">
          <label htmlFor="locality">State</label>
          <input
            name="locality"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={filter.locality}
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">flat price Rs{filter.budget}</label>
          <input
            type="range"
            name="budget"
            min={10000}
            max={100000}
            value={filter.budget}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
      <PublicFlats flats={flatsRendering} loading={loading}/>
      <Pagination flatsPerPage={8} totalFlat={flats.length} paginate={paginate}/>
    </div>
  );
}
