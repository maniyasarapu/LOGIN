import React, {useState} from 'react'
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../navbar/Navbar';

const Login = () => {
  const history = useNavigate();
  
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInputs = (key, event) => {
    setUser({ ...user, [key]: event.target.value });
  };

  const checkData = async (e) => {
    e.preventDefault();

    const {  email, password } = user;

    const data = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    // const data = await res.json();

    if (data.status === 420) {
      window.alert("Invalid details");
    } else {
      window.alert(" login successful");
      history("/home");

    }
  };
   
    return (
      
      <div>
      
      <div class="login_form">
        <form method ="POST">
          <div class="login_body">
            <div class="login_header">
              <h2 id="login_two">Login</h2>
            </div>

      
            <div class="login_block">
              <label id="login_Mail" for="mail">
                Email
              </label>
              <input value={user.email} onChange={(e) => handleInputs("email" , e )} autoComplete="off" for="mail" type="text" id="login_mail" />
            </div>

           
            <div class="login_block">
              <label id="login_Gen" for="gen">
                Password
              </label>
              <input value={user.password} onChange={(e) => handleInputs("password" , e )} autoComplete="off" for="gen" type="text" id="login_gen" />
            </div>

          
          </div>
         <div class="login_links">
        <div>
        <input id="login_submit" onClick={checkData} type="submit" value="Login" />  
        </div>

        <div id="login_signup">
        <p>
          <Link to="/signup">Signup</Link>
      </p> 
        </div>
         </div>
        </form>
      </div>
    </div>
    )
}

export default Login
