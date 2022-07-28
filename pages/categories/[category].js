import Base from "@layouts/Baseof";
import { getAllPage, getSinglePages } from "@lib/contents";
import { getTaxonomy } from "@lib/taxonomies";
import Posts from "@partials/Posts";

// category page
const Category = ({ category, posts, authors }) => {
  return (
    <Base title={category}>
      <div className="section">
        <div className="container">
          <h1>Showing posts from {category} category</h1>
          <Posts posts={posts} authors={authors} />
        </div>
      </div>
    </Base>
  );
};

export default Category;

// category page routes
export const getStaticPaths = () => {
  const allCategories = getTaxonomy("content/posts", "categories");

  const paths = allCategories.map((category) => ({
    params: {
      category: category,
    },
  }));

  return { paths, fallback: false };
};

// category page data
export const getStaticProps = ({ params }) => {
  const posts = getSinglePages("content/posts");
  const filterPosts = posts.filter((post) =>
    post.frontmatter.categories.includes(params.category)
  );
  const authors = getAllPage("content/authors");

  return {
    props: { posts: filterPosts, category: params.category, authors: authors },
  };
};
