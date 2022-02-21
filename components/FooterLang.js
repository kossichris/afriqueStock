import Image from 'next/image';
import React from 'react';
import footerStyles from './css/FooterLang.css'
import cards from '/public/images/cards.png'

const Footerlang = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    { /* <ul id="additional_links" className="d-flex flex-row  flex-wrap justify-content-center">
                        <li><span>LANGUES </span></li>
                        <li><span style={{ color: "#49b620", fontWeight: "800" }}>| </span></li>
                        <li><a href="#0">English</a></li>
                        <li><a href="#0">Deutsch</a></li>
                        <li><a href="#0">Français</a></li>
                        <li><a href="#0">Espanol</a></li>
                        <li><a href="#0">Italiano</a></li>
                        <li><a href="#0">Português</a></li>
                        <li><a href="#0">Nederlands</a></li>
                        <li><a href="#0">Arabe</a></li>

                    </ul>*/}

                    <ul id="additional_links" className="d-flex flex-column  flex-wrap justify-content-center">
                        <li><span>Nos moyens de paiement </span></li>
                        <li>
                            <div>
                                <Image
                                    src={cards}
                                    alt="Picture of the author"
                                    width={300}
                                    height={40}
                                />
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {footerStyles}
            </style>

        </>
    );
}

export default Footerlang;
