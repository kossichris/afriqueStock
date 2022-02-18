import React from 'react';
import Styles from '../components/css/Sidebar.css'
import ButtonSmall from './ButtonSmall';
import { Chart } from "react-google-charts";
import { colors } from '../constants/colors';
import Footercopyrightwhitebg from './FooterCopyrightWhiteBg';


const DashContent = () => {
    return (
        <>
            <main>
                <div id="content" className="dashboard-content">
                    <div className="container container-fluid">
                        <div className="row d-flex justify-content-around mt-4">
                            <div className="col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="strip grid d-flex flex-row flex-wrap justify-content-around">
                                    <div className="price-container ">
                                        <small>INTERVALLE DE TEMPS</small>
                                        <div className="form-group">
                                            <div className="custom-select-form">
                                                <select className="nice-select wide wide add_bottom_10" name="country" id="country">
                                                    <option value="" >Depuis 3 mois</option>
                                                    <option value="Europe">Depuis 2 mois</option>
                                                    <option value="Europe">Depuis 1 mois</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="vertLine">
                                    </div>
                                    <div className="price-container ">
                                        <small>TOTAL DES REVENUS</small>
                                        <h6 className="d-flex flex-row">
                                            <h6 className="ml-2">
                                                1201,3$
                                            </h6>
                                        </h6>

                                    </div>
                                    <div className="vertLine">
                                    </div>
                                    <div className="price-container">
                                        <small>TELECHARGMENTS</small>
                                        <h6 className="d-flex flex-row">
                                            <h6 className="ml-2">
                                                121
                                            </h6>
                                        </h6>
                                    </div>
                                    <div className="vertLine">
                                    </div>
                                    <div className="price-container">
                                        <small>POSITION</small>
                                        <h6 className="d-flex flex-row">
                                            <h6 className="ml-2">
                                                6e
                                            </h6>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-0 col-lg-1 col-md-1">

                            </div>
                            <div className="col-xl-12 col-lg-5 col-sm-12 col-xs-12 col-md-12">
                                <div className="strip grid d-flex flex-row flex-wrap justify-content-around">
                                    <div className="price-container">
                                        <small>REVENU NON VERSE</small>
                                        <h4 className="d-flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="27" height="27" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                            </svg>
                                            <h4 className="ml-2">
                                                300,9$
                                            </h4>
                                        </h4>
                                    </div>
                                    <div className="mt-3">
                                        <ButtonSmall text="Demander un paiement" height="33px" color="#ffff" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <section >
                            <Chart
                                chartType="ScatterChart"
                                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                                width="100%"
                                height="400px"
                                legendToggle
                            />
                        </section>


                        <div className="row">
                            <div className="container container-fluid" style={{ width: "97%" }}>

                                <div className="strip grid d-flex flex-column justify-content-around mt-4" style={{ width: "100%" }}>

                                    <div className="row mt-4">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group d-flex flex-row ">
                                                <input className="form-control search" type="text" placeholder="Rechercher un contenu..." />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3B72C4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3">

                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3">
                                            <div className="float-right">
                                                <Buttonsmall text="Mon portfolio" color="#ffff" bgColor={colors.blue_light_3x} shape="round" hasIcon={true} fontSize="9px" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="horiLine"></div>
                                    <div className="row mt-3">
                                        <div className="col-xl-8 col-lg-8 col-md-8 d-flex flex-row flex-wrap">
                                            <span className="contenues-text">Vos contenues acceptés sur AfriqueStock</span>
                                            <ul id="contenues-list" style={{
                                                fontSize: "11px",
                                                width: "98%",
                                            }} className="d-flex flex-row flex-wrap">
                                                <li>Tous les contenues</li>
                                                <li>Photos (203) </li>
                                                <li>Illustrations (203) </li>
                                                <li>Vecteurs (203) </li>
                                                <li>Vidéos (203) </li>
                                                <li>Collections</li>


                                            </ul>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12">
                                            <div className="float-right d-flex flex-row flex-wrap mt-3">
                                                <div className="mr-2">
                                                    <Buttonsmall text="Ajouter à une collection" color="#ffff" bgColor={colors.primary} shape="round" hasIcon={false} height="33px" fontSize="9px" />
                                                </div>
                                                <div>
                                                    <Buttonsmall text="Créer une collection" color="#ffff" bgColor={colors.primary} shape="round" hasIcon={false} height="33px" fontSize="9px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row mt-3 d-flex flex-row flex-wrap">
                                        <div className="col-xl-6 col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                            <div className="strip grid">
                                                <figure>
                                                    <a href="#0" className="wish_bt liked"></a>
                                                    <a href="detail.html">
                                                        <img src="../../public/images/bannerText.jpg" className="img-fluid" alt="" /><div className="read_more"><span>Read more</span></div></a>
                                                </figure>

                                                <ul className="ul-images d-flex flex-row flex-wrap justify-content-between">
                                                    <li><h4 className="loc_open">15</h4>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-down mt-2" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <line x1="4" y1="20" x2="20" y2="20" />
                                                            <line x1="12" y1="14" x2="12" y2="4" />
                                                            <line x1="12" y1="14" x2="16" y2="10" />
                                                            <line x1="12" y1="14" x2="8" y2="10" />
                                                        </svg>
                                                    </li>

                                                    <li><div className="score"><span><span>TELECHARGMENTS</span></span></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                            <div className="strip grid">
                                                <figure>
                                                    <a href="#0" className="wish_bt liked"></a>
                                                    <a href="detail.html">
                                                        <img src="../../public/images/bannerText.jpg" className="img-fluid" alt="" /><div className="read_more"><span>Read more</span></div></a>
                                                </figure>

                                                <ul className="ul-images d-flex flex-row flex-wrap justify-content-between">
                                                    <li><h4 className="loc_open">15</h4>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-down mt-2" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <line x1="4" y1="20" x2="20" y2="20" />
                                                            <line x1="12" y1="14" x2="12" y2="4" />
                                                            <line x1="12" y1="14" x2="16" y2="10" />
                                                            <line x1="12" y1="14" x2="8" y2="10" />
                                                        </svg>
                                                    </li>

                                                    <li><div className="score"><span><span>TELECHARGMENTS</span></span></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                            <div className="strip grid">
                                                <figure>
                                                    <a href="#0" className="wish_bt liked"></a>
                                                    <a href="detail.html">
                                                        <img src="../../public/images/bannerText.jpg" className="img-fluid" alt="" /><div className="read_more"><span>Read more</span></div></a>
                                                </figure>

                                                <ul className="ul-images d-flex flex-row flex-wrap justify-content-between">
                                                    <li><h4 className="loc_open">15</h4>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-down mt-2" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <line x1="4" y1="20" x2="20" y2="20" />
                                                            <line x1="12" y1="14" x2="12" y2="4" />
                                                            <line x1="12" y1="14" x2="16" y2="10" />
                                                            <line x1="12" y1="14" x2="8" y2="10" />
                                                        </svg>
                                                    </li>

                                                    <li><div className="score"><span><span>TELECHARGMENTS</span></span></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-3 col-xs-12 col-md-6 col-sm-6 ">
                                            <div className="strip grid">
                                                <figure>
                                                    <a href="#0" className="wish_bt liked"></a>
                                                    <a href="detail.html">
                                                        <img src="../../public/images/bannerText.jpg" className="img-fluid" alt="" /><div className="read_more"><span>Read more</span></div></a>
                                                </figure>

                                                <ul className="ul-images d-flex flex-row flex-wrap justify-content-between">
                                                    <li><h4 className="loc_open">15</h4>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-down mt-2" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <line x1="4" y1="20" x2="20" y2="20" />
                                                            <line x1="12" y1="14" x2="12" y2="4" />
                                                            <line x1="12" y1="14" x2="16" y2="10" />
                                                            <line x1="12" y1="14" x2="8" y2="10" />
                                                        </svg>
                                                    </li>

                                                    <li><div className="score"><span><span>TELECHARGMENTS</span></span></div></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>

            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default DashContent;
