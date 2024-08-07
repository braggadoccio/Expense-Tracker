import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { BgImageWrapper } from "../BgImageWrapper/BgImageWrapper";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <div className={css.logoWrap}>
        <Header />
      </div>
      <div className={css.mainWrapper}>
        <div className={css.image}>
          <BgImageWrapper />
        </div>
        <div className={css.formWrapper}>
          <div className={css.titleContainer}>
            <h1 className={css.title}>Sign In</h1>
            <p className={css.text}>
              Welcome back to effortless expense tracking! Your financial
              dashboard awaits.
            </p>
          </div>
          <div className={css.formContainer}>
            <form
              className={css.form}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <label className={css.label}>
                <input
                  type="email"
                  name="email"
                  className={css.input}
                  placeholder="Email"
                />
              </label>
              <label className={css.label}>
                <input
                  type="password"
                  name="password"
                  className={css.input}
                  placeholder="Password"
                />
              </label>
              <button type="submit" className={css.button}>
                Sign In
              </button>
            </form>
          </div>
          <div className={css.containerLink}>
            <p className={css.linkText}>Don't have an account?</p>
            <Link to="/register" className={css.link}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
