import React from 'react';
import Styles from '../components/css/NavBarMobile.css'
import { colors } from '../constants/colors';
import Button from './Button';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';


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
            <div className="container d-none d-md-block d-lg-none d-sm-block d-md-none d-block d-sm-none">
                <div className="phone">
                    <div className="content">
                        <nav role="navigation">
                            <div id="menuToggle">
                                <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    <li><a href="#">Photos</a></li>
                                    <li><a href="#">Vecteurs&Illustrations</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">Editorial</a></li>
                                    <li><a href="#">Formules&Tarifs</a></li>
                                    <li><a href="#">Vendre</a></li>
                                    <li>
                                        <a href="account.html" className="btn_add round-radius btn mr-4"><span className="badge mr-2 round-radius">14</span>Fichier Disponible</a>
                                    </li>
                                    <li className="d-flex"><Button text="Connexion" shape="round" color="white" bgColor={colors.primary} /></li>
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
