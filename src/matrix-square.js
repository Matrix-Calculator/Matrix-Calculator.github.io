import React from 'react';
import './index.css';

export class MatrixSquare extends React.Component {

  componentWillMount() {
    this.update = this.update.bind(this);
  }

  update(event) {
    this.props.update(this.props.row, this.props.column, event.target.value);
  }

  render() {
    return (
      <input id={this.props.id} style={{textAlign: "center", height: 2 + "em", width: 3 + "em"}} onChange={this.update} value={this.props.value} className="matrixSquare"></input>
    );
  }

}
