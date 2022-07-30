import AuthorSingle from "@layouts/AuthorSingle";
import { getSinglePages, getSinglePagesSlug } from "@lib/contents";
import { parseMDX } from "@lib/utils/mdxParser";

// post single layout
const Article = ({ author, mdxContent }) => {
  const { frontmatter, content } = author[0];

  return (
    <AuthorSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
    />
  );
};

// get post single slug
export const getStaticPaths = () => {
  const allSlug = getSinglePagesSlug("content/authors");
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
  const getAuthors = getSinglePages("content/authors");
  const author = getAuthors.filter((author) => author.slug == single);
  const mdxContent = await parseMDX(author[0].content);

  return {
    props: {
      author: author,
      mdxContent: mdxContent,
      slug: single,
    },
  };
};

export default Article;
