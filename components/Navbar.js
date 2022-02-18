import React from 'react';
import Image from 'next/image'
import logo_sticky from '/public/images/logo_sticky.png'
import Button from './Button';
import { colors } from '../constants/colors';
import Dropdownbutton from './DropDownButton';
import french from '/public/images/france.png'
import Navbarmobile from './NavBarMobile';
import Link from 'next/link'
import Buttonbadge from './ButtonBadge';

const flags = [
    "Français",
    "Anglais"
]


const Navbar = () => {
    return (
        <div>
            <header className="header menu_fixed">
                <div id="logo">
                    <a href="index.html" title="Sparker - Directory and listings template">
                        <Image
                            src={logo_sticky}
                            alt="Picture of the author"
                            width={165}
                            height={35}
                            className="logo_normal"
                        />

                    </a>
                </div>

                <nav id="menu" className="main-menu mt-1 left ml-5 stickynav-font">
                    <ul >
                        <li>
                            <Link href="/photo">
                                <span>
                                    <a href="#0">Photos</a>
                                </span>
                            </Link>

                        </li>
                        <li>
                            <span>
                                <Link href="/accueil/vecteur">
                                    <a href="#0">Vecteurs & illustration</a>
                                </Link>
                            </span>
                        </li>
                        <li>
                            <Link href="/accueil/video">
                                <a href="#0">Vidéos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/accueil/editorial">
                                <a href="#0">Editorial</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Navbarmobile />
                <nav id="menu" className="main-menu">
                    <ul>
                        <li>
                            <Buttonbadge />
                        </li>
                        <li>
                            <Link href="/register/contributeurs">
                                <span>
                                    <a href="#0">Vendez vos oeuvres</a>
                                </span>
                            </Link>

                        </li>
                        <li>
                            <Link href="/formules">
                                <span>
                                    <a href="#0">Formules & tarifs</a>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/auth">
                                <Button text="Connexion" color="#fff" bgColor={colors.primary} shape="round" />
                            </Link>
                        </li>
                        <li>
                            <Dropdownbutton flag={french} list={flags} arrowColor="white" />
                        </li>
                    </ul>
                </nav>

            </header>

        </div>
    );
}

export default Navbar;
