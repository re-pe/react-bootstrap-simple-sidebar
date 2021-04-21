import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true,
      previousWidth: -1,
    };
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.state.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isMobile: !isMobile,
        isOpen: !isMobile,
        previousWidth: width,
      });
    }
  }

  /**
   * Add event listener
   */
    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth.bind(this));
    }

  /**
   * Remove event listener
   */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth.bind(this));
    }

    toggle = () => {
        this.setState({ ...this.state, isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div className="App wrapper">
                <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
                <Content toggle={this.toggle} isOpen={this.state.isOpen} />
            </div>
        );
    }
}

export default App;
