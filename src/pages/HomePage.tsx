import Navbar from "../components/navbar";
import Button from "../components/button";
import CardsContainer from "../components/cardscontainer";
// import React from "react";
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Navbar />
      <CardsContainer />
    </>
  );
};

export default HomePage;
