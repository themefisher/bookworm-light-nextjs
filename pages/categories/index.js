import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getTaxonomy } from "@lib/taxonomyParser";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;

const Categories = ({ categories }) => {
  return (
    <Base title={"categories"}>
      <section className="section">
        <div className="container text-center">
          {markdownify("Categories", "h1", "h2 mb-16")}
          <ul className="space-x-4">
            {categories.map((category, i) => (
              <li key={`category-${i}`} className="inline-block">
                <Link
                  href={`/categories/${category}`}
                  className="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white"
                >
                  &#8226; {humanize(category)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  return {
    props: {
      categories: categories,
    },
  };
};
