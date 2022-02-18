import React from 'react';
import Footer from '../../components/Footer';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/stickyNavbar';
import Styles from '../../components/css/Accordeon.css'

const Index = () => {
    return (

        <>

            <Stickynavbar />
            <main className="" style={{ background: "#ffff" }}>
                <div className="searchbar-container">  <Searchbar /></div>
                <div className="container margin_60_35 mt-5">
                    <div className="row">
                        <div className="col-lg-1" ></div>
                        <div className="col-lg-10" id="contrat">
                            <h4 className="nomargin_top  text-center mb-3">INhtmlForMATIONS SUR LE DROIT D'AUTEUR</h4>
                            <div className="tabs">
                                <div className="tab">
                                    <input type="checkbox" id="chck1" />
                                    <label className="tab-label" htmlFor="chck1">1 - ACCORD CONDITION D'UTILISATION AFRIQUESTOCK</label>
                                    <div className="tab-content">
                                        Place your detailed contents here.
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck2" />
                                    <label className="tab-label" htmlFor="chck2">2 - PROPRIETE DU SITE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck3" />
                                    <label className="tab-label" htmlFor="chck3">3 - UTILISATION DE CE SITE ET DU CONTENU</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck3" />
                                    <label className="tab-label" htmlFor="chck3">4 - MARQUES DE COMMERCE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck4" />
                                    <label className="tab-label" htmlFor="chck4">5 - AUTORISATION DU MODELE ET DU PROPRIETAIRE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck5" />
                                    <label className="tab-label" htmlFor="chck5">6 - DONNEES LIEES A L'ENREGISTREMENT ET SECURITE DU COMPTE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" ></div>
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Index;
