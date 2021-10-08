import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('')
  const [phonenumber, setPhone] = useState('')
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [data, setData] = useState(null);
  const register = () => {
    console.log(name, email);
    axios.post('http://localhost:8000/register',{
    name, email, phonenumber, password
    })
    
  };
  const login = () => {
    axios.post("http://localhost:8000/login",{
      email, password
    }).then(res=>{
      console.log(res.data);
    })
  };
  
  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="phonenumber"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
  
        <input type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div>
        
      
      
      </div>
    </div>
  );
}

export default App;
