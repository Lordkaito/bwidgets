import Navbar from "../navbar";
import { useParams } from "react-router-dom";
import "../../styles/rainbow.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface RainbowProps {
  hasEvents: boolean;
  eventsToEmulate: string[] | never[];
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Rainbow: React.FC<RainbowProps> = (hasEvents) => {
  class RainbowMessage extends MessageClass {
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
      superMain.classList.add("rainbow-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("rainbow-container-to-render");
      let origami = document.createElement("div");
      origami.classList.add("rainbow-origami");
      origami.innerHTML = `
      <div class="rainbow-container">
        <div class="rainbow-circle">
          <svg class="rainbow-circulo" viewBox="0 0 100 100">
            <circle class="rainbow-circulo-animado" cx="50" cy="50" r="45"></circle>
          </svg>
          <img class="rainbow-role rainbow-streamer" src="https://i.postimg.cc/T112f9BN/alpaca.png"></div><div class="rainbow-ori-dots"><div class="rainbow-dot"></div><div class="rainbow-dot"></div><div class="rainbow-dot"></div></div><div class="rainbow-ori-container"><img src="https://i.postimg.cc/bN28gsPn/luni.png" class="rainbow-luna">
        </div>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Rainbow";
      mainContainer.classList.add("rainbow-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/W12nD9TL/arco-iris-4.png" class="rainbow-flower">
      <div class="rainbow-username-info-container">
        <span class="rainbow-role-container">
          <svg class="rainbow-role" style="height: 36px;">
            <!--?xml version="1.0" encoding="utf-8"?-->
            <svg width="40px" height="40px" viewBox="0 0 22 28" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path stroke="white" stroke-width="3" fill="#fb6183" d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"></path>
              </g>
            </svg>
          </svg>
        </span>
        <div class="rainbow-username-info">
          <span class="rainbow-username-badges">
            <img class="rainbow-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="rainbow-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="rainbow-capitalize-user" style="color: rgb(251, 97, 131);">Lordkaitdo_</span>
        </div>
      </div>
      <div class="rainbow-message-container">
        <div class="rainbow-message-icon-container">
          <div class="rainbow-rendered-text vip-text">
            <p class="rainbow-text">${
              customMessage == "" ? selectRandomMessage() : customMessage
            }</p>
          </div>
        </div>
      </div>
      <div class="rainbow-pronouns" style="opacity: 0;">
        <span class="rainbow-prons" style="color: rgb(251, 97, 131);"></span>
      </div>
      `;
      superMain.appendChild(mainContainer);

      return superMain;
    }

    async createEventContainer() {
      let eventContainer = await super.createMainEvent();
      eventContainer.classList.add("rainbow-event-container");
      eventContainer.innerHTML = `
      <div class="rainbow-fungi-container">
        <img src="https://i.postimg.cc/N0QcQDH8/lunnube.png" class="rainbow-moon">
        <div class="rainbow-event-and-name-container">
          <p class="rainbow-event-text">HI</p>
          <p class="rainbow-event-name">${this.text}</p>
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
    let MessageEvent = new RainbowMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".rainbow-widget");
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
        <h1>Rainbow</h1>
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
          <div className="rainbow-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Rainbow;
