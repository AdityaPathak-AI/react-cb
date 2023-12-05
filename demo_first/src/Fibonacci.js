import React from "react";
class Fibonacci extends React.Component
 {
  constructor() {
    super();
    this.state = { i: 0, f: [0, 1], n: 11 };
  }

  componentDidMount() {
    this.generateFibonacci();
  }

  generateFibonacci = () => {
    const { n } = this.state;
    let fibonacciSeries = [0, 1];

    for (let i = 2; i < n; i++) {
      fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }

    this.setState({ f: fibonacciSeries });
  };

  render() {
    const { n, f } = this.state;

    return (
      <>
        <h1 style={{textAlign:'center'}}>Fibonacci Series of {n}</h1>
        <b>{f.join(", ")}</b>
      </>
    );
  }
}
export default Fibonacci;
