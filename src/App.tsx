import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import WidgetsPage from "./pages/Widgets";
import * as Components from "./imports";

interface AppProps {
  id?: string;
}

let routesWithComponents = [
  { id: 1, component: Components.Alpaca },
  { id: 2, component: Components.Cactus },
  { id: 3, component: Components.Cereza },
];

const App: React.FC<AppProps> = ({ id }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Components.HomePage />} />
        {routesWithComponents.map((item, index): any => {
          return (
            <Route
              key={index}
              path={`/widget/${item.id}`}
              element={<item.component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
