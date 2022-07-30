import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import {
  getAllPage,
  getAllSlug,
  getListPage,
  getSinglePages,
} from "@lib/contents";
import { parseMDX } from "@lib/utils/mdxParser";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";

// blog pagination
const BlogPagination = ({
  postIndex,
  posts,
  authors,
  pageIndex,
  pagination,
}) => {
  const indexOfLastPost = pageIndex * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const numOfPage = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const { frontmatter, content } = postIndex;
  const { title } = frontmatter;

  return (
    <Base title="blog">
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "h2 mb-8 text-center")}
          <Posts posts={currentPosts} authors={authors} />
          <Pagination numOfPage={numOfPage} pageIndex={pageIndex} />
        </div>
      </section>
    </Base>
  );
};

export default BlogPagination;

// get blog pagination slug
export const getStaticPaths = () => {
  const allSlug = getAllSlug("content/posts");
  const { pagination } = config.settings;
  const numOfPage = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 0; i < numOfPage; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

// get blog pagination content
export const getStaticProps = async ({ params }) => {
  const pageIndex = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePages("content/posts");
  const authors = getAllPage("content/authors");
  const postIndex = await getListPage("content/posts");
  const mdxContent = await parseMDX(postIndex.content);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      authors: authors,
      pageIndex: pageIndex,
      postIndex: postIndex,
      mdxContent: mdxContent,
    },
  };
};
