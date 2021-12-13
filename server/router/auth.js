const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {Authendicate} = require('../middleware/Authendicate');

require("../db/conn");

router.get("/", (req, res) => {
  res.send("hello world from router");
});

router.post("/register", (req, res) => {
  // console.log(req.body);
  // res.json({message:req.body});

  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please fill the form properly" });
  }

  User.findOne({ email: email })
  .then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.json({ error: "password isn't matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      user.save()
        .then(() => {
          res.json("registered successfully");
        })
        .catch((err) => {
          res.status(400).json("Error" + err);
        });
    }
  });
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(420).json({ error: "fill the details" });
    }
    const userLogin = await User.findOne({email});

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      // const token = userLogin.generateAuthToken();
      // console.log(token);

      // res.cookie("jwtoken",token,{
      //   expires:new Date(Date.now() + 25892000000),
      //   httpOnly:true
      // })
      if (isMatch) {
        res.json("signin successful ");
      } else {
        res.status(420).json("invalid password");
      }
    } else {
      res.status(420).json("invalid email");
    }
  } catch (err) {
    console.log(err);
  }
});

// abou us page

// router.get("/about",Authendicate , (req, res) => {
//   console.log(" middleware checked");
//   res.send(req.rootUser);
// });

module.exports = router;

