import React from 'react';
import { connect } from "react-redux";
import { stepGame } from "../../store/actions";
class ConnectedSquare extends React.Component {
//	constructor(props) {
//		super(props);
		//this.state = {
		//	value: props.value
		//};
//	}
	
	cellClick(evt) {
		//console.log('Click evt', evt);
		if (this.props.stepGame) {
			this.props.stepGame(this.props.index);
		}
		//if (this.props.onClick) {
		//	this.props.onClick();
		//} else {
		//	console.log('Missing upstream click event!');
		//}
		//this.setState({value: 'X'});
	}
	
	render() {
		return (
			<button className="square" onClick={(evt) => this.cellClick(evt)}>
			{this.props.value}
			</button>
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    stepGame: value => dispatch(stepGame(value))
  };
};

const Square = connect(null, mapDispatchToProps)(ConnectedSquare);
export default Square;
