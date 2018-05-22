import React from 'react';
export default class Square extends React.Component {
	constructor(props) {
		super(props);
		//this.state = {
		//	value: props.value
		//};
	}
	
	cellClick(evt) {
		//console.log('Click evt', evt);
		if (this.props.onClick) {
			this.props.onClick();
		} else {
			console.log('Missing upstream click event!');
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