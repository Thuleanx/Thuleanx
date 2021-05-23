import Link from 'next/link';
import { GITHUB_URL, MAIL_URL, SOUNDCLOUD_URL, TWITTER_URL } from '../../lib/constants';

export default function Footer() {
	return (
		<footer id="footer">
			<div className="inner">
				<ul className="icons">
					<li><a href={TWITTER_URL} className="icon brands fa-twitter">
						<span className="label">Twitter</span></a></li>
					<li><a href={GITHUB_URL} className="icon brands fa-github">
						<span className="label">Github</span></a></li>
					{/* <li><a href="#" className="icon brands fa-dribbble">
						<span className="label">Dribbble</span></a></li> */}
					<li><a href={SOUNDCLOUD_URL} className="icon brands fa-soundcloud">
						<span className="label">Soundcloud</span></a></li>
					<li><a href={MAIL_URL} className="icon solid fa-envelope"><span className="label">Email</span></a></li>
				</ul>
				<ul className="copyright">
					<li>&copy; Thuleanx</li>
					<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
				</ul>
			</div>
		</footer>
	);
}