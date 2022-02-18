import React from 'react';
import Footer from '../../components/Footer';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';
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
                            <div className="tabs">
                                <div className="tab">
                                    <input type="checkbox" id="chck1" />
                                    <label className="tab-label" htmlFor="chck1">Qu'est ce que AFRIQUESTOCK?</label>
                                    <div className="tab-content">
                                        Place your detailed contents here.
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck2" />
                                    <label className="tab-label" htmlFor="chck2">PROPRIETE DU SITE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck3" />
                                    <label className="tab-label" htmlFor="chck3">UTILISATION DE CE SITE ET DU CONTENU</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck3" />
                                    <label className="tab-label" htmlFor="chck3">MARQUES DE COMMERCE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck4" />
                                    <label className="tab-label" htmlFor="chck4">AUTORISATION DU MODELE ET DU PROPRIETAIRE</label>
                                    <div className="tab-content">
                                        Your accordion contents
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck5" />
                                    <label className="tab-label" htmlFor="chck5">DONNEES LIEES A L'ENREGISTREMENT ET SECURITE DU COMPTE</label>
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
