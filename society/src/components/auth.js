
import React from "react";
import { createContext, useState, useContext } from "react";
// import axios from 'axios';

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    // const [myFlats,setMyFlats] = useState(null)
    // const [allFlats,setAllFlats] = useState(null)

    const loginUser = (user) => {
        setUser(user)
        localStorage.setItem("userId",user.userId)
    }

    const logoutUser = () =>{
        setUser(null)
        localStorage.removeItem("userId")
        localStorage.removeItem("Role")
        // console.log(localStorage.getItem("userId"))
    }

    // const getMyFlats = () => {
    //     axios.get(`http://localhost:8080/house/owner/${localStorage.getItem("userId")}`)
    //           .then((response) => {
    //             console.log(response.data)
    //             setMyFlats(response.data)
    //           }, (error) => {
    //             console.log(error)
    //             console.log("byeeee");
    //           });
    // }

    // const getAllFlats = () => {
    //     axios.get(`http://localhost:8080/house`)
    //     .then((response) => {
    //       console.log(response.data)
    //       setAllFlats(response.data)
    //     }, (error) => {
    //       console.log(error)
    //       console.log("byeeee");
    //     });
    // }



    return(
        <AuthContext.Provider value={{ user, loginUser, logoutUser }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

// import React from "react";
// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext(null)

// export const AuthProvider = ({children}) =>{
//     const [user, setUser] = useState(null)

//     const loginUser = (user) => {
//         setUser(user)
//     }

//     const logoutUser = () =>{
//         setUser(null)
//     }

//     return(
//         <AuthContext.Provider value={{ user, loginUser, logoutUser }} >
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => {
//     return useContext(AuthContext)
// }

// const useAuthUser = () => {

//     const loginUser = (data) => {
//         localStorage.setItem("userId",data.userId)
//     }
//     const logoutUser = () => {
//         localStorage.removeItem("userId")
//     }

//     return{
//         loginUser,
//         logoutUser
//     }
// }

