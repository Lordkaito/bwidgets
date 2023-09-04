import { useEffect } from "react";
import "../../src/chats/alpaca/widget.css";
import chats from "../chats";
import { useParams } from "react-router-dom";
interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const { id } = useParams();
  const handleClick = () => {
    let main = document.getElementById("main");
    console.log(main)
    let newComp = document.createElement("div");
    newComp.innerHTML = chats.ids[1].html;
    main?.appendChild(newComp);
  };
  return (
    <>
      <div>
        <div>
          <ul>
            <li style={{cursor: "pointer"}} onClick={() => handleClick()}>Emulate one</li>
            <li>Emulate all</li>
          </ul>
        </div>
      </div>
      <main id="main">Main adsfdsf {id}</main>
    </>
  );
};

export default Main;
