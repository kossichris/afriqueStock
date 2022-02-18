import React from 'react';
import Buttonsmall from '../../components/ButtonSmall';
import Footer from '../../components/Footer';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';
import { colors } from '../../constants/colors';
import Styles from '../../ComponentsStyled/detailsDownload.css'

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <Searchbar />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <h5 className="text-center mt-4 mb-4 title">
                            Détails sur les téléchargements restants
                        </h5>
                    </div>

                    <div className="col-xl-10 col-lg-10 col-xs-12 table table_header_title d-flex flex-row justify-content-around">
                        <span className="text-center">
                            Mois
                        </span>

                        <span className="text-center">
                            Nombre de fichiers restants
                        </span>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-xs-12 table table_header_body d-flex flex-row justify-content-around">
                        <span className="text-center date">
                            21 Décembre 2021 - <span className="endDate"> 21 Janvier 2022 </span>
                        </span>
                        <span className="text-center">
                            <span>4</span>
                        </span>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-xs-12 d-flex flex-row justify-content-around">
                        <span className="mt-3 text-center date-exp">
                            Cumul des fichiers restants avant la date d'expiration: <span> 18 </span>
                        </span>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-xs-12 d-flex flex-row justify-content-around">
                        <span className="bottom_txt mt-3 text-center">
                            NB: Conformément à nos règlements tous les téléchargements restants seront expiré à la date d'échéance
                        </span>
                    </div>

                    <div className="col-xl-10 col-lg-10 col-xs-12 table  d-flex flex-row justify-content-around">
                        <Buttonsmall text="Inviter" bgColor={colors.blue_light} isFlex={false} isTop={true} width="100% !important" color="#ffff" shape='round' />
                    </div>
                </div>
            </div>

            <style jsx>
                {Styles}
            </style>
            <Footer />
        </>
    );
}

export default Index;
