import { DebounceInput } from "react-debounce-input";
import { HiSearch } from "react-icons/hi";
import DatePicker from "react-datepicker";
import propTypes from "prop-types";

export const TransactionSearchTools = () => {
  const handleChange = (e) => {
    onchange(e.target.value);
  };
  return (
    <div>
      <ul>
        <li>
          <DebounceInput
            className={css.input}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search for anything.."
          />
          <HiSearch />
        </li>
        <li>
          <DatePicker />
        </li>
      </ul>
    </div>
  );
};

TransactionSearchTools.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
