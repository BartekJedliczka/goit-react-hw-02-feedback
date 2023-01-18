import React, { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback"></Section>
      </div>
    );
  }
}

export default App;
