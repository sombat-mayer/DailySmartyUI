import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPost from './recentPost';

export default class Home extends Component {

  handleSearBarSubmit(query) {
    console.log("trying to handle submit for query", query);
    this.props.history.push('/results');
  }

  render() {
    return (
      <div>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearBarSubmit(query)} />
        <RecentPost />
      </div>
    );
  }
}
