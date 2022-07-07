import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const FlatItem = ({ Flats, showalert }) => {
  // console.log(Flats)
  // const address = "C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\"
  const navigate = useNavigate()

  const sellFlat = (id) => {
      const formdata = new FormData();
      formdata.append("id", id);
      axios.post(`http://localhost:8080/house/sold/${id}`, formdata).then(
        (response) => {
          // console.log(response,'success')
          showalert(response.data, "success");
        },
        (error) => {
          // console.log(error,'error')
          showalert("Flat Already Sold", "warning");
        }
      );
  };
  const revertFlat = (id) => {
      const formdata = new FormData();
      axios.post(`http://localhost:8080/house/booking/${id}`,{
        'houseId': id,
        'buyerFirstName':null,
        'buyerLastName':null,
        'buyerEmail':null,
        'buyerPhone':null,
        'status': 'Available'
      }).then(
        (response) => {
          // console.log(response,'success')
          showalert("Flat Restored", "success");
          navigate("/home")
        },
        (error) => {
          // console.log(error,'error')
          showalert("Something Went Wrong", "warning");
        }
      );
  };
  return (
    <div >
      {Flats.map((flat) => (
        <li
          key={flat.houseId}
          className="list-group-item" 
          to={`/rooms/${flat.houseId} `}
        >
          
          <div className="card mx-2"  >
            <div className="card-body">
              <div className="container" >
                <div className="row" >
                  <div className="col-6 succes" >
                    <p style={{marginBottom:50}}>
                      Number of rooms : <strong>{flat.noOfRooms}</strong>
                      <br />
                      Area : <strong>{flat.area}</strong>
                      <br />
                      Locality : <strong>{flat.locality}</strong>
                      <br />
                      City : <strong>{flat.city}</strong>
                      <br />
                      State : <strong>{flat.state}</strong>
                    
                    <h3 >
                      Selling Price : <strong>{flat.rent}</strong>
                    </h3>
                    </p>
                    {flat.status !== "Available" ? (
                      <div>
                        <p>
                          Buyer's Name :{" "}
                          <strong>
                            {flat.buyerFirstName} {flat.buyerLastName}
                          </strong>
                          <br />
                          Buyer's Email : <strong>{flat.buyerEmail}</strong>
                          <br />
                          Buyer's Phone Number :{flat.buyerphone}
                          <strong>{flat.buyerPhone}</strong>
                        </p>
                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg ms-2"
                            onClick={()=>{revertFlat(flat.houseId)}}
                         style={{backgroundColor:"brown",color:"white",}} >
                           &nbsp; &nbsp;   <b>Revert Flat</b> &nbsp; &nbsp;
                          </button>
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            className="btn btn-success btn-lg ms-2"
                            onClick={()=>{sellFlat(flat.houseId)}}
                          ><b>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SOLD &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          </b>
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="col-6">
                    {/* <img
                      src={require(`${address}${flat.image_url?flat.image_url:"default.jpg"}`)}
                      alt=""
                      height={200}
                      width={200}
                    /> */}
                    <img
                      src={
                        "https://m.lemontreehotels.com/CMSWebParts/MobileWebParts/showpropertyGalleryimage.ashx?Hid=491"
                      }
                      alt=""
                      height={150}
                      width={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};
export default FlatItem;
