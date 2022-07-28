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
import { useState } from "react";

// blog pagination
const BlogPagination = ({ blogIndex, posts, authors, page, pagination }) => {
  const [index] = useState(true);
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const numOfPage = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const { frontmatter, content } = blogIndex;
  const { title } = frontmatter;

  return (
    <Base title="blog">
      <section className="section">
        <div className="container">
          {markdownify(title, "h1")}
          <Posts
            posts={currentPosts}
            authors={authors}
            postIndex={blogIndex}
            index={index}
          />
          <Pagination numOfPage={numOfPage} page={page} />
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
  const page = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = getSinglePages("content/posts");
  const authors = getAllPage("content/authors");
  const blogIndex = await getListPage("content/posts");
  const mdxContent = await parseMDX(blogIndex.content);

  return {
    props: {
      pagination: pagination,
      posts: posts,
      authors: authors,
      page: page,
      blogIndex: blogIndex,
      mdxContent: mdxContent,
    },
  };
};
