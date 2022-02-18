import React from 'react';
import { colors } from '../../constants/colors';
import Buttonsmall from '../ButtonSmall';
import factureStyles from '../css/Facture.css'

const Facture = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <h5 className="text-center mt-4 mb-4">
                            Mes factures
                        </h5>
                    </div>
                    <div className="table-wrapper">
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>DESCRIPTION</th>
                                    <th>NUMERO DE FACTURE FISCAL</th>
                                    <th>MONTANT TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>05/08/2019</td>
                                    <td>Abonnements Photo - 10 fichiers/mois</td>
                                    <td>FAS023456677</td>
                                    <td>430$</td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                            <polyline points="7 11 12 16 17 11" />
                                            <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td>05/08/2019</td>
                                    <td>Abonnements Photo - 10 fichiers/mois</td>
                                    <td>FAS023456677</td>
                                    <td>430$</td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                            <polyline points="7 11 12 16 17 11" />
                                            <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                        </svg>
                                    </td>
                                </tr>

                                <tr>
                                    <td>05/08/2019</td>
                                    <td>Abonnements Photo - 10 fichiers/mois</td>
                                    <td>FAS023456677</td>
                                    <td>430$</td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                            <polyline points="7 11 12 16 17 11" />
                                            <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td>05/08/2019</td>
                                    <td>Abonnements Photo - 10 fichiers/mois</td>
                                    <td>FAS023456677</td>
                                    <td>430$</td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                            <polyline points="7 11 12 16 17 11" />
                                            <line x1="12" y1="4" x2="12" y2="16" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="2" />
                                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                        </svg>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <style jsx>
                {factureStyles}
            </style>
        </>
    );
}

export default Facture;
