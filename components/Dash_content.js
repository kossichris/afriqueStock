import React from 'react';
import Styles from '../components/css/Sidebar.css'
import { Chart } from "react-google-charts";
import { colors } from '../constants/colors';
import Footercopyrightwhitebg from './FooterCopyrightWhiteBg';
import Buttonsmall from './ButtonSmall';


const DashContent = () => {
    return (
        <>
                <div id="content" className="dashboard-content">
                    <div className=" container-fluid">
                        <div className="row mt-4">
                        <div className="col-lg-6">
                        <div className="card">
                        <div className="containere d-flex flex-row flex-wrap justify-content-around">
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
                               
                            </div>
                            <div className="col-lg-2">

                            </div>
                        <div className="col-xl-4 col-lg-5 col-sm-12 col-xs-12 col-md-12">
                        <div className="card">
                                <div className="containere payment-card d-flex flex-row flex-wrap justify-content-around">
                                <div className="price-container">
                                        <small>REVENU NON VERSE</small>
                                        <h4 className="d-flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="27" height="27" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                            </svg>
                                            <h4>
                                                300,9$
                                            </h4>
                                        </h4>
                                    </div>
                                    <div className="mt-4">
                                        <Buttonsmall text="Demander un paiement" height="33px" fontSize="12px" padding="12px" color="#ffff" />
                                    </div>
                                </div>
                                </div>
                           
                            </div>

                        </div>
                    <section className='mt-4' >
                      
                        <div>
                        <div className='row justify-content-between p-5'>
                            <small> TOTAL DES REVENUES 2021</small>
                            <span> <a>Semaine</a><a>Mois</a> <a>Ans</a> </span>
                        </div>
                        <Chart
                                chartType="ScatterChart"
                                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                                width="100%"
                                height="400px"
                                legendToggle
                            />
                           </div>
                        </section>


                        <section >

                                <div className="strip grid d-flex flex-column justify-content-around mt-4" style={{ width: "100%" }}>

                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group d-flex flex-row ">
                                                <input className="form-control search" type="text" placeholder="Rechercher un contenu..." />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3B72C4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                            <div className="float-right">
                                                <Buttonsmall text="Mon portfolio" color="#ffff" bgColor={colors.blue_light_3x} shape="round" hasIcon={true} fontSize="15px" fontWeight="400" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="horiLine"></div>
                            <div className="row mt-3">
                                <div className='col-xl-12 col-lg-8 col-md-8'>
                                <span className="contenues-text">Vos contenues acceptés sur AfriqueStock</span>

                                </div>
                                        <div className="col-xl-8 col-lg-8 col-md-8 d-flex flex-row flex-wrap">
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
                                            <div className="float-right d-flex flex-row flex-wrap">
                                                <div className="mr-5">
                                                    <Buttonsmall text="Ajouter à une collection" color="#ffff" bgColor={colors.primary} shape="round" hasIcon={false} height="37px" paddingLeft="16px" paddingRight="16px" fontSize="11px" />
                                                </div>
                                                <div>
                                                    <Buttonsmall text="Créer une collection" color="#ffff" bgColor={colors.primary} shape="round" hasIcon={false} height="37px" paddingLeft="16px" paddingRight="16px"  fontSize="11px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                            <div className="d-flex flex-row flex-wrap justify-content-around">
                                    <div className="card img-card">
                                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Avatar"/>
                                        <div className="containere mt-3 d-flex flex-row justify-content-between">
                                            <h4><b>16</b> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.bleu_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                        <polyline points="7 11 12 16 17 11" />
                                        <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg></h4>
                                        <small className='mt-2 text'>TÉLÉCHARGEMENT</small>
                                        </div>
                                </div>       
                                <div className="card img-card">
                                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Avatar"/>
                                        <div className="containere mt-3 d-flex flex-row justify-content-between">
                                            <h4><b>16</b> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.bleu_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                        <polyline points="7 11 12 16 17 11" />
                                        <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg></h4>
                                        <small className='mt-2 text'>TÉLÉCHARGEMENT</small>
                                        </div>
                                </div>   
                                <div className="card img-card">
                                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Avatar"/>
                                        <div className="containere mt-3 d-flex flex-row justify-content-between">
                                            <h4><b>16</b> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.bleu_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                        <polyline points="7 11 12 16 17 11" />
                                        <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg></h4>
                                        <small className='mt-2 text'>TÉLÉCHARGEMENT</small>
                                        </div>
                                </div>   
                                <div className="card img-card">
                                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Avatar"/>
                                        <div className="containere mt-3 d-flex flex-row justify-content-between">
                                            <h4><b>16</b> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="14" height="14" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.bleu_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                        <polyline points="7 11 12 16 17 11" />
                                        <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg></h4>
                                        <small className='mt-2 text'>TÉLÉCHARGEMENT</small>
                                        </div>
                                    </div>   
                             </div>
                        </div>

                        </section>

                    </div>
                </div>

            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default DashContent;
