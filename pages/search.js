import Base from "@layouts/Baseof";
import Posts from "@layouts/partials/Posts";
import { getSinglePages } from "@lib/contents";
import { useAppContext } from "context/state";
import { useRouter } from "next/router";

const SearchPage = ({ authors }) => {
  const router = useRouter();
  const { query } = router;
  const { posts } = useAppContext();

  let searchItem = posts.filter((product) => {
    if (
      product.frontmatter.title.toLowerCase().includes(query.key) ||
      product.frontmatter.title.toUpperCase().includes(query.key) ||
      product.frontmatter.title.includes(query.key)
    ) {
      return product;
    } else if (
      product.frontmatter.categories.find((c) => c.includes(query.key))
    ) {
      return product;
    } else if (product.frontmatter.tags.find((c) => c.includes(query.key))) {
      return product;
    }
  });

  return (
    <Base>
      <div className="section">
        <div className="container max-w-[1000px]">
          <h2 className="mb-2">
            Search results for <span className="text-primary">{query.key}</span>
          </h2>
          <Posts posts={searchItem} authors={authors} />
        </div>
      </div>
    </Base>
  );
};

export default SearchPage;
export const getStaticProps = () => {
  const authors = getSinglePages("content/authors");
  return {
    props: {
      authors: authors,
    },
  };
};
