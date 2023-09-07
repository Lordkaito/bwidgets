import "../styles/cards.scss";
import Button from "./button";
interface CardProps {
  id: number;
  name: string;
}

const Cards: React.FC<CardProps> = ({ id, name }) => {
  return (
    <div className="ind-card">
      <div className="card-body">{name}</div>
      <Button id={id}/>

    </div>
  );
};

export default Cards;
