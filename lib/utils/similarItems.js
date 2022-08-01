// similer products
export const similerItems = (allItems, currentItem, slug) => {
  const categories = currentItem[0].categories;
  const tags = currentItem[0].tags;

  // filter by categories
  const filterByCategories = allItems.filter((item) =>
    categories.find((category) => item.categories.includes(category))
  );

  // filter by tags
  const filterByTags = filterByCategories.filter((item) =>
    tags.find((tag) => item.tags.includes(tag))
  );

  // filter by slug
  const filterBySlug = filterByTags.filter((product) => product.slug !== slug);

  // remain products
  const remainProducts = allItems.filter(
    (item) => !filterBySlug.includes(item)
  );

  return remainProducts;
};
