import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import routesToChatComponents from "./routes";

interface AppProps {
  id?: string;
}
const App: React.FC<AppProps> = ({ id }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {routesToChatComponents.map((item, index): any => {
          return (
            <Route
              key={index}
              path={`/widget/${item.id}`}
              element={<item.component hasEvents={item.hasEvents.status} eventsToEmulate={item.hasEvents} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
