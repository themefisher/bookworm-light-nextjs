import config from "@config/config.json";
import NotFound from "@layouts/404";
import About from "@layouts/About";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import SeoMeta from "@layouts/partials/SeoMeta";
import PostSingle from "@layouts/PostSingle";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
const { blog_folder } = config.settings;

// for all regular pages
const RegularPages = async ({ params }) => {
  // SERVER SIDE RENDERING
  const { regular: slug } = params;
  const pageData = await getRegularPage(slug);
  // get posts folder slug for filtering
  const getPostSlug = getSinglePage(`content/${blog_folder}`);
  const postSlug = getPostSlug.map((item) => item.slug);
  // author data
  const authors = getSinglePage("content/authors");
  // all single pages
  const posts = getSinglePage(`content/${blog_folder}`);
  //...

  const { title, meta_title, description, image, noindex, canonical, layout } =
    pageData.frontmatter;
  const { content } = pageData;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />

      {/* single post */}
      {postSlug.includes(slug) ? (
        <PostSingle
          slug={slug}
          post={pageData}
          authors={authors}
          posts={posts}
        />
      ) : layout === "404" ? (
        <NotFound data={pageData} />
      ) : layout === "about" ? (
        <About data={pageData} />
      ) : layout === "contact" ? (
        <Contact data={pageData} />
      ) : (
        <Default data={pageData} />
      )}
    </>
  );
};
export default RegularPages;

// for regular page routes
export async function generateStaticParams() {
  const regularSlugs = await getSinglePage("content");
  const postSlugs = await getSinglePage(`content/${blog_folder}`);
  const allSlugs = [...regularSlugs, ...postSlugs];
  const paths = allSlugs.map((item) => ({
    regular: item.slug,
  }));

  return paths;
}
