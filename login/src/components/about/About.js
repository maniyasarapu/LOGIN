import React, {useEffect} from "react";
import './About.css'
import mani from '../images/mani.JPG'
import {useNavigate} from "react-router-dom";
import Navbar from "../navbar/Navbar";
const About = () => {

const history = useNavigate();
    
const callAboutPage = async () =>
{
  try{
const res = await fetch('./about',{
  method:"GET",
  headers:{
     Accept:"application/json",
     "Content_Type":"application/json"
    },
    credentials:"include"
});
 
    const data = await  res.json();
    console.log(data);


    if(res.status !==200)
    {
      const error = new Error(res.error);
      throw error;
    }
 
  }catch(err){
    console.log(err);
    history('/login');

  }
}

useEffect(() => {
  callAboutPage();
}, [])

  return (
    <>
    <Navbar/>
      <div className="ab_main">
        <div className="ab_blocks">
          <div className="ab_img">
        <img src={mani} alt="mani"/>
          </div>
          <div className="ab_profile">
              <h1>
                  MANIKANTA
              </h1>
              <p>WEB DEVLOPER</p>
              <div className="ab_activity">
           <a href="https://www.instagram.com/p/CV70KMLqq-a/?utm_medium=copy_link">instagram</a>
          </div>
          </div>
         
          <div className="ab_edit">
              <input type="submit" placeholder="edit" />
              <div className="ab_work_details">
            <div >
                <p>user:</p>
                <p>name:</p>
                <p>email:</p>
                <p>phone:</p>
            </div>
            <div>
                <p>48391</p>
                <p>Manikanta</p>
                <p>mani@gmail.com</p>
                <p>8392910284</p>

            </div>
          </div>
        </div>
        <div className="ab_blocks">
          
         
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
