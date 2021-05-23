import PostTitle from '../../components/Blog/PostTitle';
import DateFormatter from '../../components/General/Date-Formatter';
import CoverImage from '../Widget/CoverImage';
import extension from '../../styles/extension.module.css';

export default function PostHeader({ title, coverImage, date, author, slug, excerpt}) {
	return (
		<div className={`major ${extension.clearfix}`}>
			<div className={`image left ${extension.posticon}`}>
				{coverImage? <CoverImage title={title} src={coverImage} slug={slug} pixelart="true"/> : <></>}
			</div>

			<span className={`${extension.postheaderbody}`}>
				<span className={extension.float_left}>
					{author.name}
				</span>
				<span className={extension.float_right}>
					<DateFormatter dateString={date} />
				</span>
				<br/>
				<PostTitle>{title}</PostTitle>
				{excerpt}
			</span>
		</div>
	);
}
