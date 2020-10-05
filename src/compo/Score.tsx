import React from 'react';

interface ScoreProps {
	nick: string;
	score: number;
}

class Score extends React.PureComponent<ScoreProps> {
	render() {
		return (
			<div className='score'>
				<em>{this.props.nick}</em>
				<p className='score__colon'>:</p>
				<p>{this.props.score}</p>
			</div>
		);
	}
}

export default Score;
