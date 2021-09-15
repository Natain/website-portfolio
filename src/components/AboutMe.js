import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>Hi, </p>
          <p>My name is Bogdan</p>
          <p>I  have been developing web apps for almost one year now, I am a Full Stack Developer, I made the courses at Ilbah Workshops, I am certified in Back-end & Front-end.</p>
          <p>Technologies I use (MySQL,  Php-OOP,  Laravel Framework,  ReactJs,  NodeJs, AngularJs, Git) </p>
          <p>I'm still in the process of learning more about the technologies that I use to create my projects.</p>

        </div>
      </div>
    </div>
  )
}

export default AboutMe
