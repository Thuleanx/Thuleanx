import Head from 'next/head';
import React, { Component } from 'react';

class HeadJS extends Component {
	onChange(newState) { this.setState(newState); }
	render() {
		return <Head>
			<script src="/js/jquery.min.js"/>
			<script src="/js/jquery.poptrox.min.js"/>
			<script src="/js/breakpoints.min.js"/>
			<script src="/js/browser.min.js"/>
		</Head>;
	}
}

export default HeadJS;