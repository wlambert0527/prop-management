import React, { Component } from 'react';
import JournalList from './journals/journal_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>
        <JournalList heading="fitter & happier thank you" />
      </div>
    );
  }
}