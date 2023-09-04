import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.scss";
import WidgetsPage from "./pages/Widgets";

interface AppProps {
  id?: string;
}

const App: React.FC<AppProps> = ({id}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/widget/:id" element={<WidgetsPage id=""/>} />
      </Routes>
    </Router>
  );
};

export default App;
