import Navbar from "../../components/navbar";
import "../../styles/customizable.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface AlpacaProps {
  hasEvents: boolean;
  eventsToEmulate: {};
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Customizable: React.FC<AlpacaProps> = ({
  hasEvents,
  eventsToEmulate,
}) => {
  class CustomizableMessage extends MessageClass {
    constructor(event: any, listener: string, custom: string) {
      super(event, listener);
    }

    inits() {
      return this.createMainContainer();
    }

    async createMainContainer() {
      // let event = this.event;
      // let listener = this.listener;
      let superMain = await super.createMainContainerElement();
      superMain.classList.add("customizable-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("customizable-container-to-render");
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Customizable";
      mainContainer.classList.add("customizable-main-container");
      mainContainer.innerHTML = `
      <div class="customizable-circle" style="background-color: black;">
      </div>
      <div class="customizable-message-container">
        <div class="customizable-message-icon-container">
          <div class="customizable-rendered-text streamer-text">
            <p class="customizable-text" style="color: rgb(0, 0, 255);">${
              customMessage == "" ? selectRandomMessage() : customMessage
            }</p>
          </div>
        </div>
      </div>
      <div class="customizable-pronouns" style="opacity: 1;">
        <span class="customizable-prons" style="color: rgb(251, 97, 131);">he/him</span>
      </div>
      `;
      let usernameInfo = document.createElement("div");
      usernameInfo.innerHTML = `
      <div class="customizable-username-info" style="background: linear-gradient(90deg, blue 0%, red 100%);">
        <span class="customizable-username-badges">
          <img class="customizable-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
          <img class="customizable-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
        </span>
        <span class="customizable-capitalize-user" style="color: rgb(204, 204, 204);">Lordkaito_</span>
      </div>`;
      superMain.appendChild(mainContainer);
      superMain.appendChild(usernameInfo);

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

  const handleBackgroundColor = (e: any) => {
    let main = document.querySelectorAll(".customizable-widget");
    main.forEach((element) => {
      element.setAttribute("style", `background-color: ${e.target.value}`);
    });
  };

  const handleMainContainerColor = (e: any) => {
    let main = document.querySelectorAll(".customizable-main-container");
    main.forEach((element) => {
      element.setAttribute("style", `background-color: ${e.target.value}`);
    });
  };

  const handleTextColor = (e: any) => {
    let main = document.querySelectorAll(".customizable-text");
    main.forEach((element) => {
      element.setAttribute("style", `color: ${e.target.value}`);
    });
  };

  const handleUsernameColor = (e: any) => {
    let main = document.querySelectorAll(".customizable-capitalize-user");
    main.forEach((element) => {
      element.setAttribute("style", `color: ${e.target.value}`);
    });
  };

  const handleUsernameContainerColor = (e: any) => {
    let main = document.querySelectorAll(".customizable-username-info");
    main.forEach((element) => {
      element.setAttribute("style", `background: ${e.target.value}`);
    });
  };

  const handleThingyColor = (e: any) => {
    let main = document.querySelectorAll(".customizable-circle");
    main.forEach((element) => {
      element.setAttribute("style", `background-color: ${e.target.value}`);
    });
  };

  const selectRandomMessage = () => {
    setCurrentRandomMessage(currentRandomMessage + 1);
    if (randomMessages[currentRandomMessage] === undefined) {
      setCurrentRandomMessage(0);
      return;
    }
    return randomMessages[currentRandomMessage]?.message;
  };

  const handleClick = async (event: any) => {
    let MessageEvent = new CustomizableMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".customizable-widget");
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
        <h1>Customizable</h1>
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
                  <li
                    className="emulation-button"
                    onClick={() => handleClick(events.message)}
                  >
                    Emulate Message
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
            <input type="color" onChange={handleBackgroundColor} />
            <input type="color" onChange={handleMainContainerColor} />
            <input type="color" onChange={handleTextColor} />
            <input type="color" onChange={handleUsernameColor} />
            <input type="color" onChange={handleUsernameContainerColor} />
            <input type="color" onChange={handleThingyColor} />
          </div>
          <div className="customizable-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Customizable;
