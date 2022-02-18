import React from 'react';
import Bottomnav from '../../components/BottomNav';
import Buttonsmall from '../../components/ButtonSmall';
import Footercopyrightdarkblue from '../../components/FooterCopyrightDarkBlue';
import Footerlangwhitebg from '../../components/FooterLangWhiteBg';
import Stickywhitenavbar from '../../components/StickyWhiteNavbar';
import { colors } from '../../constants/colors';
import registerModeleStyles from './modele.style.css'

const Modele = () => {
    return (
        <>
            <Stickywhitenavbar />

            <main style={{ transform: 'none' }}>
                <div className="hero_in hotels_detail">
                    <div className="wrapper">
                        <span className="magnific-gallery">
                            <a href="img/gallery/hotel_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                            <a href="img/gallery/hotel_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                        </span>
                        <div className="bottom_bar">
                            <Bottomnav />
                        </div>
                    </div>

                </div>
                <div className="container margin_60_35 d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6 className="text-center title">
                                Vous etes un modèle photo professionnel, amateur vous désirez  participer  à un projet  qui met  en valeur  la beauté de l'Afrique à travers ses différentes cultures , inscrivez-vous ici peu importe votre âge
                            </h6>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="box_account mt-5">
                                <div className="form_container">
                                    <div className="form-group">
                                        <label>Décrivez-vous brievement</label>
                                        <textarea name="review_text" id="review_text" style={{
                                            borderTop: 'none',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderRadius: '0',
                                            height: '130px'
                                        }} className="form-control text-area" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>

                        <div className="col-xl-1 col-lg-1"></div>
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="box_account">
                                <div className="form_container">
                                    <strong>Ajouter des photos ou vodéos de vous</strong>

                                    <div>
                                        <div className="btn_home_align mt-4 d-flex flex-column justify-content-">
                                            <div className="rounded-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                    <polyline points="7 9 12 4 17 9" />
                                                    <line x1="12" y1="4" x2="12" y2="16" />
                                                </svg>
                                            </div>
                                            <div className="mt-3">
                                                Sélectionnez ou déposez des fichiers ici
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="box_account">
                                <div className="form_container">

                                    <hr />
                                    <div className="private box">
                                        <div className="row g-0">
                                            <div className="col-6 pe-1">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Prénoms*" />
                                                </div>
                                            </div>
                                            <div className="col-6 ps-1">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Nom*" />
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="custom-select-form">
                                                        <select className="wide add_bottom_10" name="country" id="country" style={{ display: 'none' }}>
                                                            <option value="" selected="">Homme*</option>
                                                            <option value="Europe">Femme</option>
                                                        </select>
                                                        <div className="nice-select wide add_bottom_10" tabindex="0"><span className="current">Country*</span>
                                                            <ul className="list"><li className="option selected">Homme*</li>
                                                                <li data-value="Europe" className="option">Femme</li>
                                                            </ul></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" placeholder="Date de naissance*" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email*" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password_in_2" id="password_in_2" value="" placeholder="Password*" />
                                        </div>
                                        <div className="row g-0">
                                            <div className="col-6 pe-1">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Taille*" />
                                                </div>
                                            </div>
                                            <div className="col-6 ps-1">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Poids*" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row g-0">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Ville*" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Région" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-0">
                                            <div className="col-6 pe-1">
                                                <div className="form-group">
                                                    <input type="tel" className="form-control" placeholder="Télephone*" />
                                                </div>
                                            </div>
                                            <div className="col-6 ps-1">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Code Postal*" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Pays *" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Niveau d'étude *" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Profession *" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Situation matrimoniale *" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    { /*   <div className="form-group">
                                        <label className="container_check">Accept <a href="#0">Terms and conditions</a>
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>*/}

                                </div>
                                <div className="text-center d-flex flex-row justify-content-end">
                                    <Buttonsmall text="Envoyer" bgColor={colors.blue_light_3x} color="white" isTop={true} />
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-1 col-lg-1"></div>


                    </div>
                </div>

            </main>
            <Footerlangwhitebg />
            <Footercopyrightdarkblue />
            <style jsx>
                {registerModeleStyles}
            </style>
        </>
    );
}

export default Modele;
