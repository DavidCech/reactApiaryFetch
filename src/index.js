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
    html: "",
    hidden: true
  };

  componentDidMount() {
    fetch("https://private-e55fe-reactfuntimes.apiary-mock.com/list")
      .then(data => data.json())
      .then(data => this.setState({ list: data[0].students }))
      .catch(console.log);
  }

  printData() {
    let list = "";
    list = this.state.list.map(student => (
      <div>
        {student.firstName} + {student.lastName}
      </div>
    ));

    this.setState({
      html: list,
      hidden: !this.state.hidden
    });
  }

  render() {
    let content = this.state.hidden ? "" : this.state.html;
    let buttonDisplay = this.state.hidden ? "Show Students!" : "Hide Students!";
    return (
      <div className="App">
        <h1>Fetch list of students</h1>
        <button onClick={this.printData.bind(this)}>{buttonDisplay}</button>
        <p>{content}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
