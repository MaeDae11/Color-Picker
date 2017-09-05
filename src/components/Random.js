import React, {Component} from 'react';



class Random extends Component {
    constructor(props){
        super(props)
        this.state = { color: [0, 25, 237]}
    }

    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }


    render(){
        return(
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
                    Your color is {this.formatColor(this.state.color)}!
                </h1>

            </div>
        )
    }
}

export default Random;