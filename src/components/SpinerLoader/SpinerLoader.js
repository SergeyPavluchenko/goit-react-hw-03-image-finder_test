import React, { Component } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Loader } from './SpinerLoaderStyled';
// import { MutatingDots } from './SpinerLoaderStyled';

export class SpinerLoader extends Component {
  render() {
    return (
      <Loader>
        <MutatingDots />
      </Loader>
    );
  }
}
