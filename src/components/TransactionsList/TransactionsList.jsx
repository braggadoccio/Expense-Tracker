import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../redux/transactions/transactionsOperations";
import { TransactionSearchTools } from "../TransactionsSearchTools/TransactionSearchTools";
//prettier-ignore
import { selectTransactions, selectError, selectIsLoading } from "../../redux/transactions/transactionsSelectors";
import { Loader } from "../Loader/Loader";

export const TransactionsList = () => {
  const filteredTransactions = useSelector(selectTransactions);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <div>
        <TransactionSearchTools />
      </div>
      {isLoading && !error && <Loader />}
      {filteredTransactions.map(({ category, comment, date, time, sum }) => (
        <div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Time</th>
                <th>Sum</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{category}</td>
                <td>{comment}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{sum}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>{category}</td>
                <td>{comment}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{sum}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>{category}</td>
                <td>{comment}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{sum}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>{category}</td>
                <td>{comment}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{sum}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      ;
    </div>
  );
};
