import React from "react";
import { useAppContext } from "context/state";
import { getTaxonomy } from "lib/taxonomies";
import Link from "next/link";

const Categories = ({ taxonomies }) => {
  return (
    <div className="container">
      <div className="mt-5 text-center">
        {taxonomies.map((category, i) => (
          <Link key={`category-${i}`} href={`/categories/${category}`}>
            <a className="mx-2"> {category}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

export const getStaticProps = () => {
  const taxonomies = getTaxonomy("content/posts", "categories");

  return {
    props: {
      taxonomies: taxonomies,
    },
  };
};
