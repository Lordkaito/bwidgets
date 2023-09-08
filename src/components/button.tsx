import { Link } from "react-router-dom";
import "../styles/button.scss";
import WidgetsPage from "../pages/Widgets";
interface ButtonProps {
  id?: number;
  text: string;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ id, text, url }) => {
  if(url) {
    return (
      <a target="_blank" className="button" href={url}>{text}</a>
    )
  } else {
    return (
      <Link className="button" to={`/widget/${id}`}>
        {text}
      </Link>
    );
  }
};

export default Button;
