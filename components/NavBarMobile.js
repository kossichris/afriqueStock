import React from 'react';
import Styles from '../components/css/NavBarMobile.css'
import { colors } from '../constants/colors';
import Button from './Button';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import Link from 'next/link';


const flags = [
    "Français",
    "Anglais"
]
const Navbarmobile = () => {
    // Calling useRouter() hook
    const router = useRouter()
    // console.log(router)
    return (
        <div>
            <div className="container 	d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none d-none d-lg-block d-xl-none">
                <div className="phone">
                    <div className="content">
                        <nav role="navigation">
                            <div id="menuToggle">
                                <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    <li>
                                        <Link href="/accueil/photo">
                                            <a href="#0">Photos</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/accueil/vecteur">
                                            <a href="#0">Vecteurs & illustration</a>
                                        </Link>
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

                                    <hr />
                                    <li>
                                    </li>
                                    <li>
                                        <Link href="/formules">
                                            <a href="#0">Formules & tarifs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/accueil">
                                            <a href="#0">Vendre</a>
                                        </Link>
                                    </li>

                                </ul>

                            </div>

                        </nav>
                    </div>
                </div>
            </div>

            <style jsx>
                {Styles}
            </style>
        </div>
    );
}

export default Navbarmobile;
