import { useRouter } from 'next/router'
import Head from 'next/head';
import ErrorPage from 'next/error'

import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

import Layout from '../../components/General/Layout';
import PostTitle from '../../components/Blog/PostTitle';
import PostHeader from '../../components/Blog/PostHeader';
import PostBody from '../../components/Blog/PostBody';
import Container from '../../components/General/Container';

export default function Post({post, morePosts, preview}) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug)
    	return <ErrorPage statusCode={404} />;
	return  (
		<Layout>
			<Container>
				{router.isFallback?(
					<PostTitle>Loading...</PostTitle>
				): (
					<>
						<article>
							<Head>
								<title>{post.title}</title>
                				<meta property="og:image" content={post.ogImage.url} />
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
							/>
              				<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}