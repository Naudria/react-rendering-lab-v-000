import React from 'react';

class Circle extends React.Component {

//add a shouldComponentUpdate() which 
//will return true only if the new color being passed 
//in is different from the existing one.

shouldComponentUpdate(nextProps, nextState) {
	return Boolean(this.props.color !== nextProps.color);
}

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
