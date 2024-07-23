import css from "./UserSetsModal.module.css";
import PropTypes from "prop-types";

export const UserSetsModal = () => {
  return (
    <>
      <h2>Profile settings</h2>
      <div>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p>name={user.username}</p>
      </div>
      // stats={user.stats}
      <div>
        <button>Upload new photo</button>
        <button>Remove</button>
      </div>
      <button>Save</button>
    </>
  );
};

UserSetsModal.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
