import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1")}
        <form>
          <input
            className="block"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="block"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea className="block" rows="7" placeholder="Message" />
          <button className="btn">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
