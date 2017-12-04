import React, { Component } from 'react';

class ActiveButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.isActive ? 'active' : ''} onClick={() => this.props.myOnChange(this.props.value, this.props.activeIndex)} value={this.props.value} color="#841584">
                {this.props.name}
            </button>
        );
    }
}

export default ActiveButton;