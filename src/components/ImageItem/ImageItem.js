import React, { Component } from 'react';
import { ImgPic } from './ImageItemStyled';

export class ImageItem extends Component {
  render() {
    return (
      <>
        <div>
          <ImgPic
            src={this.props.image.webformatURL}
            alt={this.props.image.tags}
          />
          <p>{this.props.image.tags}</p>
        </div>
      </>
    );
  }
}
