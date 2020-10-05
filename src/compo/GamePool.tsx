import React from 'react';
import Option from './Option';

interface GamePoolProps {
	handleClick: (type: number) => void;
}

function GamePool(props: GamePoolProps) {
	return (
		<div className='game-pool'>
			<Option type={1} onClick={props.handleClick} />
			<Option type={2} onClick={props.handleClick} />
			<Option type={3} onClick={props.handleClick} />
		</div>
	);
}

export default GamePool;
