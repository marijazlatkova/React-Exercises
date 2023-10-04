import React from 'react';

export class LifeCycleExample extends React.Component{
  constructor(props) {
    super(props);
    console.log("This method is called from the constructor");
    this.state = {
      promenliva: "Vrednost 1"
    }
  };
  componentDidMount() {
    console.log("This is component DidMount");
  }

  smeniVrednost = () => {
    this.setState({
      promenliva: "Nova Vrednost 2"
    })
  }

  render() {
    console.log("This is render method");
    return(
      <div id='life-cycle-example'>
        <h1>Class Component Example</h1>
        <p>Vrednost: {this.state.promenliva}</p>
        <button onClick={this.smeniVrednost}>Click Me!</button>
      </div>
    )
  };
};