import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/customizable.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface AlpacaProps {}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Customizable: React.FC<AlpacaProps> = () => {
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
      superMain.classList.add("customizable-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("customizable-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("customizable-origami");
      origami.innerHTML = `
      <div class="customizable-container">
        <div class="customizable-circle">
          <svg class="customizable-circulo" viewBox="0 0 100 100">
            <circle class="customizable-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="customizable-role customizable-streamer" src="https://i.postimg.cc/T112f9BN/customizable.png"></div><div class="customizable-ori-dots"><div class="customizable-dot"></div><div class="customizable-dot"></div><div class="customizable-dot"></div></div><div class="customizable-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="customizable-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Customizable";
      mainContainer.classList.add("customizable-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="customizable-brillo">
      <div class="customizable-username-info-container">
        <div class="customizable-prons-text customizable-pronouns" style="display: flex;">
          <span class="customizable-prons customizable-prons-pink">he/him</span>
        </div>
        <div class="customizable-username-info">
          <span class="customizable-username-badges" style="display: none;">
            <img class="customizable-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="customizable-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="customizable-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="customizable-message-container customizable-pink">
          <div class="customizable-bigcontainer">
            <div class="customizable-dots-container">
              <div class="customizable-dots">
                <div class="customizable-dot"></div>
                <div class="customizable-dot"></div>
                <div class="customizable-dot"></div>
              </div>
            </div>
            <div class="customizable-circless">
              <svg class="customizable-circulo" viewBox="0 0 100 100">
                <circle class="customizable-circulo-animado customizable-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="customizable-message-icon-container">
            <div class="customizable-rendered-text customizable-text-color customizable-streamer-text">
              <p class="customizable-text">${
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
      eventContainer.classList.add("customizable-event-container");
      eventContainer.innerHTML = `
      <div class="customizable-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="customizable-moon">
        <div class="customizable-event-and-name-container">
          <p class="customizable-event-text">HI</p>
          <p class="customizable-event-name">${this.text}</p>
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
    let container = document.querySelector(".customizable-widget");
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
        <h1>Customizable</h1>
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
          <div className="customizable-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Customizable;
