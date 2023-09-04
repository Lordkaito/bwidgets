import Navbar from "../components/navbar";
import "../styles/button.scss";
import chats from "../chats";
import Main from "../components/main";
import "../styles/widgets.scss";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
interface WidgetsPageProps {
  id: string;
}

// widgets will receive id for the widget itself, comming from the button, comming from the card

const WidgetsPage: React.FC<WidgetsPageProps> = ({ id }) => {
  const idd = useParams();
  console.log(idd);
  return (
    <>
      <Navbar />
      {/* <div className="container"></div> */}
      <div>
        <h1>Widgets</h1>
      </div>
      <div className="container2">
        <div className="widget">
          <Main />
        </div>
      </div>
    </>
  );
};

export default WidgetsPage;
