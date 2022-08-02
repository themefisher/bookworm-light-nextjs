import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import PostSingle from "@layouts/PostSingle";
import config from "@config/config.json";

import {
  getRegularPage,
  getRegularPageSlug,
  getSinglePages,
  getSinglePagesSlug,
} from "@lib/contents";
import { plainify } from "@lib/utils/textConverter";
const { blog_folder } = config.settings;
// for all regular pages
const RegularPages = ({ slug, data, postsSlug, authors, posts }) => {
  const { title, meta_title, description, image, noindex, canonical } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={plainify(title)}
      description={
        description ? plainify(description) : plainify(content.slice(0, 120))
      }
      meta_title={plainify(meta_title)}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {/* single post */}
      {postsSlug.includes(slug) ? (
        <PostSingle post={data} authors={authors} posts={posts} />
      ) : slug === "contact" ? (
        <Contact data={data} />
      ) : slug === "about" ? (
        <About data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getRegularPageSlug("content");
  const paths = slugs.map((slug) => ({
    params: {
      regular: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);
  // get posts folder slug for filtering
  const postsSlug = getSinglePagesSlug(`content/${blog_folder}`);
  // aughor data
  const authors = getSinglePages("content/authors");
  // all single pages
  const posts = getSinglePages(`content/${blog_folder}`);

  return {
    props: {
      slug: regular,
      data: allPages,
      postsSlug: postsSlug,
      authors: authors,
      posts: posts,
    },
  };
};
