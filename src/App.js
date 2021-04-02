import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: 0,
    };
  }
  componentDidMount() {
    this.setState({ innerWidth: window.innerWidth });
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = (e) => {
    this.setState({ innerWidth: e.target.innerWidth });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.innerWidth > 740 ? (
            <img
              src="./img/zen7_desktop_dark.png"
              className="desktop"
              alt="building"
            />
          ) : (
            <img
              src="./img/zen7_mobile_dark.png"
              className="mobile"
              alt="building"
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
