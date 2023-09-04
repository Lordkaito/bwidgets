import "../styles/cards.scss";
import Button from "./button";
interface CardProps {
  id: string;
}

const Cards: React.FC<CardProps> = ({id}) => {
  return (
    <div className="card">
      {/* <img src={image} alt={title} /> */}
      <div className="card-body">
        {/* <h2>{title}</h2> */}
        {/* <p>{description}</p> */}
        {/* <a href={link}>Read more</a> */}
        individual card
      </div>
      {/* this is the button to show the individual widget */}
      {/* <Button /> */}
    </div>
  );
};

export default Cards;
