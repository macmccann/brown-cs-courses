import React, { Component } from 'react';

class InterestCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            item: null,
        };

        this.findCourseFromCode = this.findCourseFromCode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    findCourseFromCode(code) {
        for (let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].code === code) {
                return this.props.items[i];
            }
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleClick = (code) => {
        window.location.href = "http://cs.brown.edu/courses/csci" + code.substring(5, code.length);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const item = this.findCourseFromCode(this.state.value);
        this.setState({
            item: item,
        });
        this.props.handleSubmit(item, this.props.i);
    }
    
    render () {
        if (this.props.isCleared) {
            return (
                <form onSubmit={(event) => { this.handleSubmit(event); }}>
                    <label>
                        Course {this.props.i + 1}:
                        <input className='text-input' type="text" value={this.state.value0} onChange={this.handleChange} />
                    </label>
                    <input className='modal-ui-button submit-button' type="submit" value="Submit" />
                </form>
            );
        } else {
            if (!this.state.item) {
                return null;
            } else {
                return (
                    <li className='modal-li' key={this.state.item.code} onClick={() => this.handleClick(this.state.item.code)}><img className='modal-img' alt={this.state.item.code} src={this.state.item.img_src}></img> <p>{this.state.item.code} | {this.state.item.title} | {this.state.item.level.charAt(0).toUpperCase() + this.state.item.level.slice(1)} | {this.state.item.typical_week_hrs} hours/week</p></li>
                );
            }
        }
    }
}

export default InterestCard;