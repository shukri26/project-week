import React, { useState } from "react";
import { Link } from "react-router-dom"

function Login(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function Done(){
    alert(`Welcome ${name}`);
    console.log(email);
    console.log(password);

  }
  return(
      <div className="form-container">
          <h1>LOGIN PAGE</h1>
          <div className="form-wrapper height">
            <h3 className="header">Sign in</h3>
            <input className="form-input" type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <br />
            <input className="form-input" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <br />
            <input className="form-input" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <br />
            <Link to={"/"}><button className="form-btn" onClick={Done}>Sign in</button></Link> 
          </div>
      </div>
  )
}

export default Login;