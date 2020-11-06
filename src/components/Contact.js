import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact({ name, img, status }) {
  return (
    <div className="Contact">
      <img className="avatar" alt="avatar" src={img} />
      <div>
        <h3 className="name">{name}</h3>
        <br />
        <div className="status">
          <i className={status ? "status-online" : "status-offline"} />
          <span className="status-text">{status ? "online" : "offline"}</span>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired
};

export default Contact;
