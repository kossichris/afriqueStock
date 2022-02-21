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
                        <li>
                            <Link href="/accueil/vecteur">
                                <span>
                                    <a href="#0">Vecteurs & illustration</a>
                                </span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/accueil/video">
                                <span>
                                    <a href="#0">Vidéos</a>
                                </span>

                            </Link>
                        </li>
                        <li>
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
                        <li>
                            <Buttonbadge />
                        </li>
                        <li>
                            <Link href="/formules">
                                <span>
                                    <a href="#0">Formules & tarifs</a>
                                </span>

                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard">
                                <span>
                                    <a href="#0">Vendre</a>
                                </span>

                            </Link>
                        </li>

                        <li>
                            <Link href="/auth">
                                <Buttonsmall text="Connexion" height="27px" fontSize="12px" fontWeight="300" padding="7px" paddingLeft="12px" paddingRight="13px" shape="round" color="#fff" bgColor={colors.primary} />
                            </Link>
                        </li>
                        <li>
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
