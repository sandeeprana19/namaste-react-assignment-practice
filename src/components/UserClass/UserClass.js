import { Component } from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");
    const data = await fetch("https://api.github.com/users/sandeeprana19");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log(this.props.name + "Child componentDidUpdate");
  }

  render() {
    // console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="border border-solid border-black p-[0.625rem]">
        <img src={avatar_url} alt="Avatar" className="w-56" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
