import { getSinglePages } from "@lib/contents";

// get all taxonomies from frontmatter
export const getTaxonomy = (folder, name) => {
  const allPages = getSinglePages(folder);
  const allTaxonomies = allPages.map((p) => p.frontmatter[name]);
  let taxonomies = [];
  for (let i = 0; i < allTaxonomies.length; i++) {
    const categoryArray = allTaxonomies[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(categoryArray[j]);
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
