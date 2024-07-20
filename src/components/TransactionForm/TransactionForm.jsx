export const TransactionForm = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="">
          Expense
          <input type="radio" />
        </label>
        <label htmlFor="">
          Income
          <input type="radio" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Date
          <input type="date" />
        </label>
        <label htmlFor="">
          Time
          <input type="time" />
        </label>
      </div>
      <label htmlFor="">
        Category
        <input type="text" />
      </label>
      <label htmlFor="">
        Sum
        <input type="range" />
      </label>
      <label htmlFor="">
        Comment
        <input type="text" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};
