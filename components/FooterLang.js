import React from 'react';
import footerStyles from './css/FooterLang.css'

const Footerlang = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <ul id="additional_links" className="d-flex flex-row  flex-wrap justify-content-center">
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
