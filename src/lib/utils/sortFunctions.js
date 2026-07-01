// sort by date
export const sortByDate = (array) => {
  const post = array.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  return post;
};
