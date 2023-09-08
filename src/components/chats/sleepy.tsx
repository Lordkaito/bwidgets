import Navbar from "../navbar";
import { useParams } from "react-router-dom";
// import "../../styles/rainbow.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface SleepyProps {
  hasEvents: {}
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Sleepy: React.FC<SleepyProps> = (hasEvents) => {
  class SleepyMessage extends MessageClass {
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
      superMain.classList.add("alpaca-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("alpaca-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("alpaca-origami");
      origami.innerHTML = `
      <div class="alpaca-container">
        <div class="alpaca-circle">
          <svg class="alpaca-circulo" viewBox="0 0 100 100">
            <circle class="alpaca-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="alpaca-role alpaca-streamer" src="https://i.postimg.cc/T112f9BN/alpaca.png"></div><div class="alpaca-ori-dots"><div class="alpaca-dot"></div><div class="alpaca-dot"></div><div class="alpaca-dot"></div></div><div class="alpaca-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="alpaca-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Sleepy";
      mainContainer.classList.add("alpaca-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/rpT8Kcvr/bribri.png" class="alpaca-brillo">
      <div class="alpaca-username-info-container">
        <div class="alpaca-prons-text alpaca-pronouns" style="display: flex;">
          <span class="alpaca-prons alpaca-prons-pink">he/him</span>
        </div>
        <div class="alpaca-username-info">
          <span class="alpaca-username-badges" style="display: none;">
            <img class="alpaca-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="alpaca-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="alpaca-capitalize-user">Lordkaito_</span>
        </div>
      </div>
      <div class="alpaca-message-container alpaca-pink">
          <div class="alpaca-bigcontainer">
            <div class="alpaca-dots-container">
              <div class="alpaca-dots">
                <div class="alpaca-dot"></div>
                <div class="alpaca-dot"></div>
                <div class="alpaca-dot"></div>
              </div>
            </div>
            <div class="alpaca-circless">
              <svg class="alpaca-circulo" viewBox="0 0 100 100">
                <circle class="alpaca-circulo-animado alpaca-yellow" cx="50" cy="50" r="20">
                </circle>
              </svg>
              <img src="https://i.postimg.cc/431XcqgF/corachikito.png">
            </div>
          </div>
          <div class="alpaca-message-icon-container">
            <div class="alpaca-rendered-text alpaca-text-color alpaca-streamer-text">
              <p class="alpaca-text">${
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
      eventContainer.classList.add("alpaca-event-container");
      eventContainer.innerHTML = `
      <div class="alpaca-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="alpaca-moon">
        <div class="alpaca-event-and-name-container">
          <p class="alpaca-event-text">HI</p>
          <p class="alpaca-event-name">${this.text}</p>
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
    let MessageEvent = new SleepyMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".alpaca-widget");
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
        <h1>Sleepy</h1>
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
          <div className="alpaca-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Sleepy;
