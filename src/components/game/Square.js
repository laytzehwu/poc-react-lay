import React from 'react';
//TODO - remove
import { connect } from "react-redux";
//TODO - remove
import { stepGame } from "../../store/actions";
/*
class ConnectedSquare extends React.Component {

	cellClick(evt) {

		if (this.props.stepGame) {
			this.props.stepGame(this.props.index);
		}
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
*/

const Square = ({idx, cellClick}) => {
  return (
  	<button className="square" onClick={() => cellClick(idx)}>
		{idx}
		</button>
	);
}

export default Square;
