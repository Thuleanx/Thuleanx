import Link from 'next/link';
import React, { Component, Fragment } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			href: props.href,
			src: props.src,
			title: props.title,
			description: props.description,
			children: props.children
		};
	}
	onChange(newState) { this.setState(newState); }
	render() {
		return (
			<div className="col-6 col-12-xsmall">
				<div className="image fit">
					<img src={this.state.src} alt="" /></div>
				<h3>
					<Link href={this.state.href}>
						<a> {this.state.title} </a>	
					</Link>
				</h3>
				<p> {this.state.children} </p>
			</div>
		);
	}
}

export default Card;