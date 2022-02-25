import React from 'react';
import Image from 'next/image'
import logo from '/public/images/logo_footer.png'
import Footerlang from './FooterLang';
import Footercopyright from './footerCopyright';
import styles from './css/Footer.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="plus_border">
            <div className="container margin_60_35">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <a href="index.html" title="Sparker - Directory and listings template">
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={165}
                                height={35}
                                className="logo_normal"
                            />

                        </a>
                        <div className="collapse dont-collapse-sm" id="collapse_ft_1">
                            <p>Afristock est une agence de photographie microstock, 100% Africaines  en pleine croissance
                                qui met en valeur la beauté de l'Afrique à travers des oeuvres créatives  de ses artistes photographes
                                vidéastes et illustrateur africains  à travers le monde
                            </p>
                            <div className="follow_us">
                                <h5>Suivez-nous sur</h5>
                                <ul className="mt-3">
                                    <li><a className="rs mr-2" href="#0">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x="4" y="4" width="16" height="16" rx="2" />
                                            <line x1="8" y1="11" x2="8" y2="16" />
                                            <line x1="8" y1="8" x2="8" y2="8.01" />
                                            <line x1="12" y1="16" x2="12" y2="11" />
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                        </svg>
                                    </a></li>
                                    <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="4" y="4" width="16" height="16" rx="4" />
                                        <circle cx="12" cy="12" r="3" />
                                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                    </svg></a></li>
                                    <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                    </svg></a></li>
                                    <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                    </svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 d-none d-sm-block">
                        <h3 data-target="#collapse_ft_1">EN SAVOIR PLUS</h3>
                        <div className='line-h'></div>
                        <div className="collapse dont-collapse-sm" id="collapse_ft_1">
                            <ul className="links">
                                <li>
                                    <Link href="/about">
                                        <a href="#0">Qui sommes-nous</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/formules">
                                        <a href="#0">Nos formules & tarifs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/accueil">
                                        <a href="#0">Nos partenaire</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contributeursAccueil">
                                        <a href="#0">Devenir contributeur</a>
                                    </Link >

                                </li>
                                <li>
                                    <Link href="/redevance">
                                        <a href="#0">Redevance</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/photo">
                                        <a href="#0">Modèle photo</a>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 d-none d-sm-block">
                        <h3 data-target="#collapse_ft_2">INFOS LEGALES</h3>
                        <div className='line-h'></div>
                        <div className="collapse dont-collapse-sm" id="collapse_ft_2">
                            <ul className="links">
                                <li>
                                    <Link href="/conditions">
                                        <a href="#0">Conditions d'inscription</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/conditions">
                                        <a href="#0">Conditions d'utilisation</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/license">
                                        <a href="#0">Contrat de licence</a>
                                    </Link>

                                </li>
                                <li>
                                    <Link href="/droits">
                                        <a href="#0">Informations sur le droit d'auteur</a>
                                    </Link>

                                </li>
                                <li>
                                    <Link href="/accueil">
                                        <a href="#0">Accord de fourniture</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy">
                                        <a href="#0">Politique de confidentialité</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookies">
                                        <a href="#0">Politique relatives aux cookies</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 contact_ass d-none d-sm-block">
                        <h3 data-target="#collapse_ft_3">CONTACTS & ASSISTANCE</h3>
                        <div className='line-h'></div>
                        <div className="collapse dont-collapse-sm" id="collapse_ft_2">
                            <ul className="contacts">
                                <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                                    <span className="ml-3">(00229) 96509364 / 95409620 </span>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg> <span className="ml-2">contact@afriquestock.com</span>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="11" r="3" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg> <span className="ml-2">Cotonou - Benin BP 3205</span> </li>
                                <li>
                                    <Link href="/assistance">
                                        <a href="account.html" className="btn_add round-radius btn ml-2">CONTACTEZ LE SUPPORT</a>
                                    </Link>
                                </li>
                                <li>
                                    <div className="select-dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                            <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                                        </svg>
                                        <select>
                                            <option value="Option 1">Français</option>
                                            <option value="Option 2">Anglais</option>
                                            <option value="Option 3">Espagnol</option>
                                        </select>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>


                    <details className="col-lg-3 col-md-6 col-sm-12 d-block d-sm-none">
                        <summary>
                            QUI SOMMES-NOUS
                        </summary>
                        <ul>
                            <li>
                                Afristock est une agence de photographie microstock, 100% Africaines  en pleine croissance
                                qui met en valeur la beauté de l'Afrique à travers des oeuvres créatives  de ses artistes photographes
                                vidéastes et illustrateur africains  à travers le monde
                                <div className="follow_us">
                                    <h5>Suivez-nous sur</h5>
                                    <ul className="mt-3">
                                        <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pinterest" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="8" y1="20" x2="12" y2="11" />
                                            <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                                            <circle cx="12" cy="12" r="9" />
                                        </svg></a></li>
                                        <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x="4" y="4" width="16" height="16" rx="4" />
                                            <circle cx="12" cy="12" r="3" />
                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                        </svg></a></li>
                                        <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                        </svg></a></li>
                                        <li><a className="rs mr-2" href="#0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                        </svg></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </details>
                    <details className="col-lg-3 col-md-6 col-sm-12 d-block d-sm-none">
                        <summary>
                            EN SAVOIR PLUS
                        </summary>
                        <ul className="links">
                            <li>
                                <Link href="/about">
                                    <a href="#0">Qui sommes-nous</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/formules">
                                    <a href="#0">Nos formules & tarifs</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/accueil">
                                    <a href="#0">Nos partenaire</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contributeursAccueil">
                                    <a href="#0">Devenir contributeur</a>
                                </Link >

                            </li>
                            <li>
                                <Link href="/redevance">
                                    <a href="#0">Redevance</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/photo">
                                    <a href="#0">Modèle photo</a>
                                </Link>

                            </li>
                        </ul>

                    </details>
                    <details className="col-lg-3 col-md-6 col-sm-12 d-block d-sm-none">
                        <summary>
                            CONTACTS & ASSISTANCE
                        </summary>
                        <ul className="contacts">
                            <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                                <span className="ml-3">(00229) 96509364 / 95409620 </span>
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg> <span className="ml-2">contact@afriquestock.com</span>
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="11" r="3" />
                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg> <span className="ml-2">Cotonou - Benin BP 3205</span> </li>
                            <li>
                                <Link href="/assistance">
                                    <a href="account.html" className="btn_add round-radius btn ml-2">CONTACTEZ LE SUPPORT</a>
                                </Link>
                            </li>
                            <li>
                                <div className="select-dropdown">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                        <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                    </svg>
                                    <select>
                                        <option value="Option 1">Français</option>
                                        <option value="Option 2">Anglais</option>
                                        <option value="Option 3">Espagnol</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </details>

                </div>

                <div className="divider"></div>
                <Footerlang />
            </div>
            <Footercopyright />

            <style jsx>
                {styles}
            </style>
        </footer>
    );
}

export default Footer;
