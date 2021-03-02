import React from 'react';
import { fraction } from 'mathjs';
import './index.css';

export class Multiply extends React.Component {

  constructor(props) {
    super(props)
    this.confirmMultiply = this.confirmMultiply.bind(this);
  }

  confirmMultiply() {
    const to = Math.floor( document.getElementById("multiplyTo").value ) - 1;
    const multiplier = fraction( document.getElementById("multiplyMultiplier").value || 1 );
    this.props.action(to, multiplier);
    this.reset();
  }

  reset() {
      document.getElementById("multiplyTo").value = 0;
      document.getElementById("multiplyMultiplier").value = "";
  }

  render() {
    let options = [];
    for(let i = 1; i <= this.props.rowCount; i++) {
      options.push(<option value={i}>{i}</option>);
    }
      return (
          <div>
              Multiply row
              <select id='multiplyTo'>
                {options}
              </select>
              by
              <input id="multiplyMultiplier" placeholder="1"></input>
              <button onClick={this.confirmMultiply}>
                Confirm
              </button>
          </div>
      )
  }
  
}