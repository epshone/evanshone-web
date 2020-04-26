import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 'home'
    }
  };

  render() {
    return (
      <p>
        Hello World 2.0
      </p>
    )
  }
}
