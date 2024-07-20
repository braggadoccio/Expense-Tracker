import { Helmet, HelmetProvider } from "react-helmet-async";
import { LoginForm } from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <h1>Sign In</h1>
      <p>
        Welcome back to effortless expense tracking! Your financial dashboard
        awaits.
      </p>
      <LoginForm />
    </HelmetProvider>
  );
};

export default LoginPage;
