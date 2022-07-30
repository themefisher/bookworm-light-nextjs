const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// get post data
const getPosts = fs.readdirSync(path.join("content/posts"));
const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/));
const posts = filterPosts.map((filename) => {
  const slug = filename.replace(".md", "");
  const postData = fs.readFileSync(
    path.join(`content/posts/`, filename),
    "utf-8"
  );
  const { data } = matter(postData);

  return {
    frontmatter: data,
    slug: slug,
  };
});

// write json file. Must need a ./json folder before writing
try {
  fs.writeFileSync(`json/posts.json`, JSON.stringify(posts));
} catch (err) {
  console.error(err);
}
