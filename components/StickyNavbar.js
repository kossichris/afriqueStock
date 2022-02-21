import React from 'react';
import Image from 'next/image'
import logo_sticky from '/public/images/logo_sticky.png'
import french from '/public/images/france.png'
import Dropdownbutton from './DropDownButton';
import Styles from '../components/css/NavBar.css'
import { colors } from '../constants/colors';
import Navbarmobile from './NavBarMobile';
import Link from 'next/link';
import Buttonbadge from './ButtonBadge';
import Buttonsmall from '../components/ButtonSmall';

const flags = [
    "Français",
    "Anglais"
]

const Stickynavbar = () => {
    return (
        <div>
            <header className="header sticky">
                <div id="logo">
                    <Link href="/accueil">
                        <a href="index.html" title="Sparker - Directory and listings template">
                            <Image
                                src={logo_sticky}
                                alt="Picture of the author"
                                width={165}
                                height={35}
                                className="logo_normal"
                            />

                        </a>
                    </Link>
                </div>

                <nav id="menu" className="main-menu mt-2 left ml-5 stickynav-font">
                    <ul >
                        <li>
                            <Link href="/accueil/photo">
                                <span>
                                    <a href="#0">Photos</a>
                                </span>

                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href="/accueil/vecteur">
                                <span>
                                    <a href="#0">Vecteurs & illustration</a>
                                </span>

                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href="/accueil/video">
                                <span>
                                    <a href="#0">Vidéos</a>
                                </span>

                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link href="/accueil/editorial">
                                <span>
                                    <a href="#0">Editorial</a>
                                </span>

                            </Link>
                        </li>
                    </ul>
                </nav>

                <Navbarmobile />

                <nav id="menu" className="main-menu stickynav-font">
                    <ul>
                        <li className='mr-4'>
                            <Buttonbadge />
                        </li>
                        <li className='mr-4'>
                            <Link href="/formules">
                                <span>
                                    <a href="#0">Formules & tarifs</a>
                                </span>

                            </Link>
                        </li>

                        <li className='mr-4'>
                            <Link href="/dashboard">
                                <span>
                                    <a href="#0">Vendre</a>
                                </span>

                            </Link>
                        </li>
                        <li>
                            <span><a href="#0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle user-circle" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="9" />
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                </svg>
                                @Dieubeni</a>
                            </span>
                            <ul className="infos">
                                <li className="profile-info">
                                    <a className="d-flex flex-row" href="grid-listings-filterscol-search-aside.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="9" />
                                            <circle cx="12" cy="10" r="3" />
                                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                        </svg>
                                        <span className="ml-3  mt-2 d-flex flex-column justify-content-evenly">
                                            <strong> Hermann Schintzel</strong>
                                            <small className='mt-1'> dieubeni@gmail.com </small>
                                        </span>

                                    </a>
                                </li>
                                <li>
                                    <Link href="/dashboard">
                                        <a href="#0">Mon compte contributeur</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'PROFILE' },
                                        }}
                                    >
                                        <a href="#0">Mon compte client </a>

                                    </Link>

                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'DOWNLOAD' },
                                        }}
                                    >
                                        <a href="#0">Mes téléchargements</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'FAVORITE' },
                                        }}
                                    >
                                        <a href="#0">Mes favoris</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'FACTURE' },
                                        }}
                                    >
                                        <a href="#0">Mes factures</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'FORMULE' },
                                        }}
                                    >
                                        <a href="#0">Mes formules d'abonnements</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'PAYMENT' },
                                        }}
                                    >
                                        <a href="#0">Mes détails de paiement</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/clientAccount',
                                            query: { name: 'TEAM' },
                                        }}
                                    >
                                        <a href="#0">Mon équipe</a>
                                    </Link>
                                </li>
                                <div className="last-li text-center text-white" style={{ color: "white !important" }}><a href="#">Déconnexion</a></div>


                            </ul>
                        </li>
                        <li className='mr-4'>
                            <Link href="/auth">
                                <Buttonsmall text="Connexion" height="27px" fontSize="12px" fontWeight="300" padding="7px" paddingLeft="12px" paddingRight="13px" shape="round" color="#fff" bgColor={colors.primary} />
                            </Link>
                        </li>
                        <li >
                            <Dropdownbutton flag={french} list={flags} arrowColor="white" />
                        </li>
                    </ul>
                </nav>
            </header>

            <style jsx>
                {Styles}
            </style>
        </div>
    );
}

export default Stickynavbar;
