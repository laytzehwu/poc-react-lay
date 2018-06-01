import React from 'react';
import Square from './Square';
import utl from './utl';
import uuidv1 from "uuid";

export default class Board extends React.Component {

	constructor(props) {
		super(props);
		this.stepGame = this.props.stepGame;
	}
  
  render() {
	  const iCols = 3;
	  const iLen = this.props.squares.length;
	  const iRows = Math.ceil(iLen / iCols);
	  const aRows = Array(iRows).fill().map((v,i) => ({
		  index: i,
		  aCol: this.props.squares.map((sq, iSQIdx) => ({id: uuidv1(), index:iSQIdx, value: sq})).filter(
			(sq, iSQIdx) => (iSQIdx >= iCols * i) && (iSQIdx < iCols * (i + 1))
		  )
	  }));
	  const WrappedSquare = utl.injectClickHandler(Square, this.stepGame);
	  
	  return (
		<div>
		{aRows.map(elRow => (
			<div key={elRow.index} className="board-row">
			{elRow.aCol.map(elCol => (
			<WrappedSquare
				key={elCol.index}
				index={elCol.index}
				value={elCol.value}
			/>
			))}
			</div>
		))}
		</div>
	  );
  }
}
