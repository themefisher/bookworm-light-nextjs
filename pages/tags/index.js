import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { humanize, markdownify } from "@lib/utils/textConverter";
import { getTaxonomy } from "lib/taxonomies";
import Link from "next/link";
const { blog_folder } = config.settings;

const Tags = ({ tags }) => {
  return (
    <Base title={"tags"}>
      <section className="section">
        <div className="container text-center">
          {markdownify("Tags", "h1", "h2 mb-16")}
          <ul className="space-x-4">
            {tags.map((category, i) => (
              <li key={`category-${i}`} className="inline-block">
                <Link href={`/tags/${category}`} passHref>
                  <a className="rounded-lg bg-light px-4 py-2 text-text-dark transition hover:bg-primary hover:text-white">
                    &#8226; {humanize(category)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Base>
  );
};

export default Tags;

export const getStaticProps = () => {
  const tags = getTaxonomy(`content/${blog_folder}`, "tags");

  return {
    props: {
      tags: tags,
    },
  };
};
