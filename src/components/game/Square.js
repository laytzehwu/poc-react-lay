import React from 'react';
const Square = ({value, cellClick}) => {
  return (
  	<button className="square" onClick={() => cellClick(value)}>
		{value}
		</button>
	);
}
export default Square;
