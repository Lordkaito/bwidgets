import Navbar from "../components/navbar";
import "../styles/button.scss";
import chats from "../chats";
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
        </div>
      </div>
    </>
  );
};

// import React, { useState } from 'react';
// import Componente1 from './Componente1';
// import Componente2 from './Componente2';
// import Componente3 from './Componente3';

// const App = () => {
//   const [mostrarComponente, setMostrarComponente] = useState(null);

//   const cambiarComponente = (componente) => {
//     setMostrarComponente(componente);
//   };

//   return (
//     <div>
//       <button onClick={() => cambiarComponente(<Componente1 />)}>Mostrar Componente 1</button>
//       <button onClick={() => cambiarComponente(<Componente2 />)}>Mostrar Componente 2</button>
//       <button onClick={() => cambiarComponente(<Componente3 />)}>Mostrar Componente 3</button>

//       {mostrarComponente}
//     </div>
//   );
// }

// export default App;


export default WidgetsPage;
