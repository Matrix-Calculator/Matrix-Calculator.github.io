import React from 'react';
import './index.css';
import { Matrix } from './matrix.js';
import { ThemedPage } from './ThemedPage.js';

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            stage: 0
        }
        this.setMatrix = this.setMatrix.bind(this);
        this.freezeMatrix = this.freezeMatrix.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            stage: 0
        });
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
                returnValue = (
                    <ThemedPage>
                        <label htmlFor="row">Row: </label>
                        <select id="row">
                            {options}
                        </select>
                        <label htmlFor="column"> Column: </label>
                        <select id="column" style={{marginRight:1 +"em"}}>
                            {options}
                        </select>

                        <button onClick={this.setMatrix}>GO!</button>
                        <button onClick={this.reset}>Reset</button>
                    </ThemedPage>
                );
                break;
            case 1:
                returnValue = (
                    <ThemedPage>
                        <Matrix mwidth={this.state.columns} mheight={this.state.rows} />
                        <button onClick={this.freezeMatrix}>GO!</button>
                        <button onClick={this.reset}>Reset</button>
                    </ThemedPage>
                );
                break;
            case 2:
                returnValue = (
                    <ThemedPage>
                        <Matrix frozen={true} mwidth={this.state.columns} mheight={this.state.rows} />
                        <button onClick={this.reset}>Reset</button>
                    </ThemedPage>
                );
                break;
            default:
                returnValue = (
                    <div>Uh-oh... Something broke (HTTP Response Code 418)</div>
                )
                break;
        }
        return returnValue;
    }
}