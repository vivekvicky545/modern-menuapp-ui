import { Link } from "react-router-dom";
import "../styles/CommonStyle.css";

import loginIcon from "../assets/login_icon.svg";

function InitialPage() {
  return (
    <div className="container">
      <Link to="/login" className="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon licon"
        >
          <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
        </svg>
        <p>Login</p>
      </Link>
      <Link to="/register" className="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon cicon"
        >
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
        </svg>
        Create Account
      </Link>
    </div>
  );
}

export default InitialPage;
