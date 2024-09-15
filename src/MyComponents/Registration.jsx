import React from 'react'

export default function Registration() {
  return (
    <div>
            <div className="form-box">
                <h1 className="title" style={{marginTop: "20px"}}>Sign Up</h1>
                <br />
                <form>
                    <div className="input-group">
                        <div className="name">
                            <i className="fa-solid fa-user"></i> &nbsp;
                            <input type="name" placeholder="Username" />
                        </div>
                        <br />
                        
                        <div className="email">
                            <i className="fa-solid fa-at"></i> &nbsp;
                            <input type="email" placeholder="Email" />
                        </div>
                        <br />
                        
                        <div className="password">
                            <i className="fa-solid fa-key"></i> &nbsp;
                            <input type="password" placeholder="Password" />
                        </div>
                        <br />
                        
                        <p>Password Suggestions <a href="#">Click Here</a></p>
                        <br />
                        
                        <div className="btn-field" style={{marginBottom: "30px"}}>
                            <button type="button-sign-in" className="disable signInBtn">Sign in</button> &nbsp;
                            <button type="button-sign-up" className="signUpBtn">Sign up</button> 
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
  )
}
