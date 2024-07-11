import { Component } from "react";
import UserClass from "../UserClass/UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    // console.log("Parent render");

    return (
      <div className="body">
        <div className="main-wrapper">
          <div className="about">
            <h1>About Page</h1>

            <UserClass name="First" />
            <UserClass name="Second" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
