import React from 'react';
import Image from 'next/image'
import logo_sticky from '/public/images/logo_sticky.png'
import Button from './Button';
import { colors } from '../constants/colors';
import Dropdownbutton from './DropDownButton';
import french from '/public/images/france.png'
import english from '/public/images/united-kingdom.png'
import Navbarmobile from './NavBarMobile';
import Link from 'next/link'
import Buttonbadge from './ButtonBadge';

const flags = [
    {
        flag: english,
        title: "Anglais"
    },
    {
        flag: french,
        title: "Français"
    },
]


const Navbar = () => {
    return (
        <div>
            <header className="header menu_fixed">
                <div id="logo" className="logoSticky">
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

                <nav id="menu" className="main-menu mt-1 left ml-4 stickynav-font">
                    <ul >
                        <li className='ml-4'>
                            <Link href="/accueil/photo">
                                <span>
                                    <a href="#0">Photos</a>
                                </span>
                            </Link>

                        </li>
                        <li className='ml-4'>
                            <span>
                                <Link href="/accueil/vecteur">
                                    <a href="#0">Vecteurs & illustration</a>
                                </Link>
                            </span>
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
                <nav id="menu" className="main-menu">
                    <ul>
                        <li className='mr-4'>
                            <Buttonbadge />
                        </li>
                        <li className='mr-4'>
                            <Link href="/contributeursAccueil">
                                <span>
                                    <a href="#0">Vendez vos oeuvres</a>
                                </span>
                            </Link>

                        </li>
                        <li className='mr-4'>
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
                            <Dropdownbutton flag={french} list={["Français", "Anglais"]} arrowColor="white" />
                        </li>
                    </ul>
                </nav>

            </header>

        </div>
    );
}

export default Navbar;
