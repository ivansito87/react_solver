import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 1,
    imageUrl: 'https://picsum.photos/200'
  }

  handleButtonClick() { 
    
    // Figure out why is this breaking
    console.log('yes');
  }

  formatCount() { 
    const { counter } = this.state;
return counter === 0 ? "Zero" : counter;

    
  }

    render() { 
        return (
          <React.Fragment>
            <img src={this.state.imageUrl} alt=''/>
            <h1>{this.formatCount()}</h1>
            <button onClick={this.handleButtonClick}>Counter</button>
          </React.Fragment>
        );
    }
}
 
export default Counter;