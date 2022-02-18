import React from 'react';
import Button from '../../components/Button';
import Footercopyrightwhitebg from '../../components/FooterCopyrightWhiteBg';
import Stickywhitenavbar from '../../components/StickyWhiteNavbar';
import { colors } from '../../constants/colors';
import registerStyles from './style.css'
import Link from 'next/link'


const Index = () => {
    return (
        <>
            <Stickywhitenavbar />
            <div id="login_bg">
                <div className="conteneur d-flex flex-direction-row flex-wrap justify-content-center">
                    <aside className="aside-1 d-flex flex-direction-column flex-wrap justify-content-start">

                        <strong className="form-sm-title mb-4">  Créez votre compte gratuit et:  </strong>
                        <span>  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg> Téléchargez gratuitement chaque jour des contenues 100% africain avec licence </span>
                        <span>  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg> Economisez jusqu'à 40% sur chaque contenue lorsque vous achetez un pack! </span>
                        <span>  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg> Accéder aux abonnements  les plus abordables n'importe ou </span>
                        <span>  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg> Suivez facilement votre historique de téléchargement et de navigation </span>
                        <span>  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg> Des factures automatisées </span>

                    </aside>

                    <div id="register">
                        <aside>

                            <form>
                                <h2 style={{ fontWeight: "700" }}> Créez un compte </h2>
                                <div className="divider"><span></span></div>
                                <small className="form-sm-title mb-4"> <small> Avez-vous un compte?  </small>
                                    <Link href="/register"><a className="login_link" href="">Connectez-vous maintenant</a>
                                    </Link>

                                </small>
                                <div className="form-group mt-3">
                                    <input type="email" readOnly className="form-control" placeholder="Email adress" style={{ borderRadius: "30px" }} name="email" id="email" />
                                </div>
                                <div className="row mt-3">
                                    <div className="form-group col-6">
                                        <input type="text" readOnly className="form-control" placeholder="Nom" style={{ borderRadius: "30px" }} name="email" id="email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" readOnly className="form-control" placeholder="Prénoms" style={{ borderRadius: "30px" }} name="password" id="password" value="" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="form-group col-6">
                                        <input type="text" readOnly className="form-control" placeholder="Pays" style={{ borderRadius: "30px" }} name="email" id="email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="tel" readOnly className="form-control" placeholder="Téléphone" style={{ borderRadius: "30px" }} name="password" id="password" value="" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="password" readOnly className="form-control" placeholder="Password" style={{ borderRadius: "30px" }} name="password" id="password" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="password" readOnly className="form-control" placeholder="Confirmer le mot de passe" style={{ borderRadius: "30px" }} name="password" id="password" value="" />
                                </div>

                                <Button text="Connexion" shape="round" color="white" bgColor={colors.primary} width="100%" />
                                <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Mot de passe oublié?</a></div>

                            </form>
                        </aside>
                    </div>

                </div>
                <style jsx>
                    {registerStyles}
                </style>
            </div>
            <Footercopyrightwhitebg />
        </>
    );
}

export default Index;
