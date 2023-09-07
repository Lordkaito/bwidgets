import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/margaritas.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface AlpacaProps {}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Margaritas: React.FC<AlpacaProps> = () => {
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
      superMain.classList.add("margaritas-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("margaritas-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("margaritas-origami");
      origami.innerHTML = `
      <div class="margaritas-container">
        <div class="margaritas-circle">
          <svg class="margaritas-circulo" viewBox="0 0 100 100">
            <circle class="margaritas-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="margaritas-role margaritas-streamer" src="https://i.postimg.cc/T112f9BN/margaritas.png"></div><div class="margaritas-ori-dots"><div class="margaritas-dot"></div><div class="margaritas-dot"></div><div class="margaritas-dot"></div></div><div class="margaritas-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="margaritas-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Margaritas";
      mainContainer.classList.add("margaritas-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="margaritas-brillo">
      <div class="margaritas-username-info-container">
        <div class="margaritas-prons-text margaritas-pronouns" style="display: flex;">
          <span class="margaritas-prons margaritas-prons-pink">he/him</span>
        </div>
        <div class="margaritas-username-info">
          <span class="margaritas-username-badges" style="display: none;">
            <img class="margaritas-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="margaritas-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="margaritas-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="margaritas-message-container margaritas-pink">
          <div class="margaritas-bigcontainer">
            <div class="margaritas-dots-container">
              <div class="margaritas-dots">
                <div class="margaritas-dot"></div>
                <div class="margaritas-dot"></div>
                <div class="margaritas-dot"></div>
              </div>
            </div>
            <div class="margaritas-circless">
              <svg class="margaritas-circulo" viewBox="0 0 100 100">
                <circle class="margaritas-circulo-animado margaritas-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="margaritas-message-icon-container">
            <div class="margaritas-rendered-text margaritas-text-color margaritas-streamer-text">
              <p class="margaritas-text">${
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
      eventContainer.classList.add("margaritas-event-container");
      eventContainer.innerHTML = `
      <div class="margaritas-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="margaritas-moon">
        <div class="margaritas-event-and-name-container">
          <p class="margaritas-event-text">HI</p>
          <p class="margaritas-event-name">${this.text}</p>
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
    let container = document.querySelector(".margaritas-widget");
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
        <h1>Margaritas</h1>
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
          <div className="margaritas-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Margaritas;
