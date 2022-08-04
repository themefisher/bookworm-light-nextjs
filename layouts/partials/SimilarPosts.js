import { dateFormat } from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const SimilarPosts = ({ posts }) => {
  return (
    <div className="row justify-center">
      {posts.map((post, i) => (
        <div key={`key-${i}`} className={"col-12 mb-4 sm:col-4"}>
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={"445"}
              height={"230"}
              layout="responsive"
            />
          )}
          <ul className="mt-4 text-text">
            <li className="mb-2 mr-4 inline-block">
              {dateFormat(post.frontmatter.date)}
            </li>
            <li className="mb-2 mr-4 inline-block">
              <ul>
                {post.frontmatter.categories.map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link href={`/categories/${slugify(category)}`} passHref>
                      <a className="mr-3 hover:text-primary">
                        &#9635; {humanize(category)}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3 className="h4">
            <Link href={`/${post.slug}`} passHref>
              <a className="block hover:text-primary">
                {post.frontmatter.title}
              </a>
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SimilarPosts;
