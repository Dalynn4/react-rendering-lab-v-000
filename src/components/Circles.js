import React from 'react';
import Circle from './Circle';

class Circles extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      circles: [
        { color: 'red' },
        { color: 'yellow' },
        { color: 'green' },
      ]
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.circles[0] !== nextState.circles[0] || this.state.circles[1] !== nextState.circles[1] || this.state.circles[2] !== nextState.circles[2])
  }

  handleClick = () => {
    const newCircles = this.state.circles.map(circle => {
      if (circle.color === 'red') return { color: 'green' };
      if (circle.color === 'green') return { color: 'red' };
      return circle;
    });
    console.log("\n💥 Red and green were swapped!");
    this.setState({ circles: newCircles });
  }

  render() {
    const renderCircles = this.state.circles.map((circle, index) =>
      <Circle color={circle.color} key={index} />
    );

    return (
      <div>
        <button onClick={this.handleClick}>Swap red and green</button>
        {renderCircles}
      </div>
    );
  }
}

export default Circles;
