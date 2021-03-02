import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Matrix } from './matrix.js';

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            stage: 0
        }
        this.setMatrix = this.setMatrix.bind(this);
        this.freezeMatrix = this.freezeMatrix.bind(this);
    }

    setMatrix() {
        const rows = document.getElementById("row").value;
        const columns = document.getElementById("column").value;
        this.setState({
            stage: 1,
            rows: rows,
            columns: columns
        });
    }

    freezeMatrix() {
        this.setState({
            stage: 2
        });
    }

    render() {
        let returnValue = "";
        switch(this.state.stage) {
            case 0:
                let options = []
                for(let i = 1; i < 11; i++) {
                    options.push(<option key={i} value={i}>{i}</option> );
                }
                console.log(options);
                returnValue = (
                    <div>
                        <label htmlFor="row">Row: </label>
                        <select id="row">
                            {options}
                        </select>
                        <label htmlFor="column"> Column: </label>
                        <select id="column" style={{marginRight:1 +"em"}}>
                            {options}
                        </select>

                        <button onClick={this.setMatrix}>GO!</button>
                    </div>
                );
                break;
            case 1:
                returnValue = (
                    <div>
                        <Matrix mwidth={this.state.columns} mheight={this.state.rows} />
                        <button onClick={this.freezeMatrix}>GO!</button>
                    </div>
                );
                break;
            case 2:
                returnValue = (
                    <div>
                        <Matrix frozen={true} mwidth={this.state.columns} mheight={this.state.rows} />
                    </div>
                );
                break;
            default:
                returnValue = (
                    <div>Epic</div>
                )
                break;
        }
        console.log(returnValue);
        return returnValue;
        //    <Matrix mwidth="3" mheight="5" />
    }
}
/*
    <p>
    Rows: <input type="number"></input>
    Columns: <input type="number"></input>
    </p>
*/