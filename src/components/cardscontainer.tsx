import Cards from "./cards";
import "../styles/cardscontainer.scss";
import Button from "./button";
// import * as Components from "../imports";
import routesToChatComponents from "../routes";
interface CardsContainerProps {}

let cards = routesToChatComponents;
const CardsContainer: React.FC<CardsContainerProps> = () => {
  return (
    <div className="cards-container">
      <h1>Cards</h1>
      {/* we will make a loop over all cards here */}
      <div className="cards">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <Cards id={card.id} name={card.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
