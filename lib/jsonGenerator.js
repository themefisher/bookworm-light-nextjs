const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const config = require("../config/config.json");
const { blog_folder } = config.settings;

// get post data
const getPosts = fs.readdirSync(path.join(`content/${blog_folder}`));
const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/));
const posts = filterPosts.map((filename) => {
  const slug = filename.replace(".md", "");
  const postData = fs.readFileSync(
    path.join(`content/${blog_folder}/`, filename),
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
  fs.writeFileSync(`json/${blog_folder}.json`, JSON.stringify(posts));
} catch (err) {
  console.error(err);
}
