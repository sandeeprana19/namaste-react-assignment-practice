import React from "react";
import ReactDOM from "react-dom/client";
import ReactLogo from "./react.png";
import User from "./user.png";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={ReactLogo} alt="React logo" />
      </div>
      <input type="search" className="search" />
      <div className="user">
        <img src={User} alt="User" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
