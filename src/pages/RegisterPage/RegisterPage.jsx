import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default RegisterPage;
