import React, {Component} from 'react';

import Random from './Random.js';


class Button extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <button
                className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				Refresh
            </button>
        )
    };
};


export default Button;