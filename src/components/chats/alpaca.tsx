import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/alpaca.scss";
import EmulatedMenu from "../emulatedMenu";
import { useEffect, useRef, useState } from "react";
import Message from "../../helpers/messageClass";
interface AlpacaProps {}

class AlpacaMessage extends Message {
  constructor(event: any, listener: string) {
    super(event, listener);
  }

  inits() {
    return this.createMainContainer();
  }

  async createMainContainer() {
    let superMain = await super.createMainContainerElement();
    const mainContainer = document.createElement("div");
    mainContainer.innerText = "Alpaca";

    mainContainer.classList.add("main-container");
    superMain.appendChild(mainContainer);

    return superMain;
  }
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Alpaca: React.FC<AlpacaProps> = () => {
  let prueba = new AlpacaMessage("message", "alpaca")
  const [clicked, setClicked] = useState(false);
  const idd = useParams();
  const handleClick = async () => {
    let prueba = new AlpacaMessage("message", "alpaca")
    let main = await prueba.inits();
    let container = document.querySelector(".widget");
    container?.appendChild(main);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Alpaca</h1>
      </div>
      <div className="main-container">
        {/* <div className="container"></div> */}
        <div className="container2">
          <div className="emulatedMenu">
            <ul className="emulation-menu">
              <li onClick={handleClick}>Emulate Message</li>
              <li>Emulate Emulate Sub</li>
              <li>Emulate Follow</li>
              <li>Emulate Emulate Gift</li>
              <li>Emulate Cheer</li>
              <li>Emulate Tip</li>
            </ul>
          </div>
          <div className="widget"></div>
        </div>
      </div>
    </>
  );
};

export default Alpaca;
