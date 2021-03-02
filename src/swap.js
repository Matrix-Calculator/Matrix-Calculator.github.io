import React from 'react';
import { fraction } from 'mathjs';
import ReactDOM from 'react-dom';
import './index.css';

export class Swap extends React.Component {

  constructor(props) {
    super(props)
    this.confirmSwap = this.confirmSwap.bind(this);
  }

  confirmAdd() {
    const swapA = Math.floor( document.getElementById("swapA").value ) - 1;
    const swapB = Math.floor( document.getElementById("swapB").value ) - 1;
    if(!swapA || !swapB) return;
    this.props.action(swapA, swapB);
    this.reset();
  }

  reset() {
    document.getElementById("swapA").value = 0;
    document.getElementById("swapB").value = 0;
  }

  render() {
    let options = [];
    for(let i = 1; i <= this.props.rowCount; i++) {
      options.push(<option value={i}>{i}</option>);
    }
      return (
          <div>
              Swap rows
              <select id='swapA'>
                {options}
              </select>
              and
              <select id='swapB'>
                {options}
              </select>
              <button onClick={this.confirmSwap}>
                Confirm
              </button>
          </div>
      )
  }
}