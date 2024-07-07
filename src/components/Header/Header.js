import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");

  return (
    <header>
      <div className="main-wrapper">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <img className="logo" src={LOGO_URL} alt="Yammy eats logo" />
          </div>

          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-a">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-a">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-a">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-a">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="login"
                onClick={() => {
                  loginBtnText === "Login"
                    ? setLoginBtnText("Logout")
                    : setLoginBtnText("Login");
                }}
              >
                {loginBtnText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
