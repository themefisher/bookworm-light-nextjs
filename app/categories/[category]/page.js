import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// category page
const Category = ({ params }) => {
  const category = params.category;
  // SERVER SIDE RENDERING
  const posts = getSinglePage(`content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.categories.find((category) =>
      slugify(category).includes(params.category)
    )
  );
  const authors = getSinglePage("content/authors");
  //
  return (
    <>
      <SeoMeta title={category} />
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Showing posts from <span className="text-primary">{category}</span>{" "}
            category
          </h1>
          <Posts posts={filterPosts} authors={authors} />
        </div>
      </div>
    </>
  );
};

export default Category;

// category page routes
export async function generateStaticParams() {
  const allCategories = getTaxonomy(`content/${blog_folder}`, "categories");

  const paths = allCategories.map((category) => ({
    category: category,
  }));

  return paths;
}
