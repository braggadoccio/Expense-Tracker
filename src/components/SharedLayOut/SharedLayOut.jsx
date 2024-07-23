import { Header } from "../Header/Header";
// import { BgImageWrapper } from "../BgImageWrapper/BgImageWrapper";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import { Home } from "../Home/Home";
import css from "./SharedLayOut.module.css";

export const SharedLayOut = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <img src="../../images/Rectangle.jpg" alt="rectangle" />
    </div>
  );
};
