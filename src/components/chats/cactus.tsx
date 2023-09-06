import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "../../styles/cactus.scss";
import { useEffect, useRef, useState } from "react";
import Message from "../../helpers/messageClass";
interface CactusProps {}

class CactusMessage extends Message {
  constructor(event: any, listener: string) {
    super(event, listener);
  }

  inits() {
    return this.createMainContainer();
  }

  async createMainContainer() {
    let superMain = await super.createMainContainerElement();
    const mainContainer = document.createElement("div");
    mainContainer.innerText = "Cactus";

    mainContainer.classList.add("main-container");
    superMain.appendChild(mainContainer);

    return superMain;
  }
}
// widgets will receive id for the widget itself, comming from the button, comming from the card

const Cactus: React.FC<CactusProps> = () => {
  let prueba = new CactusMessage("message", "alpaca")
  const [clicked, setClicked] = useState(false);
  const idd = useParams();
  const handleClick = async () => {
    let prueba = new CactusMessage("message", "alpaca")
    let main = await prueba.inits();
    let container = document.querySelector(".widget");
    container?.appendChild(main);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Cactus</h1>
      </div>
      <div className="cactus-main-container">
        {/* <div className="container"></div> */}
        <div className="container2">
          <div className="emulatedMenu">
            <ul className="cactus-emulation-menu">
              <li onClick={handleClick}>Emulate Message</li>
              <li>Emulate Emulate Sub</li>
              <li>Emulate Follow</li>
              <li>Emulate Emulate Gift</li>
              <li>Emulate Cheer</li>
              <li>Emulate Tip</li>
            </ul>
          </div>
          <div className="cactus-widget"></div>
        </div>
      </div>
    </>
  );
};

export default Cactus;
