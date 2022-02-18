import React from 'react';
import Image from 'next/image'
import logo_white_bg from '/public/images/logo_white_bg.png'
import styles from './css/Navbar.module.css'
import { colors } from '../constants/colors';
import Dropdownbutton from './DropDownButton';
import french from '/public/images/france.png'

const flags = [
    "Français",
    "Anglais"
]
const Stickywhitenavbar = () => {
    return (
        <div>
            <header className="header sticky white_bg">
                <div id="logo">
                    <Link href="/accueil">
                        <a href="index.html" title="Sparker - Directory and listings template">
                            <Image
                                src={logo_white_bg}
                                alt="Picture of the author"
                                width={165}
                                height={35}
                                className="logo_sticky"
                            />

                        </a>
                    </Link>
                </div>

                <nav id="menu" className="main-menu">
                    <ul className={styles.rightMenu}>
                        <li >
                            <span className="mr-4">
                                <span className="mr-2">Service Client</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-incoming" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.primary} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    <line x1="15" y1="9" x2="20" y2="4" />
                                    <polyline points="15 5 15 9 19 9" />
                                </svg>
                            </span></li>
                        <li><span><span href="" className={styles.lang}>Changer la langue
                            <Dropdownbutton flag={french} list={flags} arrowColor="grey" />
                        </span></span></li>
                    </ul>
                </nav>
            </header>



        </div>
    );
}

export default Stickywhitenavbar;
