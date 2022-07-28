import { shortcodes } from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";

const AuthorSingle = ({ frontmatter, content, mdxContent }) => {
  const { description, title, image } = frontmatter;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
    >
      <section className="section">
        <div className="container">
          <div className="mb-4">
            <h1>{title}</h1>
            {image && (
              <Image src={image} height="400" width="1400" alt={title} />
            )}
            <div className="content">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default AuthorSingle;
