import Link from "next/link";

const Authors = ({ authors }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
      {authors.map((author, i) => (
        <div key={`key-${i}`}>
          <h3 className="mb-2">
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
