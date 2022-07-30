import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { parseMDX } from "./utils/mdxParser";

// get index page data, ex: _index.md
export const getListPage = async (folder) => {
  const indexPath = fs.readdirSync(path.join(folder));
  const sanitizeIndexFile = indexPath.filter((file) => file.includes(".md"));
  const filterIndexFile = sanitizeIndexFile.filter((file) => file.match(/^_/));
  const indexData = fs.readFileSync(
    path.join(folder, filterIndexFile[0]),
    "utf-8"
  );
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
  const filesPath = fs.readdirSync(path.join(folder));
  const sanitizeFiles = filesPath.filter((file) => file.includes(".md"));
  const filterSingleFiles = sanitizeFiles.filter((file) =>
    file.match(/^(?!_)/)
  );
  const singlePages = filterSingleFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const pageData = fs.readFileSync(path.join(folder, filename), "utf-8");
    const pageDataParsed = matter(pageData);
    const frontmatterString = JSON.stringify(pageDataParsed.data);
    const frontmatter = JSON.parse(frontmatterString);
    const content = pageDataParsed.content;

    return { frontmatter, slug, content };
  });

  const publishedPages = singlePages.filter(
    (page) => !page.frontmatter.draft && page
  );
  const filterByDate = publishedPages.filter(
    (page) => new Date(page.frontmatter.date || new Date()) <= new Date()
  );

  return filterByDate;
};

// get default page data, ex: about.md
export const getRegularPage = async (folder, slug) => {
  const publishedPages = getSinglePages(folder);
  const pageData = publishedPages.filter((data) => data.slug === slug);
  const { frontmatter, content } = pageData[0];
  const mdxContent = await parseMDX(content);

  return {
    frontmatter,
    content,
    mdxContent,
  };
};

// get single pages slug
export const getSinglePagesSlug = (folder) => {
  const publishedPages = getSinglePages(folder);
  const slugs = publishedPages.map((page) => page.slug);
  return slugs;
};
