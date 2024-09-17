import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import {useNavigate} from "react-router-dom";


const baseURL = 'http://localhost:3001';

export default function Login({isAuthentic}) {
    const [values , setValues] = useState({
        name: "",
        password: "",
        email: ""       
    });
    const [title, setTitle] = useState("Sign Up");
    const [isSignIn, setIsSignIn] = useState(false);
    const [serverResponse, setServerResponse] = useState("");
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const toggleTitle = ()=>{
        setTitle(title === "Sign In" ? "Sign Up" : "Sign In");    
    }
    useEffect(()=>{
        emailRef.current.style.display = title==="Sign In" ? "none" : "block";
        setIsSignIn(title === "Sign In" ? true : false);
    }, [title])

    const handleChange = (e)=>{
        setValues({...values, [e.target.name] : [e.target.value]})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();  
        let routePath = title.split(" ").join("").toLowerCase();       
        axios.post(baseURL+"/"+routePath, values)
        .then(res => {
            if(title === "Sign In"){   // Changed To Title Check From Now
                if(res.status===200 && res.data.message === "User Found"){
                    console.log("Successful ", res.data.message);
                    setServerResponse(res.data.message);
                    localStorage.setItem("authToken", "true")
                    isAuthentic(true);
                }else{
                    console.log("Login Failed", res.data.message);
                    setServerResponse(res.data.message);
                }            
            }
            else{
                if(res.status === 200){
                    console.log("Account Registered Successfully...");
                    setServerResponse(res.data.message);
                    }
                else{
                    console.log("Can't Register, Please Try Again")
                }
            }                             
        })
        .catch(err => {
            console.log("Post Method Failed On Client", err.message);
            setServerResponse("Error!!! "+  err.message);
        })      
    }
    const resetPasswordPage = ()=>{
        
        navigate("/reset-password")
    }

    return (
        <div>
            <div className='login-container'>
                <div className="form-box">
                    <h1 className="title" >{title}</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="name">
                                <i className="fa-solid fa-user"></i> &nbsp;
                                <input type="text" placeholder="Username" name="name" onChange={handleChange}/>
                            </div>
                            <br />
                            
                            <div ref={emailRef} className="email">
                                <i className="fa-solid fa-at"></i> &nbsp;
                                <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
                            </div>
                            <br />
                            
                            <div className="password">
                                <i className="fa-solid fa-key"></i> &nbsp;
                                <input type="text" placeholder="Password" name="password" onChange={handleChange}/>
                            </div>
                            
                            <div className="btn-field" style={{marginTop: "30px"}}>
                                <button type="button-sign-up" className="signUpBtn">{title}</button> 
                                {isSignIn ? <p style={{cursor: "pointer"}} onClick={resetPasswordPage}>Forgot Password?</p> : ""}                                
                                <p onClick={toggleTitle} style={{cursor: "pointer"}}>{isSignIn ? "GoTo Sign Up" : "GoTo Sign In"}</p>
                                {serverResponse && <p style={{textAlign: "center"}}>{serverResponse}</p>}
                            </div>
                        </div>  
                                              
                    </form>
                </div>
            </div>
        </div>
    )
}
