import { slugify } from "@lib/utils/textConverter";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { parseMDX } from "./utils/mdxParser";

// get all page contents
export const getAllPage = (folder) => {
  const filesPath = fs.readdirSync(path.join(folder));
  const allPosts = filesPath.filter((d) => d.includes(".md"));
  const allSinglePosts = allPosts.filter((file) => file.match(/^(?!_)/));
  const post = allSinglePosts.map((filename) => {
    const slugExtRemove = filename.replace(".md", "");
    const slug = slugify(slugExtRemove);
    const postData = fs.readFileSync(path.join(folder, filename), "utf-8");
    const postDataParsed = matter(postData);
    const frontmatterString = JSON.stringify(postDataParsed.data);
    const frontmatter = JSON.parse(frontmatterString);
    const content = postDataParsed.content;
    const category = frontmatter.categories ? frontmatter.categories : "";

    return { frontmatter, slug, content, category };
  });
  const filterByDraft = post.filter((post) => !post.frontmatter.draft && post);

  return filterByDraft;
};

// get all pages slug only
export const getAllSlug = (folder) => {
  const publishedPages = getAllPage(folder);
  const allSlug = publishedPages.map((page) => page.slug);
  return allSlug;
};

// get index page data, ex: _index.md
export const getListPage = async (folder) => {
  const indexPath = fs.readdirSync(path.join(folder));
  const indexFile = indexPath.filter((index) => index.match(/^_/));
  const indexData = fs.readFileSync(path.join(folder, indexFile[0]), "utf-8");
  const indexDataParsed = matter(indexData);
  const frontmatterString = JSON.stringify(indexDataParsed.data);
  const frontmatter = JSON.parse(frontmatterString);
  const content = indexDataParsed.content;
  const mdxContent = await parseMDX(content);

  return {
    frontmatter,
    content,
    mdxContent,
  };
};

// get all single pages, ex: blog/post.md
export const getSinglePages = (folder) => {
  const publishedPages = getAllPage(folder);
  const filterByDate = publishedPages.filter(
    (d) => new Date(d.frontmatter.date) <= new Date()
  );

  return filterByDate;
};

// get default page data, ex: about.md
export const getRegularPage = async (folder, slug) => {
  const publishedPages = getAllPage(folder);
  const pages = publishedPages.filter((data) => data.slug == slug);
  const { frontmatter, content } = pages[0];
  const mdxContent = await parseMDX(content);

  return {
    frontmatter,
    content,
    mdxContent,
  };
};
