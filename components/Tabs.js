import React from 'react';
import Styles from '../components/css/Tabs.css'


const Tabs = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="cctabs">
                        <input checked id="one" name="tabs" type="radio" />
                        <label className="label" htmlFor="one"><i className="fa fa-pencil-square-o"></i> Par mois</label>
                        <input id="two" name="tabs" type="radio" readOnly value="Two" />
                        <label className="label" htmlFor="two"><i className="fa fa-magic"></i> Par an</label>

                        <div className="panels mt-5">
                            <div className="panel container">
                                <div className="grid cc-text-center row justify-content-center">
                                    <div className="table col-lg-3 col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-around mr-2">
                                        <strong>10 Vidéos/mois <br />
                                            <small> 50% de réduction soit 33$ par vidéo </small>
                                        </strong>


                                        <div className="h3-text">180$</div>
                                        <strong >Forfait mensuel F1</strong>
                                    </div>
                                    <div className="table col-lg-3 col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-around mr-2">
                                        <strong>10 Vidéos/mois <br />
                                            <small> 50% de réduction soit 33$ par vidéo </small>
                                        </strong>


                                        <div className="h3-text">330$</div>
                                        <strong >Forfait mensuel F2</strong>
                                    </div>
                                    <div className="table col-lg-3 col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-around">
                                        <strong>10 Vidéos/mois <br />
                                            <small> 50% de réduction soit 33$ par vidéo </small>
                                        </strong>


                                        <div className="h3-text">480$</div>
                                        <strong >Forfait mensuel F3</strong>


                                    </div>

                                    <div className="container mt-5">
                                        <div className="row">
                                            <div className="col-lg-4 text-left ">
                                                <div className="bottom-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1"> Droits de modifier ou dans le but de créer des oeuvres dérivées</span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">
                                                        Utilisation personnelle et commerciaux
                                                    </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Utilisation imprimée ou numerique </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Utilisation pour marketing et publicité </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-left ">
                                                <div className="bottom-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1"> Droits d'utilisation à vie</span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">
                                                        Utiliser depuis n'importe où dans le monde
                                                    </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Nombre d'utilisateurs 4  </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Pas de limite de téléchargement quotidien  </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-left ">
                                                <div className="bottom-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1"> Renouvellement automatique avec désactivation simplifiée</span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">
                                                        Forfait non utilisé sera expirée à échéance
                                                    </span>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel container">
                                <div className="grid cc-text-center row justify-content-center">
                                    <div className="table col-lg-3 col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-around mr-2">
                                        <strong>10 Vidéos/mois <br />
                                            <small> 50% de réduction soit 33$ par vidéo </small>
                                        </strong>


                                        <div className="h3-text">180$</div>
                                        <strong >Forfait mensuel F1</strong>
                                    </div>
                                    <div className="table col-lg-3 col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-around mr-2">
                                        <strong>10 Vidéos/mois <br />
                                            <small> 50% de réduction soit 33$ par vidéo </small>
                                        </strong>


                                        <div className="h3-text">330$</div>
                                        <strong >Forfait mensuel F2</strong>
                                    </div>
                                    <div className="table col-lg-3 col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-around">
                                        <strong>10 Vidéos/mois <br />
                                            <small> 50% de réduction soit 33$ par vidéo </small>
                                        </strong>


                                        <div className="h3-text">480$</div>
                                        <strong >Forfait mensuel F3</strong>


                                    </div>

                                    <div className="container mt-5">
                                        <div className="row">
                                            <div className="col-lg-4 text-left ">
                                                <div className="bottom-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1"> Droits de modifier ou dans le but de créer des oeuvres dérivées</span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">
                                                        Utilisation personnelle et commerciaux
                                                    </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Utilisation imprimée ou numerique </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Utilisation pour marketing et publicité </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-left ">
                                                <div className="bottom-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1"> Droits d'utilisation à vie</span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">
                                                        Utiliser depuis n'importe où dans le monde
                                                    </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Nombre d'utilisateurs 4  </span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">Pas de limite de téléchargement quotidien  </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-left ">
                                                <div className="bottom-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1"> Renouvellement automatique avec désactivation simplifiée</span>
                                                </div>
                                                <div className="bottom-text mt-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="#49B521" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                    <span className="ml-1">
                                                        Forfait non utilisé sera expirée à échéance
                                                    </span>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Tabs;
