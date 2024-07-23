import css from "./AllUsersTab.module.css";
import PropTypes from "prop-types";

export const AllUsersTab = ({ avatar, id }) => {
  // const totalUsers = ([...args]) =>
  const generateRandomProfile = () => {
    return `avatar(${Math.floor(Math.random() * 1000)}, ${Math.floor(
      Math.random() * 1000
    )})`;
  };
  return (
    <div>
      <ul>
        {stats.map(
          stat(
            <li key={stat.id}>
              <img src="{avatar}" alt="" />
              <span className={css.percentage}>{stat.total}</span>users
              <span>+</span>
            </li>
          )
        )}
      </ul>
      <p>Trusted by users for reliable expense tracking!</p>
    </div>
  );
};

AllUsersTab.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};
