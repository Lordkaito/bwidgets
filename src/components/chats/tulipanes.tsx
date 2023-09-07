import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/tulipanes.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface TulipanesProps {}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Tulipanes: React.FC<TulipanesProps> = () => {
  class TulipanesMessage extends MessageClass {
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
      superMain.classList.add("tulipanes-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("tulipanes-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("tulipanes-origami");
      origami.innerHTML = `
      <div class="tulipanes-container">
        <div class="tulipanes-circle">
          <svg class="tulipanes-circulo" viewBox="0 0 100 100">
            <circle class="tulipanes-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="tulipanes-role tulipanes-streamer" src="https://i.postimg.cc/T112f9BN/tulipanes.png"></div><div class="tulipanes-ori-dots"><div class="tulipanes-dot"></div><div class="tulipanes-dot"></div><div class="tulipanes-dot"></div></div><div class="tulipanes-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="tulipanes-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Tulipanes";
      mainContainer.classList.add("tulipanes-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="tulipanes-brillo">
      <div class="tulipanes-username-info-container">
        <div class="tulipanes-prons-text tulipanes-pronouns" style="display: flex;">
          <span class="tulipanes-prons tulipanes-prons-pink">he/him</span>
        </div>
        <div class="tulipanes-username-info">
          <span class="tulipanes-username-badges" style="display: none;">
            <img class="tulipanes-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="tulipanes-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="tulipanes-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="tulipanes-message-container tulipanes-pink">
          <div class="tulipanes-bigcontainer">
            <div class="tulipanes-dots-container">
              <div class="tulipanes-dots">
                <div class="tulipanes-dot"></div>
                <div class="tulipanes-dot"></div>
                <div class="tulipanes-dot"></div>
              </div>
            </div>
            <div class="tulipanes-circless">
              <svg class="tulipanes-circulo" viewBox="0 0 100 100">
                <circle class="tulipanes-circulo-animado tulipanes-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="tulipanes-message-icon-container">
            <div class="tulipanes-rendered-text tulipanes-text-color tulipanes-streamer-text">
              <p class="tulipanes-text">${
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
      eventContainer.classList.add("tulipanes-event-container");
      eventContainer.innerHTML = `
      <div class="tulipanes-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="tulipanes-moon">
        <div class="tulipanes-event-and-name-container">
          <p class="tulipanes-event-text">HI</p>
          <p class="tulipanes-event-name">${this.text}</p>
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
    let MessageEvent = new TulipanesMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".tulipanes-widget");
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
        <h1>Tulipanes</h1>
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
          <div className="tulipanes-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Tulipanes;
