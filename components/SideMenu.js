import React from 'react';
import Styles from '../components/css/Sidebar.css'
import { colors } from '../constants/colors';
import Button from './Button';
import Buttonsmall from './ButtonSmall';
import Stickynavbar from './StickyNavbar';

const Sidemenu = () => {
    return (
        <>
            <div className="sidebar mb-5">
                <div className='profile-container d-flex flex-row'>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="150" height="150" viewBox="0 0 24 24" strokeWidth="1" stroke={colors.blue} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="10" r="3" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    
                    <div className='d-flex flex-column pseudo mt-5 ml-3'>
                        <span> Profile contributeur </span>
                        <div> @Dieubeni </div>
                    </div>
                </div>
                <div className='mt-3 mb-3 d-flex flex-row justify-content-center'>
                    <a href="account.html" className="btn_add round-radius btn ml-2">
                    < svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-upload" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                            <polyline points="9 15 12 12 15 15" />
                            <line x1="12" y1="12" x2="12" y2="21" />
                            </svg>
                        <span> Importer des contenues</span>
                    </a>
                </div>
                <a className="active" href="#home">
                    <span>Tableau de bord </span>
                </a>
                <a href="#news"> <span> Gérer les contenues </span> </a>
                <a href="#contact"><span>Contenus gratuit </span></a>
                <a href="#about"> <span>Gérer les autorisations</span> </a>
                <a href="#about"><span>Mes statistiques</span></a>
                <a href="#about"> <span>Informations pour les contributeus</span> </a>
                <a href="#about"> <span>Paramètres de compte</span> </a>

                </div>
            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Sidemenu;
