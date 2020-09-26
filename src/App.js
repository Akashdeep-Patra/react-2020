import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor() {
    this.monsters = [{ name: "akash", id: 1 }];
  }
  componentDidMount() {}
  render() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));

    return (
      <div className="App">
        {this.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
