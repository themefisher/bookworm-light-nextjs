import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { slugify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// tag page
const Tag = ({ params }) => {
  const tag = params.tag;
  const posts = getSinglePage(`content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.tags.find((tag) => slugify(tag).includes(params.tag))
  );
  const authors = getSinglePage("content/authors");

  return (
    <>
      <SeoMeta title={tag} />
      <div className="section">
        <div className="container">
          <h1 className="h2 mb-8 text-center">
            Showing posts from <span className="text-primary">{tag}</span> tag
          </h1>
          <Posts posts={filterPosts} authors={authors} />
        </div>
      </div>
    </>
  );
};

export default Tag;

// tag page routes
export const generateStaticParams = () => {
  const allCategories = getTaxonomy(`content/${blog_folder}`, "tags");

  const paths = allCategories.map((tag) => ({
    tag: tag,
  }));

  return paths;
};
