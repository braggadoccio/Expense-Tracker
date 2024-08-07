import { TransactionForm } from "../../components/TransactionForm/TransactionForm";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PrivatePageHeader } from "../../components/PrivatePageHeader/PrivatePageHeader";

const MainTransactionPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <>
        <PrivatePageHeader />

        <TransactionsTotalAmount />
        <TransactionForm />
        <TransactionsChart />
      </>
    </HelmetProvider>
  );
};

export default MainTransactionPage;
