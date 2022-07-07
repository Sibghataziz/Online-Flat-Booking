import React, { useState,useEffect } from 'react'
import FlatDetail from './FlatDetail'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const FetchFlatDetail = ({showalert}) => {
    const [loading,setLoading] = useState(false)
    const [flat,setFlat] = useState({})

    const location = useLocation();
    const id_list = location.pathname.split("/");
    const id = id_list[id_list.length - 1];


    useEffect(()=>{
      const fetchFlat = async () =>{
        setLoading(true)
        const res = await axios.get(`http://localhost:8080/house/${id}`)
        setFlat(res.data)
        setLoading(false)
      }
  
      fetchFlat()
    },[])
    // console.log(flat)
  return (
    <FlatDetail flat={flat} loading={loading} showalert={showalert}/>
  )
}

export default FetchFlatDetail
