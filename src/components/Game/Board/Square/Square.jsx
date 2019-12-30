import React from 'react';

class Square extends React.Component {
  constructor() {
    super();

    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={ () => alert('click') }>
        { this.props.value }
      </button>
    );
  }
}

export default Square;
