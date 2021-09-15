import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileCode, faFileCode } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Backend Developer</h3>
              <p>Technologies that I use on the servers side:</p>
              <p>PHP-OOP-MySQL-Laravel Framework-Node.js</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGlobe} size="2x" /></div>

              <h3>Frontend Developer</h3>
              <p>Technologies that I use on the user side:</p>
              <p>HTML5-CSS5-SASS-JQuery-JavaScript-ReactJs-Vue.Js-AngularJS-</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>eCommerce Dev </h3>
              <p>Bug Fixes-Full Website Creation-Backup,Cloning & Migration-Customization</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web Programming & Dev</h3>
              <p>Custom Website-Landing Page-Web Application-Consultation</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
