import { useEffect, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SharedLayOut } from "./SharedLayOut/SharedLayOut";
import { refreshUser } from "../redux/auth/authOperations";
import { useAuth } from "../hooks/useAuth";

const WelcomePage = lazy(() => import("../pages/WelcomePage/WelcomePage"));
// const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
//prettier-ignore
const MainTransactionPage = lazy(() => import("../pages/MainTransactionPage/MainTransactionPage"));
//prettier-ignore
const TransactionHistoryPage = lazy(() => import("../pages/TransactionHistoryPage/TransactionHistoryPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<WelcomePage />} />
        {/* <Route
          path="/register"
          element={
            // prettier-ignore
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        /> */}
        {/* <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
      </Route>
    </Routes>
  );
};
