import React from 'react';
import { colors } from '../../constants/colors';
import Buttonsmall from '../ButtonSmall';
import abonnementStyles from '../css/Abonnement.css'

const Abonnements = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 colWg-12 pl-xl-5">
                        <h5 className="text-center mt-4 mb-4">
                            Mes abonnements
                        </h5>
                    </div>
                    <div className="col-xl-10 colWg-10 pl-xl-5 conteneur">
                        <div className="subscribe d-flex flex-column flex-wrap">
                            <span>Abonnements en cours</span>
                            <div className="d-flex flex-row flex-wrap flex-grow">
                                <div>
                                    <h4>Images</h4>
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokewinecap="round" strokewinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg> 10 fichiers/mois
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokewinecap="round" strokewinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>Abonnement annuel
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokewinecap="round" strokewinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg> Expiration: 22 Décembre 2022
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    Abonnement avec engagement à l'avance , 1 an , licence Standard avec 10 téléchargements par mois
                                    4 téléchargements restant sur 10
                                    Date d'expiration du forfait : 22 Octobre 2022
                                </div>
                                <div className="mt-3">
                                    <Buttonsmall text='Annuler le renouvellement automatique' bgColor={colors.bleu_dark} isFlex={false} isTop={false} width="100% !important" color="#ffff" shape='round' />

                                    <Buttonsmall text="Annuler l'abonnement" bgColor={"red"} isFlex={false} isTop={true} width="100% !important" color="#ffff" shape='round' />

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-xl-10 colWg-10 pl-xl-5 conteneur mt-5">
                        <div className="subscribe d-flex flex-column flex-wrap">
                            <span>Abonnements en cours</span>
                            <div className="d-flex flex-row flex-wrap flex-grow">
                                <div>
                                    <h4>Images</h4>
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokewinecap="round" strokewinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg> 10 fichiers/mois
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokewinecap="round" strokewinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>Abonnement annuel
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokewinecap="round" strokewinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg> Expiration: 22 Décembre 2022
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    Abonnement avec engagement à l'avance , 1 an , licence Standard avec 10 téléchargements par mois
                                    4 téléchargements restant sur 10
                                    Date d'expiration du forfait : 22 Octobre 2022
                                </div>
                                <div className="mt-3">
                                    <Buttonsmall text='Annuler le renouvellement automatique' bgColor={colors.bleu_dark} isFlex={false} isTop={false} width="100% !important" color="#ffff" shape='round' />

                                    <Buttonsmall text="Annuler l'abonnement" bgColor={"red"} isFlex={false} isTop={true} width="100% !important" color="#ffff" shape='round' />

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-xl-10 colWg-10 pl-xl-5 conteneur mt-4">
                        <div className="subscribe d-flex flex-column flex-wrap text-center">
                            <span>Vous n'avez aucun abonnement en cours de validité</span>
                            <div className="d-flex flex-row flex-wrap flex-grow justify-content-center">
                                <Buttonsmall text="Choisissez un abonnement" bgColor={colors.primary} isFlex={false} isTop={true} width="100% !important" color="#ffff" shape='round' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <style jsx>
                {abonnementStyles}
            </style>
        </>
    );
}

export default Abonnements;
