import { LOGO_URL } from "../../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
