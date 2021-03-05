import React from 'react';
import './index.css';
import { Matrix } from './matrix.js';
import { ThemedPage } from './ThemedPage.js';

export class App extends React.Component {
// TODO: Clean up everything, comment stuff, and re-make the whole backend
    constructor() {
        super();
        this.state = {
            stage: 0
        }
        this.setMatrix = this.setMatrix.bind(this);
        this.freezeMatrix = this.freezeMatrix.bind(this);
        this.reset = this.reset.bind(this);
        this.updateMatrix = this.updateMatrix.bind(this);
        this.last = 0;
        this.allMatricies = [];
        this.theMatrix = false;
    }

    updateMatrix(data) {
        /*
        console.log("Updaing matrix...");
        console.log("Last", this.last);
        console.log("New", data);
        this.allMatricies.push(data);
        this.last = JSON.parse(JSON.stringify(data));
        console.log(this.allMatricies);
        */
        this.theMatrix = data;
        this.setState({});
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
                        <p className="inner-text instructions">Please select the dimensions for a matrix m x n then click the "Submit" button</p>
                        <br/>
                        <div class="offset">
                            <ul>
                                <li>
                                    <label htmlFor="row">Number of rows: m = </label>
                                    <select id="row">
                                        {options}
                                    </select>
                                </li>
                                <br/> <br/>
                                <li>
                                    <label htmlFor="column">Number of columns: n = </label>
                                    <select id="column" style={{marginRight:1 +"em"}}>
                                        {options}
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <br/> <br/>
                        <button className="specialbutton" onClick={this.reset}>Reset</button>
                        <button className="specialbutton submit" onClick={this.setMatrix}>Submit</button>
                    </ThemedPage>
                );
                break;
            case 1:
                console.log("Your matrix", this.theMatrix);
                returnValue = (
                    <ThemedPage>
                        <p className="instructions">Please enter the elements of your matrix. Fields left empty will be interpreted as 0. <br/> You may use any mix of fractions and decimals. When you are done please click the "Submit" button. </p>
                        <br/>
                        <div className="center">
                            <Matrix id="matrix" update={this.updateMatrix} mwidth={this.state.columns} mheight={this.state.rows} />
                        </div>
                        <br/> <br/>
                        <button className="specialbutton" onClick={this.reset}>Reset</button>
                        <button className="specialbutton submit" onClick={this.freezeMatrix}>Submit</button>
                    </ThemedPage>
                );
                break;
            case 2:
                returnValue = (
                    <ThemedPage>
                        <p className="inner-text instructions">Please select one of the below operations to manipulate the primary matrix.</p>
                        <Matrix id="matrix" source={this.theMatrix} frozen={true} controls={true} mwidth={this.state.columns} mheight={this.state.rows} />
                        <br/>
                        <button className="specialbutton" onClick={this.reset}>Reset</button>
                    </ThemedPage>
                );
                /*
                let out = [];
                for(let i = 0; i < this.allMatricies.length; i++) {
                    out.push(
                        <>
                        <Matrix source={this.allMatricies[i]} frozen={true} mwidth={this.state.columns} mheight={this.state.rows} />
                        <br></br>
                        </>
                    )
                }
                            <div className="old">
                                {out}
                            </div>
                */
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