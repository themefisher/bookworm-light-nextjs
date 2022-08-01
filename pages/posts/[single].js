import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePages, getSinglePagesSlug } from "@lib/contents";
import { parseMDX } from "@lib/utils/mdxParser";
const { blog_folder } = config.settings;

// post single layout
const Article = ({ post, mdxContent, slug, posts, authors }) => {
  return (
    <PostSingle
      post={post}
      mdxContent={mdxContent}
      slug={slug}
      posts={posts}
      authors={authors}
    />
  );
};

// get post single slug
export const getStaticPaths = () => {
  const allSlug = getSinglePagesSlug(`content/${blog_folder}`);
  const paths = allSlug.map((slug) => ({
    params: {
      single: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// get post single content
export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const posts = getSinglePages(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug == single);
  const authors = getSinglePages("content/authors");
  const mdxContent = await parseMDX(post[0].content);

  return {
    props: {
      posts: posts,
      post: post,
      authors: authors,
      mdxContent: mdxContent,
      slug: single,
    },
  };
};

export default Article;
