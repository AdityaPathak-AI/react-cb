import React from "react";

class MaxMin extends React.Component {
  constructor() {
    super();
    this.state = { numbers: [4, 2, 8, 1, 5] };
  }

  findMaxAndMin = () => {
    const { numbers } = this.state;

    if (numbers.length === 0) {
      return { max: undefined, min: undefined };
    }

    let maxNumber = numbers[0];
    let minNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }

      if (numbers[i] < minNumber) {
        minNumber = numbers[i];
      }
    }

    return { max: maxNumber, min: minNumber };
  };

  render() {
    const { numbers } = this.state;
    const { max, min } = this.findMaxAndMin();

    return (
      <div>
        <h1>Max and Min in Array:</h1>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <p>Max: {max}</p>
        <p>Min: {min}</p>
      </div>
    );
  }
}

export default MaxMin;
