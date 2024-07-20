import { Header } from "../Header/Header";
import { BgImageWrapper } from "../BgImageWrapper/BgImageWrapper";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <BgImageWrapper />
      <Outlet />
    </>
  );
};
