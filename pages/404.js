import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contents";
import { markdownify } from "@lib/utils/textConverter";

const notFound = ({ data }) => {
  const { frontmatter, content } = data;
  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className="flex h-[40vh] items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4">{frontmatter.title}</h1>
              {markdownify(content, "div", "content prose-headings:text-text")}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

// for regular page data
export const getStaticProps = async () => {
  const notFoundData = await getRegularPage();
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
