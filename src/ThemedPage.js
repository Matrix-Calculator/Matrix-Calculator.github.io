import React from 'react';
import { GoHawk } from './GoHawk.js'

export class ThemedPage extends React.Component {
    render() {
        return (
            <div>
                <div class="header">
                    <h1>Matrix Calculator</h1>
                </div>
                <div class="bar"> </div>
                <div class="inside">
                    <div class="div1">
                        {this.props.children}
                        <GoHawk />
                    </div>
                </div>
            </div>
        )
    }
}