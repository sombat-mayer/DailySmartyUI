import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPost from './recentPost';

export default class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SearchBar />
        <RecentPost />
      </div>
    );
  }
}
