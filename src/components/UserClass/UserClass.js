import { Component } from "react";

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
      <div className="user">
        <img src={avatar_url} alt="Avatar" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
