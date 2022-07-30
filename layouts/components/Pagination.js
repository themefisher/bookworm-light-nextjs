import Link from "next/link";
import React from "react";

const Pagination = ({ pageIndex, numOfPage }) => {
  const indexPageLink = pageIndex === 2;
  const hasPrevPage = pageIndex > 1;
  const hasNextPage = numOfPage > pageIndex;

  let pageList = [];
  for (let i = 1; i <= numOfPage; i++) {
    pageList.push(i);
  }

  return (
    <nav
      className="mb-4 flex justify-center -space-x-px"
      aria-label="Pagination"
    >
      {/* previous */}
      {hasPrevPage ? (
        <Link
          href={indexPageLink ? `/posts` : `/posts/page/${pageIndex - 1}`}
          passHref
        >
          <a className="border border-primary px-2 py-2 text-text">
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      ) : (
        <span className="border border-primary px-2 py-2 text-text">
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}

      {/* page index */}
      {pageList.map((pagination, i) => (
        <React.Fragment key={`page-${i}`}>
          {pagination === pageIndex ? (
            <span
              aria-current="page"
              className={`border border-primary bg-primary px-4 py-2 text-white`}
            >
              {pagination}
            </span>
          ) : (
            <Link href={i === 0 ? `/posts` : `/posts/page/${pagination}`}>
              <a
                aria-current="page"
                className={`border border-primary px-4 py-2 text-text`}
              >
                {pagination}
              </a>
            </Link>
          )}
        </React.Fragment>
      ))}

      {/* next page */}
      {hasNextPage ? (
        <Link href={`/posts/page/${pageIndex + 1}`} passHref>
          <a className="border border-primary px-2 py-2 text-text">
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      ) : (
        <span className="border border-primary px-2 py-2 text-text">
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </nav>
  );
};

export default Pagination;
