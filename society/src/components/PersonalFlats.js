import React, { useState } from "react";
import FlatItem from "./FlatItem";
import Loading from "./Loading";
import Pagination from "./Pagination";

const PersonalFlats = ({ flats, loading, status, showalert }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (loading) {
    return <Loading />;
  }
  const takeFlats = () => {
    const curr = [];
    for (let i = 0; i < flats.length; i++) {
      if (flats[i].status === status) {
        curr.push(flats[i]);
      }
    }
    return curr;
  };

  const currFlats = takeFlats();

  const indexOfLastFlat = currentPage * 3;
  const indexOfFirstFlat = indexOfLastFlat - 3;
  const flatsRendering = currFlats.slice(indexOfFirstFlat, indexOfLastFlat);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul className="list-group mb-4">
        <FlatItem Flats={flatsRendering} showalert={showalert} />
      </ul>
      <Pagination
        flatsPerPage={3}
        totalFlat={currFlats.length}
        paginate={paginate}
      />
    </>
  );
};

export default PersonalFlats;
