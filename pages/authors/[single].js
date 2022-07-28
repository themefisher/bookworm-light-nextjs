import PostSingle from "@layouts/PostSingle";
import { getAllSlug, getAllPage } from "@lib/contents";
import { serialize } from "next-mdx-remote/serialize";

const Article = ({ post, mdxSource }) => {
  // const { frontmatter, slug, content } = post[0];

  return (
    <></>
    // <PostSingle
    // // frontmatter={frontmatter}
    // // content={content}
    // // slug={slug}
    // // mdxSource={mdxSource}
    // />
  );
};

export const getStaticPaths = () => {
  const allSlug = getAllSlug("content/authors");
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

export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const allBlogs = getAllPage("content/authors");
  const singlePost = allBlogs.filter((p) => p.slug == single);

  const mdxSource = await serialize(singlePost[0].content);

  return {
    props: {
      post: singlePost,
      slug: single,
      mdxSource: mdxSource,
    },
  };
};

export default Article;
