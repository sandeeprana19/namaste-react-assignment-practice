import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="box-border z-50 bg-white w-full py-0 px-5 fixed top-0 left-0 shadow-lg">
      <div className="w-[75rem] mx-auto">
        <div className="justify-between items-center flex">
          <div className="flex items-center justify-center w-20 h-20 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={LOGO_URL}
              alt="Yammy eats logo"
            />
          </div>

          <ul className="flex items-center gap-[3.75rem] h-[6.25rem] list-none">
            <li>
              <Link
                to="/"
                className="text-black flex items-center h-full text-base font-medium no-underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black flex items-center h-full text-base font-medium no-underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black flex items-center h-full text-base font-medium no-underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="text-black flex items-center h-full text-base font-medium no-underline"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-black flex items-center h-full text-base font-medium no-underline"
              >
                Cart - ({cartItems.length} items)
              </Link>
            </li>
            <li>
              <span
                to="#"
                className="text-black flex items-center h-full text-base font-medium no-underline"
              >
                {loggedInUser}
              </span>
            </li>
            <li>
              <button
                className="text-white cursor-pointer bg-[#eb2039] border-none rounded-[1.875rem] w-[6.875rem] h-[2.8125rem] py-[0.625rem] px-5 text-base font-medium"
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
