import React from 'react';
import './index.css';
import { Holder } from './holder.js';
import { MatrixSquare } from './matrix-square.js';
import { Add } from './add.js';
import { Multiply } from './multiply.js';

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
            let aData = this.state.data[a];
            this.state.data[a] = this.state.data[b];
            this.state.data[b] = aData;
        }
        this.update();
    }

    recieveFromSquare(row, column, newDisplay) {
        this.state.data[row][column].setDisplay(newDisplay);
        this.update();
    }

    update() { this.setState({}); }

    render() {

        let display = [];
        for(let row = 0; row < this.state.data.length; row++) {
            let currentRow = [];
            for(let column = 0; column < this.state.data[row].length; column++) {
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
                    <Add rowCount={this.props.mheight} action={this.add} />
                    <Multiply rowCount={this.props.mheight} action={this.multiply} />
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