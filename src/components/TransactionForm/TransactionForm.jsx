import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import DatePicker from "react-datepicker";
import { DateCalendar } from "../DateCalendar/DateCalendar";
import css from "./TransactionForm.module.css";
import "react-datepicker/dist/react-datepicker.module.css";
// import "react-time-picker/dist/TimePicker.css";
// import TimePicker from "react-time-picker";
import { TimeSetter } from "../Time/TimeSetter";
import { selectTransactions } from "../../redux/transactions/transactionsSelectors";
import { addTransactions } from "../../redux/transactions/transactionsOperations";
import { setDate } from "../../redux/date/dateSelectors";
import moment from "moment/moment";
// import styled from "styled-components";

export const TransactionForm = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const date = useSelector(setSelectedDate);

  const [TransactionType, setTransactionType] = useState("");
  const [setdate, setSelectedDate] = useState(new date());
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("DD.MM.YYYY");
    setSelectedDate(date);
    dispatch(setDate(formattedDate));
    setSelectedDate(e.target.value);
  };
  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  // };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSumChange = (e) => {
    setSum(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transactions = e.currentTarget;
    dispatch(
      addTransactions({
        TransactionType,
        date,
        time,
        category,
        sum,
        comment,
      })
    );

    setTransactionType("");
    setDate("");
    setTime("");
    setCategory("");
    setSum("");
    setComment("");
  };

  // const Wrapper = styled(DatePicker)`
  //   width: 200px;
  //   height: 32px;
  //   border-radius: 12px;
  //   border: 1px solid;
  //   outline: none;
  //   border-color: #171719;
  //   //   background-color: transparent;
  // `;

  // const CustomInput = styled`
  //   color: #fafafa;
  //   outline: none;
  // `;

  return (
    <form action="" onSubmit={handleSubmit} className={css.form}>
      <div
        onChange={handleTransactionTypeChange}
        className={css.radioContainer}
      >
        <label htmlFor="" className={css.label}>
          Expense
          <input
            type="radio"
            value="expense"
            name="transactions"
            className={css.inputRadio}
          />
        </label>
        <label htmlFor="" className={css.label}>
          Income
          <input
            type="radio"
            value="expense"
            name="transactions"
            className={css.inputRadio}
          />
        </label>
      </div>
      <div className={css.DateWrap}>
        <div className={css.dateContainer}>
          <p className={css.text}>Date</p>

          <DateCalendar onChange={handleDateChange} />
          {/* <Wrapper>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            // onChange={(date) => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
            // customInput={<ExampleCustomInput />}
          />
        </Wrapper> */}
        </div>
        <p className={css.text}>Time</p>
        {/* <TimePicker onChange={handleTimeChange} /> */}
        <TimeSetter onChange={handleTimeChange} />
      </div>
      <div className={css.containerInfo}>
        <label htmlFor="" className={css.labelDetails}>
          Category
          <input
            type="text"
            onChange={handleCategoryChange}
            className={css.inputInfo}
          />
        </label>
        <label htmlFor="" className={css.labelDetails}>
          Sum
          <input
            type="number"
            onChange={handleSumChange}
            className={css.inputInfo}
          />
        </label>
        <label htmlFor="" className={css.labelDetails}>
          Comment
          <textarea
            type="text"
            onChange={handleCommentChange}
            className={css.comment}
          />
        </label>
        <button type="submit" className={css.button}>
          Add
        </button>
      </div>
    </form>
  );
};
