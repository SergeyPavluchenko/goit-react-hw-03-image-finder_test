import React, { Component } from 'react';
import { GlobalStyled } from './GlobalStyled';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import { SearchAPI } from './API';
import { SpinerLoader } from './SpinerLoader/SpinerLoader';

export class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
    error: null,
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   this.setState({ isLoading: true, error: null });
  //   const { searchText } = this.state;
  //   if (prevState.searchText !== searchText) {
  //     const res = SearchAPI(searchText);
  //     return res;
  //   }
  // };

  componentDidUpdate = (prevProps, prevState) => {
    const { searchText } = this.state;
    if (prevState.searchText !== searchText) {
      this.response();
    }
  };

  response = async () => {
    const { searchText } = this.state;
    this.setState({ isLoading: true, error: null });
    try {
      const res = await SearchAPI(searchText);
      console.log(res);
      return res;
    } catch (error) {
      toast.error('Щось пішло не так 🤷‍♀️', { duration: 1000 });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchValues = text => {
    console.log(text);
    this.setState({ searchText: text.search });
    console.log(this.state);
  };

  render() {
    const { isLoading } = this.state;
    return (
      <Layout>
        <Searchbar onAnswerText={this.searchValues} />
        {isLoading && <SpinerLoader />}
        <GlobalStyled />
        <Toaster />
      </Layout>
    );
  }
}
