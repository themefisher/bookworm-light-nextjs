import Pagination from "@components/Pagination";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getSinglePages, getSinglePagesSlug } from "@lib/contents";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// blog pagination
const BlogPagination = ({ posts, authors, currentPage, pagination }) => {
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.round(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Base>
      <section className="section">
        <div className="container">
          <Posts className="mb-16" posts={currentPosts} authors={authors} />
          <Pagination
            section=""
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
    </Base>
  );
};

export default BlogPagination;

// get blog pagination slug
export const getStaticPaths = () => {
  const allSlug = getSinglePagesSlug(`content/${blog_folder}`);
  const { pagination } = config.settings;
  const totalPages = Math.round(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
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
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePages(`content/${blog_folder}`);
  const authors = getSinglePages("content/authors");

  return {
    props: {
      pagination: pagination,
      posts: posts,
      authors: authors,
      currentPage: currentPage,
    },
  };
};
