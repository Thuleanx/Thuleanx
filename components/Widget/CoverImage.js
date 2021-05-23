import Link from 'next/link'
import Image from 'next/image'
import extension from '../../styles/extension.module.css';

export default function CoverImage({ title, src, slug, pixelart}) {
	return (
	 	<Link as={`/posts/${slug}`} href="/posts/[slug]">
			<a className="image fit">
				<img 
					src={src}
					alt={`Cover Image for ${title}`}
					className={pixelart?extension.pixelart:''}
				/>
			</a>
		</Link>
	);
}
