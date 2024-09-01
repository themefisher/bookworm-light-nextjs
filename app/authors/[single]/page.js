import AuthorSingle from "@layouts/AuthorSingle";
import { getSinglePage } from "@lib/contentParser";

// post single layout
const Article = async ({ params }) => {
  //
  const { single } = params;
  const getAuthors = getSinglePage("content/authors");
  const author = getAuthors.filter((author) => author.slug == single);
  //
  const { frontmatter, content } = author[0];

  return <AuthorSingle frontmatter={frontmatter} content={content} />;
};

// get authors single slug
export const generateStaticParams = () => {
  const allSlug = getSinglePage("content/authors");
  const paths = allSlug.map((item) => ({
    single: item.slug,
  }));

  return paths;
};

export default Article;
