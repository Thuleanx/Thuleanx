import React, { Component, Fragment } from 'react';

class BodyJS extends Component {
	onChange(newState) { this.setState(newState); }
	render() {
		return (
			<Fragment>
				<script src="/js/util.js"></script>,
				<script src="/js/main.js"></script>
			</Fragment>
		);
	}
}

export default BodyJS;