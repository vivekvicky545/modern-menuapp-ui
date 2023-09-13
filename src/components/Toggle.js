import { useState } from "react";
import "../styles/CommonStyle.css";

export const Toggle = ({ toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
        className="react-switch-checkbox"
      />
    </div>
  );
};
