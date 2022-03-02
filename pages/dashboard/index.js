import React from "react";
import AccountSetting from "../../components/dashboard/AccountSetting";
import AuthorisationManagement from "../../components/dashboard/AuthorisationManagement";
import GestionContenu from "../../components/dashboard/GestionContenu";
import HistoricPayment from "../../components/dashboard/HistoricPayment";
import Stats from "../../components/dashboard/Stats";
import DashContent from "../../components/Dash_content";
import Footercopyrightwhitebg from "../../components/FooterCopyrightWhiteBg";
import Navbar from "../../components/Navbar";
import Navbarmobile from "../../components/NavBarMobile";
import Sidemenu from "../../components/SideMenu";
import Stickynavbar from "../../components/StickyNavbar";
import Styles from "../../ComponentsStyled/dash.css";

const Index = () => {
  return (
    <>
      <div className="d-none d-sm-block">
        <Stickynavbar />
      </div>
      <Navbarmobile />
      {/*
            <div className='background'>
            {/* <Sidemenu />
             <div className="content">
                <DashContent />
                  <HistoricPayment />
                  <GestionContenu/>
                    <Stats/>
                    <AccountSetting />
                </div>
            </div>

                */}
      <div className="background">
        <AuthorisationManagement />
      </div>

      <style jsx>{Styles}</style>
    </>
  );
};

export default Index;
