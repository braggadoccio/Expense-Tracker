import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/authOperations";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { BgImageWrapper } from "../BgImageWrapper/BgImageWrapper";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        <div className={css.imageWrap}>
          <BgImageWrapper />
        </div>
        <div className={css.detailsWrapper}>
          <div className={css.titleContainer}>
            <h1 className={css.title}>Sign Up</h1>
            <p className={css.text}>
              Step into a world of hassle-free expense management! Your journey
              towards financial mastery begins here.
            </p>
          </div>
          <div className={css.formContainer}>
            <form
              className={css.form}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <label className={css.label}>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={css.input}
                />
              </label>
              <button type="submit" className={css.button}>
                Sign Up
              </button>
            </form>
          </div>
          <div className={css.linkContainer}>
            <p className={css.linkText}>Already have account?</p>
            <Link to="/login" className={css.link}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
