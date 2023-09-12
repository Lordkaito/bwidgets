import Navbar from "../components/navbar";
import Button from "../components/button";
import { useState } from "react";
import CardsContainer from "../components/cardscontainer";
import "../styles/homepage.scss";
// import React from "react";
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [isLoading, setisLoading] = useState(true);
  const showSpinner = () => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      {isLoading ? showSpinner() : <CardsContainer />}
    </>
  );
};

export default HomePage;
