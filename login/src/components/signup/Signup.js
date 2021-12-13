import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (key, event) => {
    setUser({ ...user, [key]: event.target.value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const data = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    // const data = await res.json();
    console.log(data);


    if (data.status === 422) {
      window.alert(" registration unsuccessful");

    } else {
      window.alert(" registration successful");

      history("/login");
    }
  };
  return (
    <div>
      <div class="af_form">
        <form method="POST">
          <div class="af_body">
            <div class="af_header">
              <h2 id="af_two">Signup</h2>
            </div>
            <div class="af_block">
              <label id="af_name" for="name">
                Name
              </label>
              <input
                autoComplete="off"
                id="af_name"
                type="text"
                for="name"
                value={user.name}
                onChange={(e) => handleInputs("name", e)}
              />
            </div>

            <div class="af_block">
              <label id="af_Mail" for="mail">
                Email
              </label>
              <input
                autoComplete="off"
                name="email"
                for="mail"
                typr="text"
                id="af_mail"
                value={user.email}
                onChange={(e) => handleInputs("email", e)}
              />
            </div>

            <div class="af_block">
              <label id="af_Num" for="num">
                Number
              </label>
              <input
                autoComplete="off"
                name="phone"
                for="num"
                type="number"
                id="af_num"
                value={user.phone}
                onChange={(e) => handleInputs("phone", e)}
              />
            </div>

            <div class="af_block">
              <label id="af_Age" for="age">
                Work
              </label>
              <input
                autoComplete="off"
                name="work"
                id="af_age"
                type="text"
                for="age"
                value={user.work}
                onChange={(e) => handleInputs("work", e)}
              />
            </div>

            <div class="af_block">
              <label id="af_Gen" for="gen">
                Password
              </label>
              <input
                autoComplete="off"
                name="password"
                for="gen"
                type="password"
                id="af_gen"
                value={user.password}
                onChange={(e) => handleInputs("password", e)}
              />
            </div>

            <div class="af_block">
              <label id="af_Gen" for="gen">
                Cpassword
              </label>
              <input
                autoComplete="off"
                name="cpassword"
                for="gen"
                type="password"
                id="af_gen"
                value={user.cpassword}
                onChange={(e) => handleInputs("cpassword", e)}
              />
            </div>
          </div>
          <input
            id="af_submit"
            onClick={PostData}
            type="submit"
            value="Register"
          />
          <p>
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// <!DOCTYPE html>
// <html>
//   <head>
//     <style>

//     </style>
//   </head>

//   <body>
//     <!-- <h1 id="one">Admit Hospital </h1> -->

//   </body>
// </html>
