import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/girasoles.scss";
import { useEffect, useRef, useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { nicknames, session, events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface GirasolesProps {
  hasEvents: boolean;
  eventsToEmulate?: string[] | never[];
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Girasoles: React.FC<GirasolesProps> = ({
  hasEvents,
  eventsToEmulate,
}) => {
  class GirasolesMessage extends MessageClass {
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
      <img src="https://i.postimg.cc/vTyvwLZ6/mariii.png" class="girasoles-flower">
      <div class="girasoles-username-info-container">
        <span class="girasoles-role-container">
          <img class="girasoles-role" src="https://i.postimg.cc/NG847Vd8/girasolll.png">
        </span>
        <div class="girasoles-username-info" style="background-color: rgb(106, 75, 53);">
          <span class="girasoles-username-badges" style="display: none;">
            <img class="girasoles-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
            <img class="girasoles-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
          </span>
          <span class="girasoles-capitalize-user" style="color: rgb(255, 255, 255);">Lordkaito_</span>
        </div>
        <div class="girasoles-pronouns" style="display: block;">
          <span class="girasoles-prons" style="color: rgb(255, 255, 255); background-color: rgb(106, 75, 53);">he/him</span>
        </div>
      </div>
      <div class="girasoles-message-container">
        <div class="girasoles-message-icon-container">
          <div class="girasoles-rendered-text streamer-text">
            <p class="girasoles-text">${
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
      eventContainer.classList.add("girasoles-event-container");
      eventContainer.innerHTML = `
      <div class="girasoles-fungi-container">
        <div class="girasoles-event-leafs-container-1">
          <img src="https://i.postimg.cc/Wz7wNFdY/hojii.png" class="girasoles-fungi">
        </div>
        <div class="girasoles-event-leafs-container-2">
          <img src="https://i.postimg.cc/Wz7wNFdY/hojii.png" class="girasoles-fungi">
        </div>
        <p class="girasoles-event-name">Archwayco just followed!</p>
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
    let MessageEvent = new GirasolesMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".girasoles-widget");
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

  const renderEvents = () => {
    let dictionary: Record<string, any> = {
      subscriber: events.subscriber,
      follow: events.follower,
      message: events.message,
      cheer: events.cheer,
      raid: events.raid,
      host: events.host,
    };
    return eventsToEmulate?.map((event: string) => (
      <li
        className="emulation-button"
        onClick={() => handleClick(dictionary[event])}
      >
        Emulate {event}
      </li>
    ));
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
              {hasEvents ? (
                <>
                  {renderEvents()}
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
          </div>
          <div className="girasoles-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Girasoles;
