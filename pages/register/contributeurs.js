import React from 'react';
import Button from '../../components/Button';
import Footercopyrightwhitebg from '../../components/FooterCopyrightWhiteBg';
import Stickynavbar from '../../components/stickyNavbar';
import { colors } from '../../constants/colors';
import registerStyles from '../../ComponentsStyled/register.css'
import Image from 'next/image'
import visa from '/public/images/visa_transparent.png'
import mc from '/public/images/master_card.png'
import ampExp from '/public/images/amExp.png'
import moov from '/public/images/moov_flooz.jpeg'
import mtn from '/public/images/MTN.jpeg'





const Contributeurs = () => {
    return (
        <>
            <Stickynavbar />
            <div id="login_bg">
                <div className="conteneur d-flex flex-direction-row flex-wrap justify-content-center">
                    <aside style={{ background: colors.bleu_dark, color: "#ffff" }} className="aside-2 d-flex flex-direction-column flex-wrap justify-content-start">

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <span className="ml-1"> Inscrivez et créez votre compte contributeur en toute sécurité! </span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <span className="ml-1">
                                Téléverser des contenues illimités à n'importe quel moment
                            </span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <span className="ml-1">Chaque fois qu'un acheteur télécharge votre contenue vous êtes rénumérés </span>
                        </div>

                    </aside>

                    <div id="register">
                        <aside>

                            <form className="contributeurs-register-wrapper">
                                <span className="form-sm-title form-title"> Ajouter des Informations supplémentaires pour devenir contributeur de contenue Afriquestock </span>

                                <div className="divider"><span></span></div>
                                <div className="form-group mt-3">
                                    <input type="email" readOnly className="form-control" placeholder="Nom d'utilisation ou votre entreprise" name="email" id="email" />
                                </div>
                                <div className="row mt-3">
                                    <div className="form-group col-6">
                                        <input type="text" readOnly className="form-control" placeholder="Profession" name="email" id="email" />
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" readOnly className="form-control" placeholder="Ville" name="password" id="password" value="" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <input type="text" readOnly className="form-control" placeholder="Adresse" name="password" id="password" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="file" readOnly className="form-control" placeholder="Joindre votre carte d'identité nationale en cours de validité" name="password" id="password" value="" />
                                </div>

                                <div className="text-start">Par quel moyen souhaitez-vous être payé ?</div>

                                <div className="form-group mt-3 d-flex flex-row justify-content-center radio-group ">
                                    <label className="container_radio mr-2">
                                        <input type="radio" name="client_type" checked="" value="private" />
                                        <span className="checkmark"></span>
                                        <div className="image-wrapper ml-1">
                                            <Image
                                                src={visa}
                                                alt="Picture of the author"
                                                width={30} height={20} quality={70}
                                                layout='responsive'
                                                className="credit-card-img"
                                            />
                                        </div>

                                    </label>
                                    <label className="container_radio mr-2" style={{ display: "inline-block" }}>
                                        <input type="radio" name="client_type" value="company" />
                                        <span className="checkmark"></span>
                                        <div className="image-wrapper ml-1">

                                            <Image
                                                src={mc}
                                                alt="Picture of the author"
                                                layout='responsive'
                                                className="credit-card-img"
                                                width={30} height={20} quality={70}
                                            />
                                        </div>
                                    </label>
                                    <label className="container_radio mr-2">
                                        <input type="radio" name="client_type" checked="" value="private" />
                                        <span className="checkmark"></span>
                                        <div className="image-wrapper ml-1">
                                            <Image
                                                src={ampExp}
                                                alt="Picture of the author"
                                                width={30} height={20} quality={70}
                                                layout='responsive'
                                                className="credit-card-img"
                                            />
                                        </div>
                                    </label>
                                    <label className="container_radio mr-2" style={{ display: "inline-block" }}>
                                        <input type="radio" name="client_type" value="company" />
                                        <span className="checkmark"></span>
                                        <div className="image-wrapper ml-1">
                                            <Image
                                                src={moov}
                                                alt="Picture of the author"
                                                width={30} height={20} quality={70}
                                                layout='responsive'
                                                className="credit-card-img"
                                            />
                                        </div>
                                    </label>

                                    <label className="container_radio mr-2" style={{ display: "inline-block" }}>
                                        <input type="radio" name="client_type" value="company" />
                                        <span className="checkmark"></span>
                                        <div className="image-wrapper ml-1">
                                            <Image
                                                src={mtn}
                                                alt="Picture of the author"
                                                width={30} height={20} quality={70}
                                                layout='responsive'
                                                className="credit-card-img"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <input type="password" readOnly className="form-control" placeholder="Votre adresse email pour recevoir des paiements" name="password" id="password" value="" />
                                </div>
                                <label className="container_radio mr-2" style={{ display: "inline-block" }}>
                                    <input type="radio" readOnly name="client_type" value="company" />
                                    <span className="checkmark"></span>
                                    <span className="text ml-1">
                                        En cliquant sur envoyer , vous acceptez <a>les conditions d'inscription ,</a><a> l'Accord de fourniture</a>
                                        et tous les documents annexes</span>
                                </label>

                                <Button text="Envoyer" shape="round" color="white" bgColor={colors.primary} width="100%" />
                                <div className="mt-2 bottom-txt"> Vous avez un compte?<a href="javascript:void(0);"> Connexion</a></div>

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

export default Contributeurs;
