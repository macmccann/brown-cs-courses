import React, { Component } from 'react';

class InterestCard extends Component {
    handleClick = (code) => {
        window.location.href = "http://cs.brown.edu/courses/csci" + code.substring(5, code.length);
    }
    
    render () {
        if (this.props.isSubmitted) {
            if (!this.props.item) {
                return null;
            } else {
                return (
                    <li className='modal-li' key={this.props.item.code} onClick={() => this.handleClick(this.props.item.code)}><img className='modal-img' alt={this.props.item.code} src={this.props.item.img_src}></img> <p>{this.props.item.code} | {this.props.item.title} | {this.props.item.level.charAt(0).toUpperCase() + this.props.item.level.slice(1)} | {this.props.item.typical_week_hrs} hours/week</p></li>
                );
            }
        } else {
            return null;
        }
    }
}

export default InterestCard;