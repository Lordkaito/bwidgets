import { Link } from "react-router-dom";
import "../styles/button.scss";
import WidgetsPage from "../pages/Widgets";
interface ButtonProps {
  id: number;
}

const Button: React.FC<ButtonProps> = ({ id }) => {
  return (
    <Link className="button" to={`/widget/${id}`}>
      See widget
    </Link>
  );
};

export default Button;
