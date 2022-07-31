import Image from "next/image";
import Link from "next/link";

const Authors = ({ authors }) => {
  return (
    <div className="grid grid-cols-1 place-content-center gap-x-8 gap-y-16 sm:grid-cols-3">
      {authors.map((author, i) => (
        <div className="flex flex-col items-center" key={`key-${i}`}>
          {author.frontmatter.image && (
            <div className="mb-4">
              <Image
                src={author.frontmatter.image}
                alt={author.frontmatter.title}
                height="150px"
                width="150px"
                layout="fixed"
                className="rounded-lg"
              />
            </div>
          )}
          <h3 className="h4 mb-2">
            <Link href={`/authors/${author.slug}`} passHref>
              <a className="block hover:text-primary">
                {author.frontmatter.title}
              </a>
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Authors;
