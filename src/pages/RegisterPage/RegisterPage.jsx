import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <h1>Sign Up</h1>
      <p>
        Step into a world of hassle-free expense management! Your journey
        towards financial mastery begins here.
      </p>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default RegisterPage;
