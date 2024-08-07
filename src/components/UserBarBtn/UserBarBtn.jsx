// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import css from "./UserBarBtn.module.css";

export const UserBarBtn = () => {
  const dispatch = useDispatch();
  const { user } = useAuth;

  return (
    <div className={css.userContainer}>
      {/* <img src={avatar} alt="User avatar" className={css.avatar} /> */}
      <p className={css.name}>{user}</p>
      <button type="button" onClick={() => dispatch(logOut())}></button>
      <span></span>
    </div>
  );
};

// UserBarBtn.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
