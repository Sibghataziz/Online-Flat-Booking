import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth({children}) {
    const location  = useLocation()

    // console.log(localStorage.getItem("userId"))
   
    if(!localStorage.getItem("userId")){
        return <Navigate to='/' state={{path: location.pathname}}/>
    }
  return children    
}
