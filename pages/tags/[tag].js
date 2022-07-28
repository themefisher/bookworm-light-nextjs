import Base from "@layouts/Baseof";
import { getSinglePages } from "@lib/contents";
import { getTaxonomy } from "@lib/taxonomies";
import Posts from "@partials/Posts";

// tag page
const Tag = ({ tag, post }) => {
  return (
    <Base title={tag}>
      <div className="section">
        <div className="container">
          <h1>Showing posts from {tag} tag</h1>
          <Posts post={post} />
        </div>
      </div>
    </Base>
  );
};

export default Tag;

// tag page routes
export const getStaticPaths = () => {
  const allCategories = getTaxonomy("content/posts", "tags");

  const paths = allCategories.map((tag) => ({
    params: {
      tag: tag,
    },
  }));

  return { paths, fallback: false };
};

// tag page data
export const getStaticProps = ({ params }) => {
  const allPosts = getSinglePages("content/posts");

  const posts = allPosts.filter((data) =>
    data.frontmatter.tags.includes(params.tag)
  );

  return { props: { post: posts, tag: params.tag } };
};
