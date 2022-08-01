import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getSinglePages } from "@lib/contents";
import { sortByDate } from "@lib/utils/sortFunctions";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

const Home = ({ posts, authors }) => {
  const sortPostByDate = sortByDate(posts);
  const showPost = 4;
  const { title } = config.site;
  return (
    <Base title={title}>
      <div className="section">
        <div className="container">
          <Posts posts={sortPostByDate.slice(0, showPost)} authors={authors} />
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const posts = getSinglePages(`content/${blog_folder}`);
  const authors = getSinglePages("content/authors");

  return {
    props: {
      posts: posts,
      authors: authors,
    },
  };
};
