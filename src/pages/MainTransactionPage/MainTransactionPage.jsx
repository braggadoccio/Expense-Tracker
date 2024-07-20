import { TransactionForm } from "../../components/TransactionForm/TransactionForm";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainTransactionPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <>
        <div>
          <TransactionsTotalAmount />
          <TransactionsChart />
        </div>
        <TransactionForm />
      </>
    </HelmetProvider>
  );
};

export default MainTransactionPage;
