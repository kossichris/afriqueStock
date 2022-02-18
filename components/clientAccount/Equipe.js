import React from 'react';
import { colors } from '../../constants/colors';
import Buttonsmall from '../ButtonSmall';
import equipeStyles from '../css/Equipe.css'

const Equipe = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <h5 className="text-center mt-4 mb-4">
                            Mon équipe
                        </h5>
                        <h6 className="text-center"> Les membres de votre équipe </h6>
                    </div>
                    <div className="table-wrapper mt-4">
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th>NOM</th>
                                    <th>EMAIL</th>
                                    <th>RÔLE</th>
                                    <th>MODIFIER</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vidog Analyse</td>
                                    <td>Vidognice@gmail.com</td>
                                    <td>Graphiste</td>
                                    <td>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.grey_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                            </svg>
                                        </span>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.blue} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </span>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Vidog Analyse</td>
                                    <td>Vidognice@gmail.com</td>
                                    <td>Graphiste</td>
                                    <td>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.grey_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                            </svg>
                                        </span>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.blue} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </span>
                                    </td>

                                </tr>

                                <tr>
                                    <td>Vidog Analyse</td>
                                    <td>Vidognice@gmail.com</td>
                                    <td>Graphiste</td>
                                    <td>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.grey_dark} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                            </svg>
                                        </span>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke={colors.blue} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </span>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="col-xl-12 col-lg-12 text-center mt-5">
                        <h4 className="">Remplissez ce formulaire</h4>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-xs-12 table d-flex flex-row flex-wrap justify-content-around">
                        <form className="d-flex flex-row flex-wrap justify-content-between mt-5">
                            <div className="col-sm-12 col-lg-4 d-flex flex-column flex-wrap justify-content-between">
                                <fieldset>
                                    <label> Nom de famille </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="Kossi chris " type="text" id="name" name="name" />
                                </fieldset>
                                <fieldset>
                                    <label> Nouveau mot de passe </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="**** **** ****" type="password" id="password" name="password" />
                                </fieldset>
                                <fieldset>
                                    <label> Région </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="Littoral " type="text" id="region" name="region" />
                                </fieldset>
                                <fieldset>
                                    <label> Téléphone </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="(+33) 3444 3404 2284 " type="tel" id="telephone" name="telephone" />
                                </fieldset>
                            </div>
                            <div className="col-sm-12 col-lg-4 d-flex flex-column flex-wrap justify-content-between">
                                <fieldset>
                                    <label> Prénoms </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="christian " type="text" id="firstname" name="firstname" />
                                </fieldset>
                                <fieldset>
                                    <label> Adresse </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="" type="text" id="adress" name="adress" />
                                </fieldset>
                                <fieldset>
                                    <label> Code postal </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="2284 " type="text" id="code" name="code" />
                                </fieldset>
                                <fieldset>
                                    <label> Profession </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="Ingénieur d'applications " type="text" id="profession" name="profession" />
                                </fieldset>
                            </div>
                            <div className=" col-sm-12 col-lg-4 d-flex flex-column flex-wrap justify-content-between">
                                <fieldset>
                                    <label> Email </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="chris@gmail.com " type="text" id="email" name="email" />
                                </fieldset>
                                <fieldset>
                                    <label> Ville </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="Cotonou " type="text" id="city" name="city" />
                                </fieldset>
                                <fieldset>
                                    <label> Pays </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="Benin " type="text" id="country" name="country" />
                                </fieldset>
                                <fieldset>
                                    <label> Société </label>
                                    <input className="form-control rounded-0 mr-2" placeholder="BSD " type="text" id="company" name="company" />
                                </fieldset>
                            </div>
                        </form>

                    </div>
                    <section className="mt-5">
                        <div class="row add_bottom_30">
                            <div class="col-md-6">
                                <ul class="bullets">
                                    <li>Modification du compte principal</li>
                                    <li>Voir et gérer les contacts</li>
                                    <li>Voir et modifier les mots de passe </li>
                                    <li>Gérer les parametres su compte principal</li>
                                    <li>Recevoir les emails généraux</li>
                                    <li>Passer de nouvelles commandes/mise à jour/ annulations</li>
                                    <li>Pouvoir contacter le support</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="bullets">
                                    <li>10 téléchargements par mois </li>
                                    <li>50 téléchargements par mois </li>
                                    <li>60 téléchargements par mois </li>
                                    <li>80 téléchargements par mois </li>
                                    <li>90 téléchargements par mois </li>
                                    <li>100 téléchargements par mois </li>
                                    <li>150 téléchargements par mois </li>

                                </ul>
                            </div>
                        </div>

                    </section>
                    <div className="col-xl-10 col-lg-10 col-xs-12 table  d-flex flex-row justify-content-around">
                        <Buttonsmall text="Inviter" bgColor={colors.blue_light} isFlex={false} isTop={true} width="100% !important" color="#ffff" shape='round' />
                    </div>
                </div>
            </div>

            <style jsx>
                {equipeStyles}
            </style>
        </>
    );
}

export default Equipe;
