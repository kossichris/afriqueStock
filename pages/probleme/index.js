import React from 'react';
import Bannertext from '../../components/BannerText';
import Button from '../../components/Button';
import Footercopyright from '../../components/footerCopyright';
import Footerlang from '../../components/FooterLang';
import Stickynavbar from '../../components/stickyNavbar';
import { colors } from '../../constants/colors';

const Index = () => {
    return (
        <><Stickynavbar />
            <Bannertext title={"Signaler un problème de dysfonctionnement du site"} />
            <main className="pattern">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 pr-xl-5"></div>
                        <div className="col-xl-8 col-lg-8 pr-xl-5  mt-5">

                            <div id="message-contact"></div>
                            <form method="post" id="contactform" className="d-flex flex-column justify-content-center" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Nom complet</label>
                                            <input className="form-control rounded-0" type="text" id="name_contact" name="name_contact" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Adresse mail</label>
                                            <input className="form-control rounded-0" type="text" id="lastname_contact" name="lastname_contact" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Sujet</label>
                                            <input className="form-control rounded-0" type="email" id="email_contact" name="email_contact" />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <label>Expliquez</label>
                                    <textarea className="form-control rounded-0" id="message_contact" name="message_contact" style={{ height: "150px" }}></textarea>
                                </div>

                                <p className="add_top_30 d-flex flex-row justify-content-center mb-5">
                                    <Button text="Connexion" color="#ffff" bgColor={colors.primary} shape="round" />
                                </p>
                            </form>
                        </div>
                        <div className="col-xl-2 col-lg-2 pr-xl-5"></div>

                    </div>
                </div>

            </main>

            <Footerlang />
            <Footercopyright />

        </>
    );
}

export default Index;
