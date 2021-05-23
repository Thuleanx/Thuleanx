import Link from 'next/link';

export default function Header() {
	return (
		<header id="header">
			<div className="inner">
				<Link href="/">
					<a className="image avatar"><img src="/images/avatar.png" alt="" /></a>
				</Link>
				<h1><strong>Hi, I'm Thuleanx</strong>, a competitive programmer and game jam enthusiast<br />
				{/* crafted by <a href="http://html5up.net">HTML5 UP</a>. */}
				</h1>
			</div>
		</header>
	);
}