import Link from "next/link";
import DateFormatter from "../General/Date-Formatter";
import extension from "../../styles/extension.module.css";

export default function BlogPreview({title, coverImage, date, author, slug, excerpt}) {
	return (
		<li>
			<div className="row">
				<div className="col-9">
					<div className={extension.postpreview}>
						<span className={"image left " + extension.postpreviewimg}>
							<img src={coverImage} alt="" className={extension.pixelart}/></span>
						<Link href={`/posts/${slug}`}>
							<a><h3 className={extension.truncate}>{title}</h3></a>
						</Link>
						<div className={extension.last_line}>
							{excerpt}
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="align-right">
						<DateFormatter dateString={date} />
					</div>
				</div>
			</div>
		</li>
	)
}
