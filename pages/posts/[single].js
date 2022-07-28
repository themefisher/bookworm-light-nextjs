import PostSingle from "@layouts/PostSingle";
import { getAllSlug, getSinglePages } from "@lib/contents";
import { parseMDX } from "@lib/utils/mdxParser";

// post single layout
const Article = ({ post, mdxContent }) => {
  const { frontmatter, content } = post[0];

  return (
    <PostSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
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
  const allBlogs = getSinglePages("content/posts");
  const singlePost = allBlogs.filter((p) => p.slug == single);
  const mdxContent = await parseMDX(singlePost[0].content);

  return {
    props: {
      post: singlePost,
      mdxContent: mdxContent,
    },
  };
};

export default Article;
