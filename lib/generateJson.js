const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const pages = fs.readdirSync(path.join("content/posts"));
const allPage = pages.filter((p) => p.match(/^[a-z]/));
const posts = allPage.map((filename) => {
  const slug = filename.replace(".md", "");
  let posts = fs.readFileSync(path.join(`content/posts/`, filename), "utf-8");
  let { data } = matter(posts);
  const categories = data.categories;

  return {
    frontmatter: data,
    slug: slug,
    categories: categories,
  };
});

try {
  fs.writeFileSync(`frontmatter/posts.json`, JSON.stringify(posts));
  fs.writeFileSync(`public/posts.json`, JSON.stringify(posts));
} catch (err) {
  console.error(err);
}
