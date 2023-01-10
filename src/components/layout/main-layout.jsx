import React from "react";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
const MainLayout = ({children}) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default MainLayout;
