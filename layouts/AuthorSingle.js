import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Social from "./components/Social";
import MDXContent from "./partials/MDXContent";
import SeoMeta from "./partials/SeoMeta";

const AuthorSingle = ({ frontmatter, content }) => {
  const { description, social, title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
      />
      <section className="section">
        <div className="container">
          <div className="mb-4 text-center md:px-24">
            {image && (
              <div className="mb-8">
                <Image
                  src={image}
                  className="mx-auto rounded-lg"
                  height={150}
                  width={150}
                  alt={title}
                />
              </div>
            )}
            {markdownify(title, "h1", "h2 mb-8")}
            <Social source={social} className="social-icons-simple" />
            <div className="content">
              <MDXContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorSingle;
