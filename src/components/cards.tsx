import "../styles/cards.scss";
import Button from "./button";
import { useRef } from "react";
interface CardProps {
  id: number;
  name: string;
  image?: string | null;
  url?: string;
}

const Cards: React.FC<CardProps> = ({ id, name, image, url }) => {
  return (
    <div className="ind-card">
      <div
        className="card-body"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-footer">
        <p>{name}</p>
        <Button id={id} text="See Widget"/>
        <Button url={url} text="Buy Widget"/>
      </div>
    </div>
  );
};

export default Cards;
