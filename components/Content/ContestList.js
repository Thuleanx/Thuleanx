import Link from 'next/link';
import { Fragment } from 'react';
import CardNoLink from '../Widget/CardNoLink';

export default function ContestList() {
	return (
		<Fragment>
				<h2>Recent Contests</h2>
				<div className="row">
					<CardNoLink href="https://codingcompetitions.withgoogle.com/codejam" 
						src="images/thumbs/codejam.jpg" 
						title="(Upcoming) Google Code Jam Round 3">
						Google holds a global coding contest every year, where participants solve challenging algorithmic puzzles. 
						The top 25 of the 1000 contestants of Round 3 will compete at the World Finals for a cash prize of $15000.
					</CardNoLink>
					<CardNoLink href="https://worldfinals.icpc.global/" src="images/thumbs/icpc2020wf.png" title="(Upcoming) ICPC 2020 World Finals">
						ICPC is the most prestigious collegiate programming contest. 
						North America will send 19 teams to Moscow to compete for the title of World Champion and we happen to be one of them.
					</CardNoLink>
					<CardNoLink href="https://www.cecs.ucf.edu/NAC-NAPC/" src="images/thumbs/icpc2021nac.jpg" title="(Upcoming) ICPC 2021 North American Championship">
						We are invited to the 2021 ICPC North American Championship, where North American universities compete for spots for the 2021 ICPC World Finals.
					</CardNoLink>
					<CardNoLink href="https://nac.icpc.global/history/2020/" src="images/thumbs/icpc2020nac.jpg" title="ICPC 2020 North American Championship">
						We came 15th in the ICPC North American Championship in 2020, a 5 hour long contest packed with complex algorithmic problems. This is where North American compete for spots for World Finals.
					</CardNoLink>
				</div>
				{/* <ul className="actions">
					<Link href="https://thuleanx.itch.io/">
						<li><a  className="button">Full List of Short Games</a></li>
					</Link>
				</ul> */}
		</Fragment>
	);
}