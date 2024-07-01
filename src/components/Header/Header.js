import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

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
              <a href="#" className="nav-a">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-a">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-a">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-a">
                Cart
              </a>
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
