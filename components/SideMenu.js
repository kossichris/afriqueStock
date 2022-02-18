import React from 'react';
import Styles from '../components/css/Sidebar.css'
import { colors } from '../constants/colors';
import Button from './Button';
import Stickynavbar from './stickyNavbar';

const Sidemenu = () => {
    return (
        <>
            <div id="viewport" className="d-none d-sm-block">
                <Stickynavbar />
                <div id="sidebar" >
                    <ul className="nav">
                        <div className="profile-container d-flex flex-row flex-wrap justify-content-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="88" height="88" viewBox="0 0 24 24" strokeWidth="1" stroke="#3B72C4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="10" r="3" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                            <div className="ml-2">
                                <small>
                                    Profil contributeur
                                </small>
                                <h6 className="pseudo" style={{ color: "black" }}>@Dieubeni</h6>
                            </div>
                        </div>
                        <li className="li-1-btn">
                            <Button text="Importer des contenues" color="#fff" bgColor={colors.blue_light_3x} fontSize="12px" fontWeight="300" shape="round" />
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-view-dashboard"></i> Tableau de bord
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-link"></i> Gérer les contenus
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-widgets"></i> Contenus gratuits
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-calendar"></i> Gérer les Autorisations
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-info-outline"></i> Mes statistiques
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-settings"></i> Informations pour les contributeurs
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="zmdi zmdi-comment-more"></i> Parametres du compte
                            </a>
                        </li>
                    </ul>
                </div>
            </div> <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Sidemenu;
