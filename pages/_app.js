import { AppWraper } from "context/state";
import "styles/style.scss";

const App = ({ Component, pageProps }) => {
  return (
    <AppWraper>
      <Component {...pageProps} />
    </AppWraper>
  );
};

export default App;
