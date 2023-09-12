import Navbar from "../navbar";
import { useParams } from "react-router-dom";
import "../../styles/sleepy.scss";
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

const Sleepy: React.FC<RainbowProps> = ({ hasEvents, eventsToEmulate }) => {
  class SleepyProps extends MessageClass {
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
      let lines = document.createElement("div");
      lines.classList.add("rainbow-lines");
      lines.innerHTML = `
      <div id="sleepy-lines">
        <div id="sleepy-big-line" style="height: 81px;"></div>
        <div id="sleepy-small-line"></div>
        <svg id="sleepy-little-paw">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-moon-filled" width="24" height="24" viewBox="0 0   24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="#ffeab7"></path>
          </svg>
        </svg>
      </div>
      `;
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Sleepy";
      mainContainer.classList.add("rainbow-main-container");
      mainContainer.innerHTML = `
      <div class="sleepy-username-info-container">
        <div class="sleepy-username-info">
          <span class="sleepy-username-badges" style="display: none;">
            <img class="sleepy-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="sleepy-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="sleepy-capitalize-user" style="color: rgb(88, 62, 32);">Lordkaitdo_</span>
        </div>
        <div class="sleepy-pronouns" style="display: none;">
          <span class="sleepy-prons" style="color: rgb(88, 62, 32);"></span>
        </div>
      </div>
      <div class="sleepy-message-container">
        <div class="sleepy-user-info-thingy"></div>
        <div class="sleepy-message-icon-container">
          <div class="sleepy-icon">
            <img class="sleepy-message-icon" src="https://i.postimg.cc/k4rng8tT/nueva-huellita.png">
          </div>
          <div class="sleepy-rendered-text">
            <p class="sleepy-text" style="color: rgb(88, 62, 32);">holaaa</p>
          </div>
        </div>
      </div>
      <div class="sleepy-bar"></div>
      <span class="sleepy-decoration"></span>
      `;
      superMain.appendChild(mainContainer);

      return superMain;
    }

    async createEventContainer() {
      let eventContainer = await super.createMainEvent();
      eventContainer.classList.add("sleepy-event-container");
      eventContainer.innerHTML = `
      <div class="sleepy-paws-container">
        <div class="sleepy-left-paw-container">
          <svg class="sleepy-left-paw" style="filter: drop-shadow(rgb(221, 183, 138) 0px 0px 5px);">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-cloud-filled" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" stroke-width="0" fill="white"></path>
            </svg>
          </svg>
        </div>
        <p class="sleepy-follow-name" style="text-shadow: rgb(221, 183, 138) 0px 0px 0.2em, rgb(221, 183, 138) 0px 0px 0.2em;">Fulanito just followed!</p>
        <div class="sleepy-right-paw-container">
          <svg class="sleepy-right-paw" style="filter: drop-shadow(rgb(221, 183, 138) 0px 0px 5px);">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-cloud-filled" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" stroke-width="0" fill="white"></path>
            </svg>
          </svg>
        </div>
      </div>
      `;
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
    let MessageEvent = new SleepyProps(
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
        <h1>Sleepy</h1>
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

export default Sleepy;
