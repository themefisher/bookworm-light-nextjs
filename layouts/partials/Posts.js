import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
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
              priority={i === 0 ? true : false}
            />
          )}
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
            <li>
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
                    className="flex items-center hover:text-primary"
                  >
                    {author.frontmatter.image && (
                      <Image
                        src={author.frontmatter.image}
                        alt={author.frontmatter.title}
                        height={50}
                        width={50}
                        className="mr-2 h-6 w-6 rounded-full"
                      />
                    )}
                    <span>{author.frontmatter.title}</span>
                  </Link>
                ))}
            </li>
            <li>{dateFormat(post.frontmatter.date)}</li>
            <li>
              <ul>
                {post.frontmatter.categories.map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link
                      href={`/categories/${slugify(category)}`}
                      className="mr-3 hover:text-primary"
                    >
                      &#9635; {humanize(category)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3 className="mb-2">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.frontmatter.title}
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
