import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor() {
    this.monsters = [
      {
        name: "Dracula"
      },
      {
        name: "FrankenStien"
      },
      {
        name: "Mummy"
      },
      {
        name: "Zombie"
      },
      {
        name: "Warewolf"
      }
    ];
  }
  render() {
    return (
      <div className="App">
        {this.monsters.map((monster,key) =>{ return  <h1 key={key}>{monster.name}</h1>})}
        <h1>Hello world</h1>
      </div>
    );
  }
}
