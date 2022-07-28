import { MDXRemote } from "next-mdx-remote";
import { shortcodes } from "./shortcodes/all";

const Default = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  return (
    <section className="section">
      <div className="container">
        <div className="container mx-auto mb-16 px-4 font-secondary sm:px-10 md:mb-24">
          <h1 className="font-primary">{frontmatter.title}</h1>
          <div className="content">
            <MDXRemote {...mdxContent} components={shortcodes} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default;
