import React from 'react';
import { fraction } from 'mathjs';
import './index.css';

export class Add extends React.Component {

  constructor(props) {
    super(props)
    this.confirmAdd = this.confirmAdd.bind(this);
  }

  confirmAdd() {
    const from = Math.floor( document.getElementById("addFrom").value ) - 1;
    const multiplier = fraction( document.getElementById("addMultiplier").value || 0 );
    console.log(multiplier);
    const to = Math.floor( document.getElementById("addTo").value ) - 1;
    this.props.action(to, multiplier, from);
    //this.reset();
    this.props.clear();
    console.log("completed");
  }

  reset() {
    //document.getElementById("addFrom").value = 1;
    //document.getElementById("addMultiplier").value = "";
    //document.getElementById("addTo").value = 1;
  }

  render() {
    let options = [];
    for(let i = 1; i <= this.props.rowCount; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
      return (
          <div>
              Add row
              <select id='addFrom'>
                {options}
              </select>
              *
              <input id="addMultiplier" placeholder="0"></input>
              to row
              <select id='addTo'>
                {options}
              </select>
              <button onClick={this.confirmAdd}>
                Confirm
              </button>
          </div>
      )
  }
  
}
