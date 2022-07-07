// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Test() {
//     const [flats, setFlats]  = useState()
//     // console.log(localStorage.getItem("userId"),"localstorageId")
//     // const address = ``
//     useEffect(async ()=>{

//         const {data} = await axios.get(`http://localhost:8080/house/owner/${localStorage.getItem("userId")}`)
//          setFlats(data)
//     },[])
//     console.log(flats,"Inside myflats")
//   return (
//     <div className="conatiner my-5">
//       <div className="row">
//         <div className="col-6">
//           <h3>Flats opened for booking</h3>
//           <div className="card mb-3 mx-2">
//             <div className="card-body">
//               <div className="container">
//               <div className="row">
//                     <div className="col-6 succes">
//                         <p>Number of rooms : <strong>5</strong><br />
//                            Area : <strong>650</strong><br />
//                            Locality : <strong>Bidhannagar</strong><br />
//                            City : <strong>Kolkata</strong><br />
//                            State : <strong>West Bengal</strong>
//                         </p>
//                         <h3>Rent : <strong>15000</strong></h3>
//                     </div>
//                     <div className="col-6">
//                         <img src={require("C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\UserId3houseid20pic5.jpg")} alt=""  height={200} width={200}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-3 mx-2">
//             <div className="card-body">
//               <div className="container">
//               <div className="row">
//                     <div className="col-6 succes">
//                         <p>Number of rooms : <strong>5</strong><br />
//                            Area : <strong>650</strong><br />
//                            Locality : <strong>Bidhannagar</strong><br />
//                            City : <strong>Kolkata</strong><br />
//                            State : <strong>West Bengal</strong>
//                         </p>
//                         <h3>Rent : <strong>15000</strong></h3>
//                     </div>
//                     <div className="col-6">
//                         <img src={require("C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\UserId3houseid20pic5.jpg")} alt=""  height={200} width={200}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-3 mx-2">
//             <div className="card-body">
//               <div className="container">
//               <div className="row">
//                     <div className="col-6 succes">
//                         <p>Number of rooms : <strong>5</strong><br />
//                            Area : <strong>650</strong><br />
//                            Locality : <strong>Bidhannagar</strong><br />
//                            City : <strong>Kolkata</strong><br />
//                            State : <strong>West Bengal</strong>
//                         </p>
//                         <h3>Rent : <strong>15000</strong></h3>
//                     </div>
//                     <div className="col-6">
//                         <img src={require("C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\UserId3houseid20pic5.jpg")} alt=""  height={200} width={200}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-6">
//           <h3>Flats Booked</h3>
//           <div className="card mb-3 mx-2">
//             <div className="card-body">
//               <div className="container">
//               <div className="row">
//                     <div className="col-6 succes">
//                         <p>Number of rooms : <strong>5</strong><br />
//                            Area : <strong>650</strong><br />
//                            Locality : <strong>Bidhannagar</strong><br />
//                            City : <strong>Kolkata</strong><br />
//                            State : <strong>West Bengal</strong>
//                         </p>
//                         <h3>Rent : <strong>15000</strong></h3>
//                     </div>
//                     <div className="col-6">
//                         <img src={require("C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\UserId3houseid43Screenshot (8).png")} alt=""  height={200} width={200}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-3 mx-2">
//             <div className="card-body">
//               <div className="container">
//               <div className="row">
//                     <div className="col-6 succes">
//                         <p>Number of rooms : <strong>5</strong><br />
//                            Area : <strong>650</strong><br />
//                            Locality : <strong>Bidhannagar</strong><br />
//                            City : <strong>Kolkata</strong><br />
//                            State : <strong>West Bengal</strong>
//                         </p>
//                         <h3>Rent : <strong>15000</strong></h3>
//                     </div>
//                     <div className="col-6">
//                         <img src={require("C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\UserId3houseid43Screenshot (8).png")} alt=""  height={200} width={200}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-3 mx-2">
//             <div className="card-body">
//               <div className="container">
//               <div className="row">
//                     <div className="col-6 succes">
//                         <p>Number of rooms : <strong>5</strong><br />
//                            Area : <strong>650</strong><br />
//                            Locality : <strong>Bidhannagar</strong><br />
//                            City : <strong>Kolkata</strong><br />
//                            State : <strong>West Bengal</strong>
//                         </p>
//                         <h3>Rent : <strong>15000</strong></h3>
//                     </div>
//                     <div className="col-6">
//                         <img src={require("C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\UserId3houseid43Screenshot (8).png")} alt=""  height={200} width={200}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // import React, { useState } from 'react'
// // import axios from 'axios';
// // import { useAuth } from './auth';

// // export default function Test() {
// //     const auth = useAuth()

// //     console.log(auth.myFlats)
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // const takeall=() =>{
// //     axios.get(`http://localhost:8080/house/owner/${localStorage.getItem("userId")}`)
// //           .then((response) => {
// //             console.log(response.data)
// //             set(response.data)
// //           }, (error) => {
// //             console.log(error)
// //             console.log("byeeee");
            
// //           });
// // }

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
  const indexOfLastFlat = currentPage*6
  const indexOfFirstFlat = indexOfLastFlat-6
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
        <Banner title="our flats">
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
      <Pagination flatsPerPage={6} totalFlat={flats.length} paginate={paginate}/>
    </div>
  );
}

