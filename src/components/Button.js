import React, {Component} from 'react';




class Button extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <button
                className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
            </button>
        )
    };
};


export default Button;