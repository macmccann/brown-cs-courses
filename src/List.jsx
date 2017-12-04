import React, { Component } from 'react';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the 
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {
    handleClick = (code) => {
        window.location.href = "http://cs.brown.edu/courses/csci" + code.substring(5, code.length);
    }

    renderList() {
        /*
           Javascript map will let you iterate and modify each item in a list.
           In this example, we are changing each item
           (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
        */
        const items = this.props.items.map(item => {
            return <li key={item.code} onClick={() => this.handleClick(item.code)}><img alt={item.code} src={item.img_src}></img> <p>{item.code} | {item.title} | {item.level.charAt(0).toUpperCase() + item.level.slice(1)} | {item.typical_week_hrs} hours/week</p></li>
        });

        return items;
    }

    render() {
        return (
            <div className="ul-container">
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

export default List;