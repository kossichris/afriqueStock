import React from 'react';
import Bannertext from '../../components/BannerText';
import Footer from '../../components/Footer';
import Stickynavbar from '../../components/StickyNavbar';

const Index = () => {
    return (
        <><Stickynavbar />
            <Bannertext text="Revenir au centre d'assistance d'afriquestock" title="Centre d'assistance afriquestock" />

            <main>
                <div className="container margin_60_35">

                    <div className="row">
                        <div className="col-lg-4 col-md-6 illustration">
                            <a className="box_topic" href="#0">
                                <span><i className="pe-7s-wallet"></i></span>
                            </a>
                            <p>Questions fréquemment posées sur le site.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 illustration">
                            <a className="box_topic" href="#0">
                                <i className="pe-7s-users"></i>
                            </a>
                            <p>Signaler une violation de droit.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 illustration">
                            <a className="box_topic" href="#0">
                                <i className="pe-7s-help2"></i>
                            </a>
                            <p>Signaler un problème de disfonctionnement du site.</p>
                        </div>
                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default Index;
