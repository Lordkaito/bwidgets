import Cards from "./cards";
import "../styles/cardscontainer.scss";
import Button from "./button";
interface CardsContainerProps {}

let cards = [{id: "1"}, {id: "2"}, {id: "3"}, {id: "4"}];
const CardsContainer: React.FC<CardsContainerProps> = () => {
  return (
    <div className="cards-container">
      <h1>Cards</h1>
      {/* we will make a loop over all cards here */}
      <div className="cards">
        {cards.map((card) => {
          return (
            <>
              <Cards id={card.id} />
              <Button id={card.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
