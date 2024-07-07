import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';
import { qwe } from './API';

export class App extends Component {
  state = { searchText: '' };

  async componentDidMount() {
    try {
      const res = await qwe();
      console.log(res.data.hits);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }

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
