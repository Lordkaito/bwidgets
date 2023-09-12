import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/margaritas.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface MargaritasProps {
  hasEvents: boolean;
  eventsToEmulate: string[] | never[];
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Margaritas: React.FC<MargaritasProps> = ({
  hasEvents,
  eventsToEmulate,
}) => {
  class MargaritaMessage extends MessageClass {
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
      mainContainer.innerText = "margaritas";
      mainContainer.classList.add("margaritas-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/vTyvwLZ6/mariii.png" class="margaritas-flower">
      <div class="margaritas-username-info-container">
        <span class="margaritas-role-container">
          <img class="margaritas-role" src="https://i.postimg.cc/NfgM14YK/margaritaaa.png">
        </span>
        <div class="margaritas-username-info";">
          <span class="margaritas-username-badges" style="display: none;">
            <img class="margaritas-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="margaritas-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="margaritas-capitalize-user" style="color: rgb(255, 255, 255);">Lordkaito_</span>
        </div>
        <div class="margaritas-pronouns" style="display: block;">
          <span class="margaritas-prons" style="color: rgb(255, 255, 255); background-color: rgb(106, 75, 53);">he/him</span>
        </div>
      </div>
      <div class="margaritas-message-container">
        <div class="margaritas-message-icon-container">
          <div class="margaritas-rendered-text streamer-text">
            <p class="margaritas-text">${
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
      eventContainer.classList.add("margaritas-event-container");
      eventContainer.innerHTML = `
      <div class="margaritas-fungi-container">
        <div class="margaritas-event-leafs-container-1">
          <img src="https://i.postimg.cc/Wz7wNFdY/hojii.png" class="margaritas-fungi">
        </div>
        <div class="margaritas-event-leafs-container-2">
          <img src="https://i.postimg.cc/Wz7wNFdY/hojii.png" class="margaritas-fungi">
        </div>
        <p class="margaritas-event-name">Archwayco just followed!</p>
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
    let MessageEvent = new MargaritaMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".margaritas-widget");
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
        <h1>Margaritas</h1>
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
          <div className="margaritas-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Margaritas;
