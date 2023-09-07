import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/girasoles.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface AlpacaProps {
  hasEvents: {};
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Girasoles: React.FC<AlpacaProps> = (hasEvents) => {
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
      superMain.classList.add("girasoles-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("girasoles-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("girasoles-origami");
      origami.innerHTML = `
      <div class="girasoles-container">
        <div class="girasoles-circle">
          <svg class="girasoles-circulo" viewBox="0 0 100 100">
            <circle class="girasoles-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="girasoles-role girasoles-streamer" src="https://i.postimg.cc/T112f9BN/girasoles.png"></div><div class="girasoles-ori-dots"><div class="girasoles-dot"></div><div class="girasoles-dot"></div><div class="girasoles-dot"></div></div><div class="girasoles-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="girasoles-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Girasoles";
      mainContainer.classList.add("girasoles-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="girasoles-brillo">
      <div class="girasoles-username-info-container">
        <div class="girasoles-prons-text girasoles-pronouns" style="display: flex;">
          <span class="girasoles-prons girasoles-prons-pink">he/him</span>
        </div>
        <div class="girasoles-username-info">
          <span class="girasoles-username-badges" style="display: none;">
            <img class="girasoles-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="girasoles-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="girasoles-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="girasoles-message-container girasoles-pink">
          <div class="girasoles-bigcontainer">
            <div class="girasoles-dots-container">
              <div class="girasoles-dots">
                <div class="girasoles-dot"></div>
                <div class="girasoles-dot"></div>
                <div class="girasoles-dot"></div>
              </div>
            </div>
            <div class="girasoles-circless">
              <svg class="girasoles-circulo" viewBox="0 0 100 100">
                <circle class="girasoles-circulo-animado girasoles-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="girasoles-message-icon-container">
            <div class="girasoles-rendered-text girasoles-text-color girasoles-streamer-text">
              <p class="girasoles-text">${
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
      eventContainer.classList.add("girasoles-event-container");
      eventContainer.innerHTML = `
      <div class="girasoles-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="girasoles-moon">
        <div class="girasoles-event-and-name-container">
          <p class="girasoles-event-text">HI</p>
          <p class="girasoles-event-name">${this.text}</p>
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
    let container = document.querySelector(".girasoles-widget");
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
        <h1>Girasoles</h1>
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
          <div className="girasoles-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Girasoles;
