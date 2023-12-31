import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/tulipanes.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface TulipanesProps {
  hasEvents: boolean;
  eventsToEmulate: string[] | never[];
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Tulipanes: React.FC<TulipanesProps> = ({
  hasEvents,
  eventsToEmulate,
}) => {
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
      mainContainer.innerText = "tulipanes";
      mainContainer.classList.add("tulipanes-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/vTyvwLZ6/mariii.png" class="tulipanes-flower">
      <div class="tulipanes-username-info-container">
        <span class="tulipanes-role-container">
          <img class="tulipanes-role" src="https://i.postimg.cc/ZnBqPXDz/tulipan-viewer.png">
        </span>
        <div class="tulipanes-username-info";">
          <span class="tulipanes-username-badges" style="display: none;">
            <img class="tulipanes-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="tulipanes-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="tulipanes-capitalize-user" style="color: rgb(255, 255, 255);">Lordkaito_</span>
        </div>
        <div class="tulipanes-pronouns" style="display: block;">
          <span class="tulipanes-prons" style="color: rgb(255, 255, 255); background-color: rgb(106, 75, 53);">he/him</span>
        </div>
      </div>
      <div class="tulipanes-message-container">
        <div class="tulipanes-message-icon-container">
          <div class="tulipanes-rendered-text streamer-text">
            <p class="tulipanes-text">${
              customMessage == "" ? selectRandomMessage() : customMessage
            }</p>
          </div>
        </div>
      </div>
      `;
      // superMain.appendChild(origami);
      superMain.appendChild(mainContainer);

      return superMain;
    }

    async createEventContainer() {
      let eventContainer = await super.createMainEvent();
      eventContainer.classList.add("tulipanes-event-container");
      eventContainer.innerHTML = `
      <div class="tulipanes-fungi-container">
        <div class="tulipanes-event-leafs-container-1">
          <img src="https://i.postimg.cc/Wz7wNFdY/hojii.png" class="tulipanes-fungi">
        </div>
        <div class="tulipanes-event-leafs-container-2">
          <img src="https://i.postimg.cc/Wz7wNFdY/hojii.png" class="tulipanes-fungi">
        </div>
        <p class="tulipanes-event-name">Archwayco just followed!</p>
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
    setCustomMessage("");
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
              {hasEvents ? (
                <>
                  <li
                    className="emulation-button"
                    onClick={() => handleClick(events.subscriber)}
                  >
                    Emulate Sub
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
                </>
              ) : (
                <li
                  className="emulation-button"
                  onClick={() => handleClick(events.message)}
                >
                  Emulate Message
                </li>
              )}
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
