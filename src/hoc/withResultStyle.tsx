import React from 'react';

interface CompoProps {}
interface CompoStates {}

export default (Compo: any) => {
	return class extends Compo {
		constructor(props: CompoProps) {
			super(props);

			this.state = {};
		}

		render() {
			const { ...passTroughProps } = this.props;

			console.log('logic');

			return <Compo {...passTroughProps} />;
		}
	};
};
