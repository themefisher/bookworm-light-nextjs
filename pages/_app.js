import { JsonContext } from "context/state";
import "styles/style.scss";

const App = ({ Component, pageProps }) => {
  return (
    <JsonContext>
      <Component {...pageProps} />
    </JsonContext>
  );
};

export default App;
