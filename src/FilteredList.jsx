import React, { Component } from 'react';
import ActiveButton from './ActiveButton';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterLevel: "",
            filterPathway: "",
            sortBy: "",
            activeLevelIndex: 0,
            activePathwayIndex: 0,
            activeSortIndex: 0
        };
    }

    onFilterLevel = (filterLevel, activeLevelIndex) => {
        this.setState({ filterLevel, activeLevelIndex });
    }

    onFilterPathway = (filterPathway, activePathwayIndex) => {
        this.setState({ filterPathway, activePathwayIndex });
    }

    onSort = (sortBy, activeSortIndex) => {
        this.setState({ sortBy, activeSortIndex });
    }

    sortAndFilter = (items, filterLevel, filterPathway, sortBy) => {
        // If the string to filter by is "beginner", "introductory", "intermediate", or "advanced",
        // then filter by level. If the string to filter by contains "systems", "software_principles",
        // "security", "biology", "data", "visual", "design", "architecture", "theory", or "ai", then
        // filter by pathway. Otherwise, return the item.
        const filteredItems = items.filter((item) => {
            if (filterLevel === "beginner" || filterLevel === "introductory" || filterLevel === "intermediate" || filterLevel === "advanced") {
                return item.level === filterLevel;
            } else {
                return true;
            }
        });

        const filteredItems2 = filteredItems.filter((item) => {
            if (filterPathway.match(/systems|software_principles|security|biology|data|visual|design|architecture|theory|ai/i)) {
                return item.pathway.match(filterPathway);
            } else {
                return true;
            }
        });

        const sortedItems = filteredItems2.sort((item1, item2) => {
            if (sortBy === "name") {
                return (item1.title > item2.title) - (item1.title < item2.title);
            } else if (sortBy === "hours") {
                return item2.typical_week_hrs - item1.typical_week_hrs;
            } else {
                return (item1.code > item2.code) - (item1.code < item2.code);
            }
        });

        return sortedItems;
    }

    render() {
        return (
            <div className="filter-list">
                <h1>Filter and Sort Classes</h1>
                <h3>Filter by Level:</h3>
                <div className="level-filters selector">
                    <ActiveButton name="None" value="" isActive={this.state.activeLevelIndex===0} activeIndex={0} myOnChange={this.onFilterLevel}/>
                    <ActiveButton name="Beginner" value="beginner" isActive={this.state.activeLevelIndex === 1} activeIndex={1} myOnChange={this.onFilterLevel} />
                    <ActiveButton name="Introductory" value="introductory" isActive={this.state.activeLevelIndex === 2} activeIndex={2} myOnChange={this.onFilterLevel} />
                    <ActiveButton name="Intermediate" value="intermediate" isActive={this.state.activeLevelIndex === 3} activeIndex={3} myOnChange={this.onFilterLevel} />
                    <ActiveButton name="Advanced" value="advanced" isActive={this.state.activeLevelIndex === 4} activeIndex={4} myOnChange={this.onFilterLevel} />
                </div>

                <h3>Filter by Pathway:</h3>
                <div className="pathway-filters selector">
                    <ActiveButton name="None" value="" isActive={this.state.activePathwayIndex === 0} activeIndex={0} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Systems" value="systems" isActive={this.state.activePathwayIndex === 1} activeIndex={1} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Software Principles" value="software_principles" isActive={this.state.activePathwayIndex === 2} activeIndex={2} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Security" value="security" isActive={this.state.activePathwayIndex === 3} activeIndex={3} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Biology" value="biology" isActive={this.state.activePathwayIndex === 4} activeIndex={4} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Data" value="data" isActive={this.state.activePathwayIndex === 5} activeIndex={5} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Visual" value="visual" isActive={this.state.activePathwayIndex === 6} activeIndex={6} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Design" value="design" isActive={this.state.activePathwayIndex === 7} activeIndex={7} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Architecture" value="architecture" isActive={this.state.activePathwayIndex === 8} activeIndex={8} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Theory" value="theory" isActive={this.state.activePathwayIndex === 9} activeIndex={9} myOnChange={this.onFilterPathway} />
                    <ActiveButton name="Artificial Intelligence" value="ai" isActive={this.state.activePathwayIndex === 10} activeIndex={10} myOnChange={this.onFilterPathway} />
                </div>

                <h3>Sort by Code, Name, or Median Hours:</h3>
                <div className="sort-by selector">
                    <ActiveButton name="Code" value="code" isActive={this.state.activeSortIndex === 0} activeIndex={0} myOnChange={this.onSort} />
                    <ActiveButton name="Name" value="name" isActive={this.state.activeSortIndex === 1} activeIndex={1} myOnChange={this.onSort} />
                    <ActiveButton name="Hours" value="hours" isActive={this.state.activeSortIndex === 2} activeIndex={2} myOnChange={this.onSort} />
                </div>

                <List items={ this.sortAndFilter(this.props.items, this.state.filterLevel, this.state.filterPathway, this.state.sortBy) } />
            </div>
        );
    }
}

export default FilteredList;