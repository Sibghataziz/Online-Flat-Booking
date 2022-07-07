import React, { useState } from "react";
import {  useNavigate,useLocation } from "react-router-dom";
import axios from 'axios'

export default function AddImage({showalert}) {
  const location = useLocation();
  const id_list = location.pathname.split("/");
  const id = id_list[id_list.length - 1];
  const navigate = useNavigate()
  // console.log(id)
  const [SelectedFile,setSelectedFile] = useState("")

  const checkFile = (event) =>{
    const file = event.target.files
    if(file.length===0){
      // console.log("Please add Image.")
      showalert("Please add Image.","danger")
    }
    else if(file.length>1){
      // console.log("Multiple images are selected please select only one image.")
      showalert("Multiple images are selected please select only one image.",'danger')
    }
    else if(file[0].type!=='image/jpeg' && file[0].type!=='image/png'){
      // console.log("please upload either jpeg or png file.")
      showalert("please upload either jpeg or png file.",'danger')
    }
    else{
      setSelectedFile(file[0])
    }
  }
  
  const insertImage = () =>{
    // console.log(SelectedFile)
    // console.log(id)
    const formdata = new FormData();
    formdata.append('file',SelectedFile)
    formdata.append('id',id)
    axios.post(`http://localhost:8080/house/${id}`,formdata)
          .then((response) => {
            // console.log(response,"success")
            showalert("Image Uploaded",'success')
            navigate("/addflat")
          }, (error) => {
            // console.log(error,"failed")
            // console.log("You are not allowed to add image.");
            showalert("You are not allowed to add image.",'danger')
          });
        }

  return (
    <div className="container my-5 w-25">
      <div className="d-flex justify-content-center">
        <div className="btn btn-mdb-color btn-rounded float-left">
          <h3>Choose file</h3>
          <input type="file" onChange={checkFile} />
        </div>
      </div>
      <div className="d-flex justify-content-end pt-3">
          <button type="button" className="btn btn-warning btn-lg ms-2" onClick={insertImage}>
            Submit Image
          </button>
        </div>
    </div>
  );
}

