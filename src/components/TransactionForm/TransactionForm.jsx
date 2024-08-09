import { useDispatch, useSelector } from "react-redux";
import React, { useState, forwardRef } from "react";
import css from "./TransactionForm.module.css";
import "react-datepicker/dist/react-datepicker.module.css";
import {
  selectTransactions,
  setDate,
  setTime,
} from "../../redux/transactions/transactionsSelectors";
import { addTransactions } from "../../redux/transactions/transactionsOperations";
import moment from "moment/moment";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
// prettier-ignore
import {DatePickerWrapper, Icon, } from "./DateAndTime/DatePickerWrapper.styled";

// import "react-time-picker/dist/TimePicker.css";
// import { DateCalendar } from "../DateCalendar/DateCalendar";
// import { TimeSetter } from "../Time/TimeSetter";
// import { setDate } from "../../redux/date/dateSelectors";
// import styled from "styled-components";

export const TransactionForm = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const date = useSelector(setDate);

  const [TransactionType, setTransactionType] = useState("");
  const [selectedDate, setSelectedDate] = useState(new date());
  const [selectedTime, setSelectedTime] = useState("00:00:00");
  const [category, setCategory] = useState("");
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleSelectedDate = (date) => {
    const formattedDate = moment(date).format("DD.MM.YYYY");
    selectedDate(date);
    dispatch(setDate(formattedDate));
    setSelectedDate(e.target.value);
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <DatePickerWrapper onClick={onClick} ref={ref}>
        {value}
        <Icon src={CalendarIcon} alt="calendar icon" />
      </DatePickerWrapper>
    </div>
  ));
  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  // };

  const handleTimeChange = (time) => {
    const formattedTime = moment(time).format("00:00:00");
    selectedTime(time);
    dispatch(setTime(formattedTime));
    setSelectedTime(e.target.value);
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
        selectedDate,
        selectedTime,
        category,
        sum,
        comment,
      })
    );

    setTransactionType("");
    setSelectedDate("");
    setSelectedTime("");
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

          {/* <DateCalendar onSelect={handleSelectedDate} /> */}
          <div>
            <DatePicker
              selected={selectedDate}
              onChange={handleSelectedDate}
              dateFormat="dd.MM.yyyy"
              customInput={<ExampleCustomInput />}
              // maxDate={new Date()}
            />
          </div>
        </div>
        <div>
          <p className={css.text}>Time</p>
          <TimePicker onChange={handleTimeChange} />
        </div>
        {/* <TimeSetter onChange={handleTimeChange} /> */}
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
