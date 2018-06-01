import React from 'react';
class Square extends React.Component {
//	constructor(props) {
//		super(props);
		//this.state = {
		//	value: props.value
		//};
//	}
	
	cellClick(evt) {
		// clickHandler is injected by HOC
		if (this.props.clickHandler) {
			this.props.clickHandler(this.props.index);
		}
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

export default Square;
