import React from "react";
import Gitscores from "../images/Gitscores.png";
import LinxChat from "../images/LinxChat.png";
import PythonGame from "../images/PythonGame.png";
import website from "../images/website.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Gitscores
  const openPopupboxGitscores = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Gitscores} alt="Gitscores " />
        <b/>
        <p></p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://gitscores.herokuapp.com/")}>https://gitscores.herokuapp.com/</a>
        <br/>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Natain/gitscores")}>https://github.com/Natain/gitscores</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigGitscores = {
    titleBar: {
      enable: true,
      text: "Gitscores clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxLinxChat = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={LinxChat} alt="City Guide App Project..." />
        <p></p>

        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Natain/LinxChat", "_blank")}>https://github.com/Natain/LinxChat</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigLinxChat = {
    titleBar: {
      enable: true,
      text: " "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={PythonGame} alt="Portfolio Project..." />
        <p></p>

        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Natain/Racing-Cars-Python", "_blank")}>https://github.com/Natain/Racing-Cars-Python</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPythonGame = {
    titleBar: {
      enable: true,
      text: " "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxwebsite = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={website} alt="Task Manager React and Redux Project..." />
        <p></p>

        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Natain/website-portfolio", "_blank")}>https://github.com/Natain/website-portfolio</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigwebsite = {
    titleBar: {
      enable: true,
      text: " "
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxGitscores}>
            <img className="portfolio-image" src={Gitscores} alt="Gitscores " />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxLinxChat}>
            <img className="portfolio-image" src={LinxChat} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={PythonGame} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxwebsite}>
            <img className="portfolio-image" src={website} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigGitscores} />
      <PopupboxContainer {...popupboxConfigLinxChat} />
      <PopupboxContainer {...popupboxConfigPythonGame} />
      <PopupboxContainer {...popupboxConfigwebsite} />
    </div>
  )
}

export default Pofrfolio;
