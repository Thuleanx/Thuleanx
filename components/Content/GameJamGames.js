
import Link from 'next/link';
import { Fragment } from 'react';
import { ITCH_URL } from '../../lib/constants';
import Card from '../Widget/Card';

export default function GameJams() {
	return (
		<Fragment>
				<h2>Recent Game Jam games</h2>
				<div className="row">
					<Card href="https://thuleanx.itch.io/poiura" src="images/thumbs/poiura.gif" title="Poiura">
		Short narrative horror game about a Baker and what lies on the outer edge of his town.
					</Card>
					<Card href="https://thuleanx.itch.io/raster" src="images/thumbs/raster.gif" title="Raster">
		Rhythm game where the beats of the music is your enemy. Can a square survive an onslaught of bullets?
					</Card>
					<Card href="https://thuleanx.itch.io/aku" src="images/thumbs/aku.gif" title="Aku">
		A platformer about a future priest who enjoys his first first time outside the shrine.
					</Card>
					<Card href="https://valkoy.itch.io/within-the-woods" src="images/thumbs/wtw.gif" title="Within the Woods">
		Within the Woods is a platformer about a racoon lost in the woods. The racoon soon finds that there are other creatures occupying the forest, creatures that thirst for his blood.
					</Card>
					<Card href="https://thuleanx.itch.io/sleepless" src="images/thumbs/sleepless.gif" title="Sleepless">
		A little penguin trying to get some shut-eye, after a bit of platforming. 
					</Card>
					<Card href="https://thuleanx.itch.io/a-short-walk" src="images/thumbs/ashortwalk.gif" title="A Short Walk">
		A relaxing walk in the park, with a little bit of platforming. You need to explore and reach the next campfire in time, or there will be some unfortunate consequences. It's all fun and nothing dangerous.
					</Card>
				</div>
				<ul className="actions">
					<Link href={ITCH_URL}>
						<li><a  className="button">Full List of Short Games</a></li>
					</Link>
				</ul>
		</Fragment>
	);
}