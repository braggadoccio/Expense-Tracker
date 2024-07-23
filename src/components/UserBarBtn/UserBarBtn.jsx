import PropTypes from "prop-types";
import css from "./UserBarBtn.module.css";

export const UserBarBtn = () => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <span></span>
    </div>
  );
};

UserBarBtn.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
