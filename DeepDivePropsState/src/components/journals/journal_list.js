import React, { Component } from 'react';

const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft'},
    { title: 'Post Two', content: 'Post content', status: 'published'},
    { title: 'Post Three', content: 'Post content', status: 'published'},
    { title: 'Post Four', content: 'Post content', status: 'published'},
];

const JournalEntry = props => {
    return(
        <div>
        <h1>props.title</h1>
        <p>props.content</p>
        </div>
    );
}

export default class JournalList extends Component {
        constructor(props) {
            super();
            
            this.state ={
                journalData: rawJournalData,
                greeting: "hi there",
                isOpen: true,
            };
        }
    render() {
        return <h2>{this.props.heading}</h2>;
        <JournalEntry title="some title" content="more content" />
    }
}