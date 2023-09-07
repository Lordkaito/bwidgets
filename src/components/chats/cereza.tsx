import Navbar from "../../components/navbar";
import "../../styles/cereza.scss";
import { useState } from "react";
import MessageClass from "../../helpers/messageClass";
import { events } from "../libs/simulation";
import randomMessages from "../../helpers/randomMessages";
import React from "react";
interface CerezaProps {
  hasEvents: boolean;
  eventsToEmulate: {};
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Cereza: React.FC<CerezaProps> = ({ hasEvents, eventsToEmulate }) => {
  // console.log(hasEvents.hasEvents.status);
  class CerezaMessage extends MessageClass {
    constructor(event: any, listener: string, custom: string) {
      super(event, listener);
    }

    inits() {
      return this.createMainContainer();
    }

    async createMainContainer() {
      let superMain = await super.createMainContainerElement();
      superMain.classList.add("cereza-super-main-container");
      let containerToRender = document.createElement("div");
      containerToRender.classList.add("cereza-container-to-render");
      const mainContainer = document.createElement("div");
      mainContainer.innerText = "Cereza";
      mainContainer.classList.add("cereza-main-container");
      mainContainer.innerHTML = `
      <img src="https://i.postimg.cc/HLDDxVzS/cereza.png" class="cereza-flower">
      <div class="cereza-username-info-container">
        <span class="cereza-role-container">
          <svg class="cereza-role">
            <!--?xml version='1.0' encoding='UTF-8'?-->
            <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>camcorder_fill</title>
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Media" transform="translate(-48.000000, -48.000000)" fill-rule="nonzero">
              <g id="camcorder_fill" transform="translate(48.000000, 48.000000)">
              <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">
              </path>
              <path stroke="white" stroke-width="3" d="M4,4 C2.89543,4 2,4.89543 2,6 L2,18 C2,19.1046 2.89543,20 4,20 L16,20 C17.1046,20 18,19.1046 18,18 L18,15.7905 L20.0944,17.0807 C20.9272,17.5938 22,16.9946 22,16.0165 L22,7.98353 C22,7.00536 20.9272,6.40622 20.0944,6.91926 L18,8.20945 L18,6 C18,4.89543 17.1046,4 16,4 L4,4 Z" id="路径" fill="#f94865">
              </path>
              </g>
              </g>
              </g>
            </svg>
          </svg>
        </span>
        <div class="cereza-username-info">
        <span class="cereza-username-badges">
          <img class="cereza-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3">
          <img class="cereza-badges-img" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3">
        </span>
        <span class="cereza-capitalize-user" style="color: rgb(249, 72, 101);">Lordkaito_</span>
      </div>
    </div>
    <div class="cereza-message-container">
      <div class="cereza-message-icon-container">
        <div class="cereza-rendered-text cereza-streamer-text">
          <p class="cereza-text">${
            customMessage == "" ? selectRandomMessage() : customMessage
          }</p>
        </div>
      </div>
    </div>
    <div class="cereza-pronouns" style="opacity: 1;">
      <span class="cereza-prons" style="color: rgb(251, 97, 131);">he/him</span>
    </div>
      `;
      superMain.appendChild(mainContainer);

      return superMain;
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

  const handleBackgroundColor = (e: any) => {
    let main = document.querySelector(".cereza-widget");
    main?.setAttribute("style", `background-color: ${e.target.value}`);
  };

  const handleClick = async (event: any) => {
    let MessageEvent = new CerezaMessage(
      event.event,
      event.listener,
      customMessage
    );
    let main = await MessageEvent.inits();
    let container = document.querySelector(".cereza-widget");
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
        <h1>Cereza</h1>
      </div>
      <div className="main-container">
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
            <input
              type="color"
              name="Background color"
              onChange={handleBackgroundColor}
            />
          </div>
          <div className="cereza-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Cereza;
