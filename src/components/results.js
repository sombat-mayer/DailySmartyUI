import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearBarSubmit(query) {
        console.log(query);
    }

    render() {
        return (
            <div>
                <Logo size={55} />
                <SearchBar onSubmit={(query) => this.handleSearBarSubmit(query)} />
            </div>
        );
    }
}

export default Results;