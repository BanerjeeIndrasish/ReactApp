import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const baseURL = 'http://localhost:3001';
export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpToken, setOtpToken] = useState({});
  const [popup, setPopup] = useState("");
  const [tokenVerification, setTokenVerification] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  
  const goToLogin = ()=>{
    navigate("/login");
  }

  const handleChange = (e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  const submitForm = (e)=>{
    e.preventDefault();
    console.log("Email Is "+email);
    axios.post(baseURL+"/request-otptoken", {email})
    .then(res =>{
        if(res.status===200){
            setServerResponse("User Found");
            setOtpToken(res.data.decodedToken);
            console.log("OTP IS "+res.data.decodedToken.otp);
        }
        else{
            setServerResponse("User Not Found");
            console.log("Failed otpToken Gen");
        }
    })
    .catch(err => console.log("Error Resolving Promise ",err.message));  
  }
  const handleOtpChange = (e)=>{
    e.preventDefault();
    setOTP(e.target.value);
  }
  const verifyOtpToken = ()=>{
    axios.post(baseURL+"/verify-otptoken", {otp, otpToken})
    .then(res => {
        if(res.status===200){
            setTokenVerification(true);
            console.log("Status 200 "+res.data.message);
            setPopup(res.data.message);
        }else{
            setTokenVerification(false);
            console.log("Status Other "+res.data.message);
            setPopup(res.data.message);
        }
    })
    .catch(err =>{
        setTokenVerification(false);
        setPopup("OTP Not Valid Request Again, "+err.message);
    })
  }

  const handleNewPassword = (e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }
  const changePassword = (e)=>{
    e.preventDefault();
    axios.post(baseURL+"/save-password", {email, password})
    .then(res => {
        console.log("Response "+res.data.message);
        setPopup(res.data.message);
    })  
    .catch(err => setPopup("Error Saving Password "+ err.message))
  }

  return (
    <>
        <form className="reset-password-container" onSubmit={submitForm}>
        <input name="email" type='text' placeholder='Enter Registered Email' onChange={handleChange}/>
        <br />
        <button>Submit</button>
        </form>

        {serverResponse==="User Found" ?
        <div className="otpToken">         
        <input type='text' onChange={handleOtpChange}/>
        <button onClick={verifyOtpToken}>Verify</button>
        </div>
        : ""}

        {tokenVerification && <div>
            <input type='text' placeholder='Enter New Password' onChange={handleNewPassword}/>   
            <button onClick={changePassword}>Save</button> 
        </div>}
        {popup==="" ? "" : popup}
        <button onClick={goToLogin}>GoTo Log In</button>
    </>
  )
}
