import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/cereza.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface CerezaProps {}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Cereza: React.FC<CerezaProps> = () => {
  class CerezaMessage extends MessageClass {
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
      superMain.classList.add("cereza-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("cereza-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("cereza-origami");
      origami.innerHTML = `
      <div class="cereza-container">
        <div class="cereza-circle">
          <svg class="cereza-circulo" viewBox="0 0 100 100">
            <circle class="cereza-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="cereza-role cereza-streamer" src="https://i.postimg.cc/T112f9BN/cereza.png"></div><div class="cereza-ori-dots"><div class="cereza-dot"></div><div class="cereza-dot"></div><div class="cereza-dot"></div></div><div class="cereza-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="cereza-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Cereza";
      mainContainer.classList.add("cereza-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="cereza-brillo">
      <div class="cereza-username-info-container">
        <div class="cereza-prons-text cereza-pronouns" style="display: flex;">
          <span class="cereza-prons cereza-prons-pink">he/him</span>
        </div>
        <div class="cereza-username-info">
          <span class="cereza-username-badges" style="display: none;">
            <img class="cereza-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="cereza-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="cereza-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="cereza-message-container cereza-pink">
          <div class="cereza-bigcontainer">
            <div class="cereza-dots-container">
              <div class="cereza-dots">
                <div class="cereza-dot"></div>
                <div class="cereza-dot"></div>
                <div class="cereza-dot"></div>
              </div>
            </div>
            <div class="cereza-circless">
              <svg class="cereza-circulo" viewBox="0 0 100 100">
                <circle class="cereza-circulo-animado cereza-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="cereza-message-icon-container">
            <div class="cereza-rendered-text cereza-text-color cereza-streamer-text">
              <p class="cereza-text">${
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
      eventContainer.classList.add("cereza-event-container");
      eventContainer.innerHTML = `
      <div class="cereza-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="cereza-moon">
        <div class="cereza-event-and-name-container">
          <p class="cereza-event-text">HI</p>
          <p class="cereza-event-name">${this.text}</p>
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
    let MessageEvent = new CerezaMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".cereza-widget");
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
        <h1>Cereza</h1>
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
          <div className="cereza-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Cereza;
