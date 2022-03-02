import React, { useState } from "react";
import AccountSetting from "../../components/dashboard/AccountSetting";
import AuthorisationManagement from "../../components/dashboard/AuthorisationManagement";
import DashContent from "../../components/dashboard/Dash_content";
import GestionContenu from "../../components/dashboard/GestionContenu";
import HistoricPayment from "../../components/dashboard/HistoricPayment";
import ImportContent from "../../components/dashboard/ImportContent";
import Stats from "../../components/dashboard/Stats";
import Footercopyrightwhitebg from "../../components/FooterCopyrightWhiteBg";
import Navbar from "../../components/Navbar";
import Navbarmobile from "../../components/NavBarMobile";
import Sidemenu from "../../components/SideMenu";
import Stickynavbar from "../../components/StickyNavbar";
import Styles from "../../ComponentsStyled/dash.css";

const Index = () => {
  const [page, setPage] = useState("DASH_CONTENT");

  const onPageChange = (page) => {
    console.log(page);
    setPage(page);
  };
  return (
    <>
      <div className="d-none d-sm-block">
        <Stickynavbar />
      </div>
      <Navbarmobile />

      <div className="background">
        <Sidemenu onPageChange={onPageChange} />
        <div className="content">
          {page === "ACCOUNT_SETTING" && <AccountSetting />}
          {page === "DASH_CONTENT" && <DashContent />}
          {page === "HISTORIC_PAY" && <HistoricPayment />}
          {page === "STATS" && <Stats />}
          {page === "AUTHORISATION" && <AuthorisationManagement />}
          {page === "GESTION_CONTENU" && <GestionContenu />}
        </div>
      </div>

      <style jsx>{Styles}</style>
    </>
  );
};

export default Index;
