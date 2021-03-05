import React from 'react';
import './index.css';
import { Holder } from './holder.js';
import { equal } from 'mathjs';
import { MatrixSquare } from './matrix-square.js';
import { Add } from './add.js';
import { Multiply } from './multiply.js';
import { Swap } from './swap.js';

export class Matrix extends React.Component {

    constructor(props) {
        super(props)

        let data = []
        for(let row = 0; row < this.props.mheight; row++) {
            let currentRow = [];
            for(let column = 0; column < this.props.mwidth; column++) {
                //currentRow.push(new Holder());
                if(this.props.source) {
                    currentRow.push(this.props.source[row][column]);
                } else {
                    currentRow.push(new Holder());
                }
            }
            data.push(currentRow);
        }

        this.state = {
            data: data
        };

        this.recieveFromSquare = this.recieveFromSquare.bind(this);
        this.clearFunctions = this.clearFunctions.bind(this);
        this.add = this.add.bind(this);
        this.multiply = this.multiply.bind(this);
        this.swap = this.swap.bind(this);
    }

    deepcopy() {
        // TOODO: Potentially change to a mapping system
        let full = [];
        for(let row = 0; row < this.props.mheight; row++) {
            let currentRow = [];
            for(let column = 0; column < this.props.mwidth; column++) {
                currentRow.push(new Holder(this.state.data[row][column].display));
            }
            full.push(currentRow);
        }
        return full;
    }

    add(to, multiplier, from) {
        let full = this.deepcopy();
        let actuallyChanged = false;
        for(let column = 0; column < this.props.mwidth; column++) {
            if(this.state.data[to][column].add(multiplier, this.state.data[from][column])) {
                actuallyChanged = true;
            }
        }
        if(actuallyChanged) {
            this.update();
            //this.props.update(full);
        }
    }

    multiply(to, multiplier) {
        let full = this.deepcopy();
        let actuallyChanged = false;
        for(let column = 0; column < this.props.mwidth; column++) {
            if(this.state.data[to][column].multiply(multiplier)) {
                actuallyChanged = true;
            }
        }
        if(actuallyChanged) {
            this.update();
            //this.props.update(full);
        }
    }

    swap(a, b) {
        let full = this.deepcopy();
        let actuallyChanged = false;
        for(let column = 0; column < this.props.mwidth; column++) {
            let aData = this.state.data[a][column];
            let bData = this.state.data[b][column];
            if(equal(aData.value, bData.value)) actuallyChanged = true;
            this.state.data[a][column] = this.state.data[b][column];
            this.state.data[b][column] = aData;
        }
        if(actuallyChanged) {
            this.update();
            //this.props.update(full);
        }
    }

    clearFunctions() {
        try {
            const add = {
                firstSelect: document.getElementById("addFrom"),
                secondSelect: document.getElementById("addTo"),
                multiplier: document.getElementById("addMultiplier")
            }
            const multiply = {
                select: document.getElementById("multiplyTo"),
                multiplier: document.getElementById("multiplyMultiplier")
            }
            const swap = {
                firstSelect: document.getElementById("swapA"),
                secondSelect: document.getElementById("swapB")
            }

            let defaultSelect = 1;
            let defaultMultiplier = "";

            add.firstSelect.value = defaultSelect;
            add.secondSelect.value = defaultSelect;
            add.multiplier.value = defaultMultiplier;

            multiply.select.value = defaultSelect;
            multiply.multiplier.value = defaultMultiplier;

            swap.firstSelect.value = defaultSelect;
            swap.secondSelect.value = defaultSelect;

            console.log("Cleared");
        } catch(e) {
            console.log("Clearing Errored", e);
        }
    }

    recieveFromSquare(row, column, newDisplay) {
        if(this.props.frozen) return;
        this.state.data[row][column].setDisplay(newDisplay);
        this.update();
        if(this.props.update) {
            this.props.update(this.state.data);
        }
    }

    update() { this.setState({}); }

    render() {

        let display = [];
        for(let row = 0; row < this.state.data.length; row++) {
            let currentRow = [];
            for(let column = 0; column < this.state.data[row].length; column++) {
                if(this.props.frozen) { this.state.data[row][column].freeze(); }
                currentRow.push(
                    // Fix this, no new lines
                    <MatrixSquare update={this.recieveFromSquare} row={row} column={column} value={this.state.data[row][column].getDisplay()} key={row+"00"+column} />
                );
            }

            display.push(
                <div key={row}>
                    {currentRow}
                </div>
            );
        }


        return (
            <>
            <div className="center">
                <div id={this.props.id} className={this.props.className} >
                    {display}
                </div>
            </div>
                {this.props.controls && (
                    <>
                    <br/>
                    <div id="controls">
                        <Add rowCount={this.props.mheight} action={this.add} clear={this.clearFunctions} />
                        <br/>
                        <Multiply rowCount={this.props.mheight} action={this.multiply} clear={this.clearFunctions} />
                        <br/>
                        <Swap rowCount={this.props.mheight} action={this.swap} clear={this.clearFunctions} />
                    </div>
                    </>
                )}
            </>
        )
    }
}