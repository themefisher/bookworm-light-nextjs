import { dateFormat } from "@lib/utils/dateFormat";
import { shortcodes } from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Base from "./Baseof";

const PostSingle = ({ frontmatter, content, mdxSource }) => {
  const { description, title, date, image, categories } = frontmatter;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
    >
      <section className="section">
        <div className="container">
          <div className="mb-4">
            <p>{dateFormat(new Date(date))}</p>
            {categories.map((category, i) => (
              <Link key={`category-${i}`} href={`/categories/${category}`}>
                <a className="mr-4">{category}</a>
              </Link>
            ))}
            <h1>{title}</h1>
            {image && (
              <Image src={image} height="400" width="1400" alt={title} />
            )}
            <div className="content">
              <MDXRemote {...mdxSource} components={shortcodes} />
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
