// import React, { useEffect, useState } from 'react'
// // import { useAuth } from './auth'
// import axios from 'axios'



// const MyFlats= () => {
//     // const Flats = GetMyFlats(auth)
//     const [flats, setFlats]  = useState()
//     // console.log(localStorage.getItem("userId"),"localstorageId")
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
//         </div>
//         <div className="col-6">
//             <h3>Flats Booked</h3>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default MyFlats;



// import React from 'react'
// import { useAuth } from './auth'

// export default function MyFlats() {
//   const auth = useAuth()
//   console.log(auth.MyFlats)
//   return (
//     <div>
      
//     </div>
//   )
// }




// export default function MyFlats() {
//     const auth = useAuth()
//     // const Flats = GetMyFlats(auth)
//     const Flats = axios.get(`http://localhost:8080/house/owner/${auth.user.userId}`)
//     console.log(Flats,"Inside myflats")
//   return (
//     <div className="conatiner my-5">
//       <div className="row">
//         <div className="col-6">
//           <h3>Flats opened for booking</h3>
//         </div>
//         <div className="col-6">
//             <h3>Flats Booked</h3>
//         </div>
//       </div>
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonalFlats from './PersonalFlats';

export default function MyFlats({showalert}) {

  const [flats,setFlats] = useState([])
  const [loading,setLoading] = useState(false)


  useEffect(()=>{
    const fetchFlats = async () =>{
      setLoading(true)
      const res = await axios.get(`http://localhost:8080/house/owner/${localStorage.getItem("userId")}`)
      setFlats(res.data)
      setLoading(false)
    }

    fetchFlats()
  },[])
  // console.log(flats)

  return (
    <div className="conatiner my-5">
       <div className="row">
         <div className="col-6">
           <h3 style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,textAlign:'center'}}>Flats Opened For Booking</h3>
           <PersonalFlats flats={flats} loading={loading} status={'Available'} showalert={showalert}/>
         </div>
         <div className="col-6">
             <h3 style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,textAlign:'center'}}>Flats Booked</h3>
             <PersonalFlats flats={flats} loading={loading} status={'Booked'} showalert={showalert}/>
         </div>
       </div>
     </div>
  )
}

