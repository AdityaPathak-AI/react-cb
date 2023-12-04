import React from "react";

class PrimeOrNot extends React.Component {
  constructor() {
    super();
    this.state = { num: 31, isPrime: null };
  }

  checkPrime = () => {
    const num = this.state.num;

    if (num <= 1) {
      this.setState({ isPrime: false });
      return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        this.setState({ isPrime: false });
        return;
      }
    }

    this.setState({ isPrime: true });
  };

  render() {
    // Call checkPrime directly in render
    this.checkPrime();
    return (
      <>
        <h1 style={{ textAlign: "center", color: "red" }}>Prime Or Not</h1>
        <h1 style={{ textAlign: "center" }}>
          The number {this.state.num} is{" "}
          {this.state.isPrime === true
            ? "prime"
            : this.state.isPrime === false
            ? "not prime"
            : "unknown"}
          .
        </h1>
      </>
    );
  }
}

export default PrimeOrNot;
