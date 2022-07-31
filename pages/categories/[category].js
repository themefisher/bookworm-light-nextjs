import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getSinglePages } from "@lib/contents";
import { getTaxonomy } from "@lib/taxonomies";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// category page
const Category = ({ category, posts, authors }) => {
  return (
    <Base title={category}>
      <div className="section">
        <div className="container max-w-[1000px]">
          {markdownify(
            `Showing posts from ${category} category`,
            "h1",
            "h2 mb-8 text-center"
          )}
          <Posts posts={posts} authors={authors} />
        </div>
      </div>
    </Base>
  );
};

export default Category;

// category page routes
export const getStaticPaths = () => {
  const allCategories = getTaxonomy(`content/${blog_folder}`, "categories");

  const paths = allCategories.map((category) => ({
    params: {
      category: category,
    },
  }));

  return { paths, fallback: false };
};

// category page data
export const getStaticProps = ({ params }) => {
  const posts = getSinglePages(`content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.categories.includes(params.category)
  );
  const authors = getSinglePages("content/authors");

  return {
    props: { posts: filterPosts, category: params.category, authors: authors },
  };
};
