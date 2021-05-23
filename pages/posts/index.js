import Head from 'next/head';
import PostPreview from '../../components/Blog/PostPreview';
import Container from "../../components/General/Container";
import Layout from "../../components/General/Layout";
import { getAllPosts } from "../../lib/api";

export default function Index({allPosts}) {
	return (
		<Layout>
			<Head><title>All Posts</title></Head>
			<Container>
				<section id="one">
					<header className="major">
						<h1>All Posts</h1>
					</header>
						<div className="row">
							<div className="col-12">
								<ul className="alt">
									{allPosts.map((post) => (
										<PostPreview 
											key={post.slug} 
											slug={post.slug} 
											title={post.title}
											coverImage={post.coverImage}
											date={post.date}
											author={post.author}
											excerpt={post.excerpt}
										/>
									))}
								</ul>
							</div>
						</div>
				</section>
			</Container>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	]);
	return {
		props: { allPosts }
	}
}