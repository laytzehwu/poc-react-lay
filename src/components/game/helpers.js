const calculateWinner = (squares) => {

  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

	if (squares) {
		for (let i = 0; i < lines.length; i ++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			  return squares[a];
			}
		}
	}
	return null;
}

exports.calculateWinner = calculateWinner;

exports.calcBackward = (step, history) => {
  return {
    history: history.slice(),
    xIsNext: (step % 2) === 0,
    stepNumber: step
  }
}

exports.calcMovement = (step, history, stepNumber, xIsNext) => {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];
    const squares = current.squares.slice();
    const preVal = squares[step];
    if (!calculateWinner(squares) && preVal !== 'X' && preVal !== 'O') {
      squares[step] = xIsNext ? 'X' : 'O';
      hist.push({squares});

      return {
        history: hist,
        xIsNext: !xIsNext,
        stepNumber: stepNumber+1
      }
    }
    return {
      history: hist,
      xIsNext,
      stepNumber
    }
}

exports.winningMessage = (winner, xIsNext) => {

  const XorO = xIsNext ? 'X' : 'O' ;

  if (winner) {
    return `Winner: ${winner}`
  } else {
    return `Next player: ${XorO}`
  }
}
