import NotFound from "@layouts/404";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getRegularPage } from "@lib/contentParser";

const notFound = async () => {
  const notFoundData = await getRegularPage("404");
  return (
    <>
      <SeoMeta />
      <NotFound data={notFoundData} />
    </>
  );
};

export default notFound;
