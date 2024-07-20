import { Helmet, HelmetProvider } from "react-helmet-async";
import { Home } from "../../components/Home/Home.jsx";

const WelcomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>WelcomePage</title>
      </Helmet>
      <Home />
    </HelmetProvider>
  );
};

export default WelcomePage;
