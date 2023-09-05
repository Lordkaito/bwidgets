import "../styles/emulatedMenu.scss";
import { Dispatch, SetStateAction } from "react";
interface EmulatedMenuProps {
  state: Dispatch<SetStateAction<boolean>>;
}

const EmulatedMenu: React.FC<EmulatedMenuProps> = ({ state }) => {
  const handleClick = () => {
    state(true);
  };
  return (
    <div className="emulatedMenu">
      <ul className="emulation-menu">
        <li onClick={handleClick}>Emulate Message</li>
        <li>Emulate Emulate Sub</li>
        <li>Emulate Follow</li>
        <li>Emulate Emulate Gift</li>
        <li>Emulate Cheer</li>
        <li>Emulate Tip</li>
      </ul>
    </div>
  );
};

export default EmulatedMenu;
