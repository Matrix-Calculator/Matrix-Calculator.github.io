import React from 'react';
import GoHawkImage from './GoHawk.png';

export class ThemedPage extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <h1>Matrix Calculator</h1>
                </div>
                <div className="bar"> </div>
                <div className="inside">
                    <div className="center">
                        <div className="div1">
                            {this.props.children}
                        </div>
                    </div>
                    <p className="authors">M<a id="rickRoll" href="https://youtu.be/dQw4w9WgXcQ">a</a>de By: <a href="mailto:wyattspree@gmail.com">Wyatt Spree</a> & <a href="mailto:gaston95g@gmail.com">Gaston Gonnerman</a></p>
                    <div className="imageHolder">
                        <img id="leftImage" class="img" src={GoHawkImage} />
                        <img id="rightImage" class="img" src={GoHawkImage} />
                    </div>
                </div>
            </>
        );
    }
}