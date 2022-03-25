import React, { Component } from "react";
import ClassComponent from "./Components/ClassComponent";
import FnComponent from "./Components/FunctionalComponent";
import "./App.css" ;


export default class extends Component {
  state = {
    show: false,
  };

  toggel = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="toggel">
        <button onClick={this.toggel}>
          {this.state.show ? "Hide" : "Show"}
        </button>

        {this.state.show ? <ClassComponent /> : null}



        <FnComponent />
        
      </div>
    );
  }
}
