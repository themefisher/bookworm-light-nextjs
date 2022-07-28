import Base from "@layouts/Baseof";
import { getAllPage, getSinglePages } from "@lib/contents";
import { getTaxonomy } from "@lib/taxonomies";
import Posts from "@partials/Posts";

// tag page
const Tag = ({ tag, posts, authors }) => {
  return (
    <Base title={tag}>
      <div className="section">
        <div className="container">
          <h1>Showing posts from {tag} tag</h1>
          <Posts posts={posts} authors={authors} />
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
  const posts = getSinglePages("content/posts");
  const filterPosts = posts.filter((post) =>
    post.frontmatter.tags.includes(params.tag)
  );
  const authors = getAllPage("content/authors");

  return {
    props: { posts: filterPosts, tag: params.tag, authors: authors },
  };
};
