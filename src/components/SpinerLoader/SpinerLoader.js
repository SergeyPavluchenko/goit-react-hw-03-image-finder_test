import React, { Component } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Loader } from './SpinerLoaderStyled';
// import { MutatingDots } from './SpinerLoaderStyled';

export class SpinerLoader extends Component {
  render() {
    return (
      <Loader>
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Loader>
    );
  }
}
