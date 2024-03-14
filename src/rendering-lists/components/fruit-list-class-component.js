import React, { Component } from 'react';

class FruitListClassComponent extends Component {
  render() {
    // Array of objects containing fruits and their colors
    const fruits = [
      { name: 'Apple', color: 'Red' },
      { name: 'Banana', color: 'Yellow' },
      { name: 'Grapes', color: 'Purple' },
      { name: 'Orange', color: 'Orange' },
      { name: 'Strawberry', color: 'Red' }
    ];

    return (
      <div>
        <h2>Fruit List</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>
              {fruit.name} - {fruit.color}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FruitListClassComponent;
