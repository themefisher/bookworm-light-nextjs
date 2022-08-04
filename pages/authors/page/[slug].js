import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages, getSinglePagesSlug } from "@lib/contents";
import { parseMDX } from "@lib/utils/mdxParser";
import { markdownify } from "@lib/utils/textConverter";
import Authors from "@partials/Authors";

// blog pagination
const AuthorPagination = ({
  authorIndex,
  authors,
  currentPage,
  pagination,
}) => {
  const indexOfLastAuthor = currentPage * pagination;
  const indexOfFirstAuthor = indexOfLastAuthor - pagination;
  const totalPages = Math.round(authors.length / pagination);
  const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);
  const { frontmatter, content } = authorIndex;
  const { title } = frontmatter;

  return (
    <Base title={title}>
      <section className="section">
        <div className="container text-center">
          {markdownify(title, "h1", "h2 mb-16")}
          <Authors authors={currentAuthors} />
          <Pagination
            section="authors"
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
    </Base>
  );
};

export default AuthorPagination;

// get blog pagination slug
export const getStaticPaths = () => {
  const allSlug = getSinglePagesSlug("content/authors");
  const { pagination } = config.settings;
  const totalPages = Math.round(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get blog pagination content
export const getStaticProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const authors = getSinglePages("content/authors");
  const authorIndex = await getListPage("content/authors");
  const mdxContent = await parseMDX(authorIndex.content);

  return {
    props: {
      pagination: pagination,
      authors: authors,
      currentPage: currentPage,
      authorIndex: authorIndex,
      mdxContent: mdxContent,
    },
  };
};
