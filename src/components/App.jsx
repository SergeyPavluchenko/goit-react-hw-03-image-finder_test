import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = { searchText: '' };

  searchValues = text => {
    console.log(text);
    this.setState({ searchText: text });
  };

  render() {
    return (
      <Layout>
        <Searchbar onAnswerText={this.searchValues} />
        <GlobalStyled />
      </Layout>
    );
  }
}
