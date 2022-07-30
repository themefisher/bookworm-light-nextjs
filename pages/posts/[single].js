import PostSingle from "@layouts/PostSingle";
import { getAllPage, getAllSlug, getSinglePages } from "@lib/contents";
import { parseMDX } from "@lib/utils/mdxParser";

// post single layout
const Article = ({ post, authors, mdxContent, slug }) => {
  const { frontmatter, content } = post[0];

  return (
    <PostSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
      authors={authors}
      slug={slug}
    />
  );
};

// get post single slug
export const getStaticPaths = () => {
  const allSlug = getAllSlug("content/posts");
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
  const posts = getSinglePages("content/posts");
  const post = posts.filter((p) => p.slug == single);
  const authors = getAllPage("content/authors");
  const mdxContent = await parseMDX(post[0].content);

  return {
    props: {
      post: post,
      authors: authors,
      mdxContent: mdxContent,
      slug: single,
    },
  };
};

export default Article;
