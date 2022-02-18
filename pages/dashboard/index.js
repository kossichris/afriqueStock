import React from 'react';
import DashContent from '../../components/Dash_content';
import Footercopyrightwhitebg from '../../components/FooterCopyrightWhiteBg';
import Navbar from '../../components/Navbar';
import Navbarmobile from '../../components/NavBarMobile';
import Sidemenu from '../../components/SideMenu';

const Index = () => {
    return (
        <div>
            <div className="d-none d-sm-block">
                <Navbar />
            </div>
            <div className="d-block d-sm-none">
                <Navbarmobile />
            </div>


            <div className="d-flex flex-row mt-4">
                <Sidemenu />
                <DashContent />
            </div>
            <Footercopyrightwhitebg />
        </div>
    );
}

export default Index;
