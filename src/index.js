import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
  }

  state = {
    list: [],
    html: ""
  };

  componentDidMount() {
    fetch("https://private-e55fe-reactfuntimes.apiary-mock.com/list")
      .then(data => data.json())
      .then(data => this.setState({ list: data[0].students }))
      .catch(console.log);
  }

  printData() {
    let list = "";
    list = this.state.list.map(kokot => (
      <div>
        {kokot.firstName} + {kokot.lastName}
      </div>
    ));
    this.setState({
      html: list
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.printData.bind(this)}>Click me!</button>
        <p>{this.state.html}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
