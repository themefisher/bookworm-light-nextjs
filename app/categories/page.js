import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getTaxonomy } from "@lib/taxonomyParser";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;

const Categories = async () => {
  const categories = await getTaxonomy(`content/${blog_folder}`, "categories");
  return (
    <>
      <SeoMeta title="Categories" />
      <section className="section min-h-dvh">
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
    </>
  );
};

export default Categories;
