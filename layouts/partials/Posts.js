import config from "@config/config.json";
import { dateFormat } from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts, authors, className }) => {
  const { summary_length } = config.settings;
  return (
    <div className={`row space-y-16 ${className}`}>
      {posts.map((post, i) => (
        <div
          key={`key-${i}`}
          className={i === 0 ? "col-12" : "col-12 sm:col-6"}
        >
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
              layout="responsive"
              priority={i === 0 ? true : false}
            />
          )}
          <ul className="mt-4 text-text">
            <li className="mb-2 mr-4 inline-block">
              {authors
                .filter((author) =>
                  post.frontmatter.authors
                    .map((author) => slugify(author))
                    .includes(slugify(author.frontmatter.title))
                )
                .map((author, i) => (
                  <Link
                    href={`/authors/${slugify(author.frontmatter.title)}`}
                    key={`author-${i}`}
                    passHref
                  >
                    <a className="inline-block hover:text-primary">
                      {author.frontmatter.image && (
                        <span className="author-image">
                          <Image
                            src={author.frontmatter.image}
                            alt={author.frontmatter.title}
                            height={50}
                            width={50}
                          />
                        </span>
                      )}
                      <span>{author.frontmatter.title}</span>
                    </a>
                  </Link>
                ))}
            </li>
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
          <h3 className="mb-2">
            <Link href={`/${post.slug}`} passHref>
              <a className="block hover:text-primary">
                {post.frontmatter.title}
              </a>
            </Link>
          </h3>
          <p className="text-text">
            {post.content && post.content.slice(0, Number(summary_length))}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
