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
			<article className="col-6 col-12-xsmall work-item">
				<Link href={this.state.src}>
					<a className="image fit thumb">
						<img src={this.state.src} alt="" /></a>
				</Link>
				<h3>
					<Link href={this.state.href}>
						<a> {this.state.title} </a>	
					</Link>
					</h3>
				<p> {this.state.children} </p>
			</article>
		);
	}
}

export default Card;