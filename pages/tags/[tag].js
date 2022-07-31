import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getSinglePages } from "@lib/contents";
import { getTaxonomy } from "@lib/taxonomies";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// tag page
const Tag = ({ tag, posts, authors }) => {
  return (
    <Base title={tag}>
      <div className="section">
        <div className="container max-w-[1000px]">
          {markdownify(
            `Showing posts from ${tag} tag`,
            "h1",
            "h2 mb-8 text-center"
          )}
          <Posts posts={posts} authors={authors} />
        </div>
      </div>
    </Base>
  );
};

export default Tag;

// tag page routes
export const getStaticPaths = () => {
  const allCategories = getTaxonomy(`content/${blog_folder}`, "tags");

  const paths = allCategories.map((tag) => ({
    params: {
      tag: tag,
    },
  }));

  return { paths, fallback: false };
};

// tag page data
export const getStaticProps = ({ params }) => {
  const posts = getSinglePages(`content/${blog_folder}`);
  const filterPosts = posts.filter((post) =>
    post.frontmatter.tags.includes(params.tag)
  );
  const authors = getSinglePages("content/authors");

  return {
    props: { posts: filterPosts, tag: params.tag, authors: authors },
  };
};
