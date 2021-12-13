import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="con_main">
      <div className="con_blocks">
        <div className="con_items">Phone</div>
        <div className="con_items">Email</div>
        <div className="con_items">Address</div>
      </div>
      <form className="con_msg">
        <h1>Get In Touch </h1>
        <div className="con_msg_blocks">
          <input
            type="text"
            id="con_msg_name"
            className="con_msg_input"
            placeholder="Your name"
            requied="true"
          />
          <input
            type="email"
            id="con_msg_email"
            className="con_msg_input"
            placeholder="Your email"
            requied="true"
          />
          <input
            type="number"
            id="con_msg_number"
            className="con_msg_input"
            placeholder="Your number"
            requied="true"
          />
        </div>
        <div className="con_msg_text">
      <textarea id="con_msg_textbox" rows="10" cols="30"></textarea>
        </div>
        <input id="con_msg_submit" type="submit" value="Submit" />

      </form>
    </div>
  );
};

export default Contact;
