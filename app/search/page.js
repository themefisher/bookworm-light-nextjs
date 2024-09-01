import SearchResults from "@layouts/partials/SearchResults";
import { getSinglePage } from "@lib/contentParser";
import { Suspense } from "react";

const SearchPage = async () => {
  const authors = await getSinglePage("content/authors");

  return (
    <>
      <div className="section">
        <div className="container">
          <Suspense
            fallback={
              <h1 className="h2 mb-8 text-center">
                Searching <span className="text-primary">...</span>
              </h1>
            }
          >
            <SearchResults authors={authors} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
