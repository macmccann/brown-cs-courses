import React, { Component } from 'react';
import InterestCard from './InterestCard';

class InterestedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCleared: [true],
            submittedCourseNames: [],
            totalMedianHours: 0,
            suggestedPathway: '',
            count: 1,
        };

        this.getSuggestedPathway = this.getSuggestedPathway.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addInterestCard = this.addInterestCard.bind(this);
        this.renderList = this.renderList.bind(this);
        this.clear = this.clear.bind(this);
    }

    // submit(event) {
    //     event.preventDefault();
    //     this.setState(() => {
    //         return { 
    //             isSubmitted: true,
    //             submittedCourseNames: [
    //                 this.state.value0,
    //                 this.state.value1,
    //                 this.state.value2,
    //                 this.state.value3,
    //                 this.state.value4
    //             ],
    //         };
    //     }, () => {

    //     });

    //     event.preventDefault();
    // }

    findCourseFromCode(code) {
        for(let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].code === code) {
                return this.props.items[i];
            }
        }
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
            return maxPathways.join(', ');
        }
        
    }

    handleSubmit(item, i) {
        this.state.submittedCourseNames.push(item.code);
        this.setState({ suggestedPathway: this.getSuggestedPathway() });
        let newIsCleared = this.state.isCleared.slice();
        newIsCleared[i] = false;
        this.setState({
            isCleared: newIsCleared,
            totalMedianHours: this.state.totalMedianHours + item.typical_week_hrs,
        });
    }

    clear() {
        this.setState({
            isCleared: [true],
            totalMedianHours: 0,
            submittedCourseNames: [],
            count: 1,
        });
    }

    addInterestCard() {
        const newCount = this.state.count + 1;
        console.log('fdsa');
        console.log(this.state.isCleared);
        let newIsCleared = this.state.isCleared.slice();
        newIsCleared.push(true);
        this.setState({
            count: newCount,
            isCleared: newIsCleared,
        });
        this.render();
    }

    renderList() {
        const interestCardList = [];
        for (let i = 0; i < this.state.count; i++) {
            interestCardList.push(<InterestCard key={i.toString()} isCleared={this.state.isCleared[i]} items={this.props.items} handleSubmit={this.handleSubmit} i={i}/>);
        }
        return interestCardList;
    }

    render() {
        // if (!this.state.isSubmitted) {
        //     return (
        //         <div>
        //             <h1>My Cart</h1>
        //             <form onSubmit={this.submit}>
        //                 <label>
        //                     Course 1:
        //                     <input className='text-input' type="text" value={this.state.value0} onChange={this.handleChange0} />
        //                 </label>
        //                 <br />
        //                 <label>
        //                     Course 2:
        //                     <input className='text-input' type="text" value={this.state.value1} onChange={this.handleChange1} />
        //                 </label>
        //                 <br />
        //                 <label>
        //                     Course 3:
        //                     <input className='text-input' type="text" value={this.state.value2} onChange={this.handleChange2} />
        //                 </label>
        //                 <br />
        //                 <label>
        //                     Course 4:
        //                     <input className='text-input' type="text" value={this.state.value3} onChange={this.handleChange3} />
        //                 </label>
        //                 <br />
        //                 <label>
        //                     Course 5:
        //                     <input className='text-input' type="text" value={this.state.value4} onChange={this.handleChange4} />
        //                 </label>
        //                 <br />
        //                 <input className='modal-ui-button' type="submit" value="Submit" />
        //             </form>
        //         </div>
        //     );
        // } else {
            return (
                <div>
                    <h1>My Cart</h1>
                    <ul>
                        {this.renderList()}
                        {/* <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[0])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[1])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[2])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[3])} />
                        <InterestCard isSubmitted={this.state.isSubmitted} item={this.findCourseFromCode(this.state.submittedCourseNames[4])} /> */}
                    </ul>
                    <p>Total Median Hours: {this.state.totalMedianHours} | Suggested Pathway(s): {this.state.suggestedPathway}</p>
                    <button className='modal-ui-button' onClick={() => { this.addInterestCard(); }}>Add</button>
                    <br/>
                    <button className='modal-ui-button' onClick={() => { this.clear(); }} >Reset</button>
                </div>
            );
        // }
        
    }
}

export default InterestedList;