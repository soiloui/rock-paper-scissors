import React from 'react';
import PaperImg from '../assets/paper.png';
import ScissorsImg from '../assets/scissors.png';
import RockImg from '../assets/rock.png';

interface OptionProps {
	type: number;
	onClick: (type: number) => void;
}

function Option(props: OptionProps) {
	let image;
	let name;

	switch (props.type) {
		case 1:
			image = PaperImg;
			name = 'paper';
			break;
		case 2:
			image = ScissorsImg;
			name = 'scissors';
			break;
		case 3:
			image = RockImg;
			name = 'rock';
			break;
		default:
			image = '';
			name = 'Something went wrong';
	}

	return (
		<div onClick={() => props.onClick(props.type)} className='option-box'>
			<img src={image} alt={name} />
		</div>
	);
}

export default Option;
