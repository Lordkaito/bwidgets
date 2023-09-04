import { Link } from "react-router-dom";
import "../styles/button.scss"
import WidgetsPage from "../pages/Widgets";
interface ButtonProps {
  id: string;
}

const Button: React.FC<ButtonProps> = ({id}) => {
  console.log('button id', id)
  return <Link className="button" to={`/widget/${id}`} />;
}

export default Button;