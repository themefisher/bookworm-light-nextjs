import Base from "@layouts/Baseof";
import Posts from "@layouts/partials/Posts";
import { getSinglePages } from "@lib/contents";
import { useSearchContext } from "context/state";
import { useRouter } from "next/router";

const SearchPage = ({ authors }) => {
  const router = useRouter();
  const { query } = router;
  const keyword = String(query.key).toLowerCase();
  const { posts } = useSearchContext();

  const searchResults = posts.filter((product) => {
    if (product.frontmatter.title.toLowerCase().includes(keyword)) {
      return product;
    } else if (
      product.frontmatter.categories.find((category) =>
        category.toLowerCase().includes(keyword)
      )
    ) {
      return product;
    } else if (
      product.frontmatter.tags.find((tag) =>
        tag.toLowerCase().includes(keyword)
      )
    ) {
      return product;
    } else if (product.content.toLowerCase().includes(keyword)) {
      return product;
    }
  });

  return (
    <Base title={`Search results for ${query.key}`}>
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Search results for <span className="text-primary">{query.key}</span>
          </h1>
          {searchResults.length > 1 ? (
            <Posts posts={searchResults} authors={authors} />
          ) : (
            <div className="py-24 text-center text-h3 shadow">
              No Search Found
            </div>
          )}
        </div>
      </div>
    </Base>
  );
};

export default SearchPage;

// get authors data
export const getStaticProps = () => {
  const authors = getSinglePages("content/authors");
  return {
    props: {
      authors: authors,
    },
  };
};
