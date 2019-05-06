import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  //implement a componentWillReceiveProps() 
  //which will compare the nextProps.rating 
  //(passed into the method) to this.props.rating and 
  //calls this.setState with the correct values.

componentWillReceiveProps(nextProps) {
  this.setState({
    increasing: nextProps.rating > this.props.rating,
    decreasing: nextProps.rating < this.props.rating
  })
}

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
