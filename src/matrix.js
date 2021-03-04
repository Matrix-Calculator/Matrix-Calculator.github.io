import React from 'react';
import './index.css';
import { Holder } from './holder.js';
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
                currentRow.push(new Holder());
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

    add(to, multiplier, from) {
        for(let column = 0; column < this.props.mwidth; column++) {
            this.state.data[to][column].add(multiplier, this.state.data[from][column]);
        }
        this.update();
    }

    multiply(to, multiplier) {
        for(let column = 0; column < this.props.mwidth; column++) {
            this.state.data[to][column].multiply(multiplier);
        }
        this.update();
    }

    swap(a, b) {
        for(let column = 0; column < this.props.mwidth; column++) {
            let aData = this.state.data[a][column];
            this.state.data[a][column] = this.state.data[b][column];
            this.state.data[b][column] = aData;
        }
        this.update();
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
    }

    update() { this.setState({}); }

    render() {

        let display = [];
        for(let row = 0; row < this.state.data.length; row++) {
            let currentRow = [];
            for(let column = 0; column < this.state.data[row].length; column++) {
                if(this.props.frozen) { this.state.data[row][column].freeze(); }
                currentRow.push(
                    <MatrixSquare update={this.recieveFromSquare} row={row} column={column} value={this.state.data[row][column].getDisplay()} key={row+"00"+column} />
                );
            }

            display.push(
                <div key={row}>
                    {currentRow}
                </div>
            );
        }

        if(this.props.frozen) {
            return (
                <div>
                    {display}
                    <Add rowCount={this.props.mheight} action={this.add} clear={this.clearFunctions} />
                    <Multiply rowCount={this.props.mheight} action={this.multiply} clear={this.clearFunctions} />
                    <Swap rowCount={this.props.mheight} action={this.swap} clear={this.clearFunctions} />
                </div>
            );
        } else {
            return (
                <div>
                    {display}
                </div>
            );
        }
    }
}