import React, { Component } from "react";
import "./classcomponent.css" ;
import Pic from './besma.jpg';


class ClassComponent extends Component {
  state = {
    count: 0,
    timer: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  componentDidMount() {
    // console.log("Mounting");
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("Updating");
    // return alert("Heyy there is an update");
  }

  componentWillUnmount() {
    // console.log("Destruction");

    return alert("Don't Run Away !");
  }
  render() {
    console.log("render");
    return (
      <div className="button">
      <h2> Besma ABIDI </h2>
      <h3> FullStack Developer </h3>
      <img src={Pic} alt="logo" className="pic"/>


      <h3> The last component was mounted since : </h3>

        <button onClick={this.increment}> + </button>

        <span> {this.state.count}</span>

        <button onClick={this.decrement}> - </button>

        <h3> {this.state.timer} </h3>
      </div>
    );
  }
}

export default ClassComponent;