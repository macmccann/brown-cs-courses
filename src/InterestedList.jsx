import React, { Component } from 'react';
import InterestCard from './InterestCard';

class InterestedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitted: false,
            submittedCourseNames: [],
        };
    }

    submit() {

    }

    render() {
        return (
            <div>
                <h1>Interested List</h1>
                <InterestCard isSubmitted={this.state.isSubmitted} courseName={this.state.submittedCourseNames[0]} items={this.props.items} />
                <InterestCard isSubmitted={this.state.isSubmitted} courseName={this.state.submittedCourseNames[0]} items={this.props.items} />
                <InterestCard isSubmitted={this.state.isSubmitted} courseName={this.state.submittedCourseNames[0]} items={this.props.items} />
                <InterestCard isSubmitted={this.state.isSubmitted} courseName={this.state.submittedCourseNames[0]} items={this.props.items} />
                <InterestCard isSubmitted={this.state.isSubmitted} courseName={this.state.submittedCourseNames[0]} items={this.props.items} />
                <button onClick={() => this.submit()}>Button</button>
            </div>
        );
    }
}

export default InterestedList;