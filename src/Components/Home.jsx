import React from 'react'
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';
const Home = () => {
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token);
    console.log(decoded)
    console.log(decoded.email)
  return (
    <>
    <Link to={'/login'}>Login</Link>
    <div>{
        decoded &&
        <>
        Emal : {decoded.email}
        Name : {decoded.name}
        
        <img src={decoded.picture} alt="feck" />
        </>
        }
        
        </div>
        </>
  )
}
export default Home