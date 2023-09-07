import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/mario.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface AlpacaProps {}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Mario: React.FC<AlpacaProps> = () => {
  class AlpacaMessage extends MessageClass {
    constructor(event: any, listener: string, custom: string) {
      super(event, listener);
    }

    inits() {
      if (this.listener === "message") {
        return this.createMainContainer();
      } else {
        return this.createEventContainer();
      }
    }

    async createMainContainer() {
      // let event = this.event;
      // let listener = this.listener;
      let superMain = await super.createMainContainerElement();
      superMain.classList.add("mario-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("mario-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("mario-origami");
      origami.innerHTML = `
      <div class="mario-container">
        <div class="mario-circle">
          <svg class="mario-circulo" viewBox="0 0 100 100">
            <circle class="mario-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="mario-role mario-streamer" src="https://i.postimg.cc/T112f9BN/mario.png"></div><div class="mario-ori-dots"><div class="mario-dot"></div><div class="mario-dot"></div><div class="mario-dot"></div></div><div class="mario-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="mario-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Mario";
      mainContainer.classList.add("mario-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="mario-brillo">
      <div class="mario-username-info-container">
        <div class="mario-prons-text mario-pronouns" style="display: flex;">
          <span class="mario-prons mario-prons-pink">he/him</span>
        </div>
        <div class="mario-username-info">
          <span class="mario-username-badges" style="display: none;">
            <img class="mario-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="mario-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="mario-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="mario-message-container mario-pink">
          <div class="mario-bigcontainer">
            <div class="mario-dots-container">
              <div class="mario-dots">
                <div class="mario-dot"></div>
                <div class="mario-dot"></div>
                <div class="mario-dot"></div>
              </div>
            </div>
            <div class="mario-circless">
              <svg class="mario-circulo" viewBox="0 0 100 100">
                <circle class="mario-circulo-animado mario-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="mario-message-icon-container">
            <div class="mario-rendered-text mario-text-color mario-streamer-text">
              <p class="mario-text">${
                customMessage == "" ? selectRandomMessage() : customMessage
              }</p>
            </div>
          </div>
      </div>
      `;
      superMain.appendChild(origami);
      superMain.appendChild(mainContainer);

      return superMain;
    }

    async createEventContainer() {
      let eventContainer = await super.createMainEvent();
      eventContainer.classList.add("mario-event-container");
      eventContainer.innerHTML = `
      <div class="mario-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="mario-moon">
        <div class="mario-event-and-name-container">
          <p class="mario-event-text">HI</p>
          <p class="mario-event-name">${this.text}</p>
        </div>
      </div>`;
      return eventContainer;
    }
  }
  let [customMessage, setCustomMessage] = useState("");
  let [currentRandomMessage, setCurrentRandomMessage] = useState(0);

  const selectRandomMessage = () => {
    setCurrentRandomMessage(currentRandomMessage + 1);
    if (randomMessages[currentRandomMessage] === undefined) {
      setCurrentRandomMessage(0);
      return;
    }
    return randomMessages[currentRandomMessage]?.message;
  };

  const handleClick = async (event: any) => {
    let MessageEvent = new AlpacaMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".mario-widget");
    container?.appendChild(main);
    main.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      handleClick(events.message);
      e.target.value = "";
    }
  };

  return (
    <>
      <Navbar />

      <div>
        <h1>Mario</h1>
      </div>
      <div className="main-container">
        {/* <div className="container"></div> */}
        <div className="container">
          <div className="emulatedMenu">
            <ul className="emulation-menu">
              <li
                className="emulation-button"
                onClick={() => handleClick(events.subscriber)}
              >
                Emulate Emulate Sub
              </li>
              <li
                className="emulation-button"
                onClick={() => handleClick(events.follower)}
              >
                Emulate Follow
              </li>
              <li
                className="emulation-button"
                onClick={() => handleClick(events.cheer)}
              >
                Emulate Cheer
              </li>
              <li
                className="emulation-button"
                onClick={() => handleClick(events.tip)}
              >
                Emulate Tip
              </li>
              <li
                className="emulation-button"
                onClick={() => handleClick(events.message)}
              >
                Emulate Message
              </li>
            </ul>
            <input
              onChange={(e) => setCustomMessage(e.target.value)}
              onKeyUp={handleKeyUp}
              type="text"
              placeholder="Type a message"
            />
          </div>
          <div className="mario-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Mario;
