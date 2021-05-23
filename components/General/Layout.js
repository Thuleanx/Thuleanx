import HeadJS from './HeadJS';
import BodyJS from './BodyJS';
import Footer from './Footer';
import Header from './Header';

import Meta from "./Meta";

export default function Layout({preview, children}) {
	return (
		<>
			<Meta/>
			<HeadJS/>
			<div className="is-preload">
				<Header/>
				<main id="main">
					{children}
				</main>
				<Footer/>
			</div>
			<BodyJS/>
		</>
	)
}