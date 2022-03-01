import React from 'react';
import GestionContenu from '../../components/dashboard/GestionContenu';
import HistoricPayment from '../../components/dashboard/HistoricPayment';
import DashContent from '../../components/Dash_content';
import Footercopyrightwhitebg from '../../components/FooterCopyrightWhiteBg';
import Navbar from '../../components/Navbar';
import Navbarmobile from '../../components/NavBarMobile';
import Sidemenu from '../../components/SideMenu';
import Stickynavbar from '../../components/StickyNavbar';
import Styles from '../../ComponentsStyled/dash.css'

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
                </div>
            </div>

                */}
            <div className='background'>
              
                <GestionContenu/>
                
                </div>

         
            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Index;
