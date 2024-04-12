import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Abc = () => {
    const navigate = useNavigate()
const clientId = "888088047039-tqvtiei4nt05q1avs3n1t1k48qf12v55.apps.googleusercontent.com";
const response = {
    name:"Adeel",
    college:"Govt",
    email:"email.com"
}
return (
<GoogleLogin
onSuccess={async(credentialResponse) => {
console.log("credentialResponse",credentialResponse);
const res =await axios.post("http://localhost:5000/google-auth",credentialResponse) 
console.log(res)
if (res.data) {
    console.log(res.data.token)
    localStorage.setItem("token",res.data.token)
navigate('/')
}
}}
onError={() => {
console.log("Login Failed");
}}
/>
);
};

export default Abc;
