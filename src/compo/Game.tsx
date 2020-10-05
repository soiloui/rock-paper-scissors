import React from 'react';
import GamePool from './GamePool';
import Score from './Score';

interface GameStates {
	scoresHistory: string[][];
	scores: Array<number>;
	status: string;
	statusClass: string;
	nick: string;
	nickValue: string;
}
interface GameProps {}

class Game extends React.PureComponent<GameProps, GameStates> {
	constructor(props: {}) {
		super(props);

		this.state = {
			scoresHistory: [],
			scores: [0, 0],
			status: 'Paper? Scissors? Rock?',
			statusClass: '',
			nick: 'Player',
			nickValue: 'Player',
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (type: number) => {
		const scores: Array<number> = [...this.state.scores];
		const counterType = Math.ceil(Math.random() * 3);

		if (type === counterType) {
			this.setState({ status: 'Tie. Try Again', statusClass: 'status-tie' });
		} else if (
			(type === 1 && counterType === 2) ||
			(type === 2 && counterType === 3) ||
			(type === 3 && counterType === 1)
		) {
			scores[1] += 1;
			this.setState({
				scores: scores,
				status: `${this.state.nick}'s defeat. Try Again`,
				statusClass: 'status-lose',
			});
		} else {
			scores[0] += 1;
			this.setState({
				scores: scores,
				status: `${this.state.nick}'s win! Grats`,
				statusClass: 'status-win',
			});
		}

		this.makeHistory(type, counterType);
		this.classTimer();
	};

	makeHistory = (type: number | string, counterType: number | string) => {
		switch (type) {
			case 1:
				type = 'paper';
				break;
			case 2:
				type = 'scissors';
				break;
			case 3:
				type = 'rock';
				break;
			default:
				type = 'sth went wrong';
		}
		switch (counterType) {
			case 1:
				counterType = 'paper';
				break;
			case 2:
				counterType = 'scissors';
				break;
			case 3:
				counterType = 'rock';
				break;
			default:
				counterType = 'sth went wrong';
		}

		const scoresHistory: string[][] = this.state.scoresHistory;
		scoresHistory.push([`Player: ${type}`, `Computer: ${counterType}`]);

		this.setState({ scoresHistory: scoresHistory });
	};

	classTimer = () => {
		setTimeout(() => {
			this.setState({ statusClass: '' });
		}, 400);
	};

	handleNickChange = (e: any) => {
		this.setState({ nickValue: e.target.value });
	};

	handleNickSubmit = (e: any) => {
		e.preventDefault();

		this.setState({ nick: this.state.nickValue });
	};

	render() {
		const { scores, nick, nickValue, status, statusClass } = this.state;
		const scoresMap = () => {
			return scores.map((score, i) => {
				if (i === 0) {
					return <Score key={i} nick={nick} score={score} />;
				} else {
					return <Score key={i} nick={'Computer'} score={score} />;
				}
			});
		};

		return (
			<div>
				<form className='nick-form' onSubmit={this.handleNickSubmit}>
					<label htmlFor='nick-input'>Nickname</label>
					<input
						type='text'
						id='nick-input'
						maxLength={20}
						className='nick-form__input'
						value={nickValue}
						onChange={this.handleNickChange}
					/>
				</form>

				<p className={`status ${statusClass}`}>{status}</p>
				<GamePool handleClick={this.handleClick} />
				<div className='scores'>{scoresMap()}</div>
			</div>
		);
	}
}

export default Game;
