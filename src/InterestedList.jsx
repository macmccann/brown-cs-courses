import React, { Component } from 'react';
import InterestCard from './InterestCard';

class InterestedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitted: false,
            value0: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            submittedCourseNames: [],
            totalMedianHours: 0,
            suggestedPathway: '',
        };

        this.getTotalMedianHours = this.getTotalMedianHours.bind(this);
        this.handleChange0 = this.handleChange0.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.clear = this.clear.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        event.preventDefault();
        this.setState(() => {
            return { 
                isSubmitted: true,
                submittedCourseNames: [
                    this.state.value0,
                    this.state.value1,
                    this.state.value2,
                    this.state.value3,
                    this.state.value4
                ],
            };
        }, () => {
            this.setState({
                totalMedianHours: this.getTotalMedianHours(),
                suggestedPathway: this.getSuggestedPathway(),
            });
        });

        event.preventDefault();
    }

    findCourseFromCode(code) {
        for(let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].code === code) {
                return this.props.items[i];
            }
        }
    }

    getTotalMedianHours() {
        let sum = 0;
        this.state.submittedCourseNames.forEach(code => {
            const item = this.findCourseFromCode(code);

            if (item && item.typical_week_hrs) {
                sum += item.typical_week_hrs;
            }
        });
        return sum.toFixed(1);
    }

    getSuggestedPathway() {
        let sysScore = 0;
        let spScore = 0;
        let secScore = 0;
        let bioScore = 0;
        let dataScore = 0;
        let visScore = 0;
        let desScore = 0;
        let archScore = 0;
        let theoryScore = 0;
        let aiScore = 0;
        let max = 0;
        let maxPathways = [];

        this.state.submittedCourseNames.forEach(code => {
            const item = this.findCourseFromCode(code);

            if (item && item.pathway) {
                if (item.pathway.match('systems')) {
                    sysScore++;
                    if (sysScore === max) {
                        maxPathways.push('Systems');
                    } else if (sysScore > max) {
                        max = sysScore;
                        maxPathways = [];
                        maxPathways.push('Systems');
                    }
                }
                if (item.pathway.match('software_principles')) {
                    spScore++;
                    if (spScore === max) {
                        maxPathways.push('Software Principles');
                    } else if (spScore > max) {
                        max = spScore;
                        maxPathways = [];
                        maxPathways.push('Software Principles');
                    }
                }
                if (item.pathway.match('security')) {
                    secScore++;
                    if (secScore === max) {
                        maxPathways.push('Security');
                    } else if (secScore > max) {
                        max = secScore;
                        maxPathways = [];
                        maxPathways.push('Security');
                    }
                }
                if (item.pathway.match('biology')) {
                    bioScore++;
                    if (bioScore === max) {
                        maxPathways.push('Biology');
                    } else if (bioScore > max) {
                        max = bioScore;
                        maxPathways = [];
                        maxPathways.push('Biology');
                    }
                }
                if (item.pathway.match('data')) {
                    dataScore++;
                    if (dataScore === max) {
                        maxPathways.push('Data');
                    } else if (dataScore > max) {
                        max = dataScore;
                        maxPathways = [];
                        maxPathways.push('Data');
                    }
                }
                if (item.pathway.match('visual')) {
                    visScore++;
                    if (visScore === max) {
                        maxPathways.push('Visual');
                    } else if (visScore > max) {
                        max = visScore;
                        maxPathways = [];
                        maxPathways.push('Visual');
                    }
                }
                if (item.pathway.match('design')) {
                    desScore++;
                    if (desScore === max) {
                        maxPathways.push('Design');
                    } else if (desScore > max) {
                        max = desScore;
                        maxPathways = [];
                        maxPathways.push('Design');
                    }
                }
                if (item.pathway.match('architecture')) {
                    archScore++;
                    if (archScore === max) {
                        maxPathways.push('Architecture');
                    } else if (archScore > max) {
                        max = archScore;
                        maxPathways = [];
                        maxPathways.push('Architecture');
                    }
                }
                if (item.pathway.match('theory')) {
                    theoryScore++;
                    if (theoryScore === max) {
                        maxPathways.push('Theory');
                    } else if (theoryScore > max) {
                        max = theoryScore;
                        maxPathways = [];
                        maxPathways.push('Theory');
                    }
                }
                if (item.pathway.match('ai')) {
                    aiScore++;
                    if (aiScore === max) {
                        maxPathways.push('AI');
                    } else if (aiScore > max) {
                        max = aiScore;
                        maxPathways = [];
                        maxPathways.push('AI');
                    }
                }
            }
        });

        if (maxPathways.length === 0) {
            return 'None';
        } else {
            console.log('maxPathways: ' + maxPathways);
            return maxPathways.join(', ');
        }
        
    }

    handleChange0(event) {
        this.setState({ value0: event.target.value});
    }

    handleChange1(event) {
        this.setState({ value1: event.target.value });
    }

    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }

    handleChange3(event) {
        this.setState({ value3: event.target.value });
    }

    handleChange4(event) {
        this.setState({ value4: event.target.value });
    }

    clear() {
        this.setState({
            isSubmitted: false,
            value0: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            submittedCourseNames: [],
        });
    }

    render() {
        if (!this.state.isSubmitted) {
            return (
                <div>
                    <h1>My Cart</h1>
                    <form onSubmit={this.submit}>
                        <label>
                            Course 1:
                            <input className='text-input' type="text" value={this.state.value0} onChange={this.handleChange0} />
                        </label>
                        <br />
                        <label>
                            Course 2:
                            <input className='text-input' type="text" value={this.state.value1} onChange={this.handleChange1} />
                        </label>
                        <br />
                        <label>
                            Course 3:
                            <input className='text-input' type="text" value={this.state.value2} onChange={this.handleChange2} />
                        </label>
                        <br />
                        <label>
                            Course 4:
                            <input className='text-input' type="text" value={this.state.value3} onChange={this.handleChange3} />
                        </label>
                        <br />
                        <label>
                            Course 5:
                            <input className='text-input' type="text" value={this.state.value4} onChange={this.handleChange4} />
                        </label>
                        <br />
                        <input className='modal-ui-button' type="submit" value="Submit" />
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>My Cart</h1>
                    <ul>
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[0])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[1])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[2])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[3])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[4])} />
                    </ul>
                    <p>Total Median Hours: {this.state.totalMedianHours} | Suggested Pathway(s): {this.state.suggestedPathway}</p>
                    <button className='modal-ui-button' onClick={() => { this.clear(); }} >Reset</button>
                </div>
            );
        }
        
    }
}

export default InterestedList;