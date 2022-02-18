import React from 'react';
import { colors } from '../../constants/colors';
import Buttonsmall from '../ButtonSmall';
import detailStyles from '../css/DetailPaiement.css'

const Detailpaiement = () => {
    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <h5 className="text-center mt-4 mb-4">
                            Détails de paiement
                        </h5>
                    </div>

                    <div className="row grey_container">
                        <div className="add_container col-lg-4 col-sm-4 col-xs-12">
                            <ul className="pricing-list bounce-invert">
                                <li>
                                    <ul className="pricing-wrapper">
                                        <li data-type="monthly" className="is-visible is-ended">
                                            <div className="pricing-body d-flex flex-column text-center">

                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="9" y1="12" x2="15" y2="12" />
                                                        <line x1="12" y1="9" x2="12" y2="15" />
                                                    </svg>
                                                </div>
                                                <span>Ajouter une nouvelle carte</span>
                                            </div>

                                        </li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                        <div className="payment_container col-lg-8 col-sm-8 col-xs-12">
                            <div className="">
                                <div className="mode_pay_container">
                                    <span className="">Mode de paiement</span>
                                    <div className="d-flex flex-row flex-wrap mt-3">
                                        <input className="form-control rounded-0 mr-3 lastname_contact" placeholder="**** **** **** 2284 " type="text" id="lastname_contact" name="lastname_contact" />
                                        <div className="update_btn  d-flex justify-content-center">
                                            <Buttonsmall text="Mettre à jour" bgColor={colors.primary} isFlex={false} isTop={false} width="100% !important" color="#ffff" shape='round' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="mode_pay_container">
                                    <span>Information de facturation</span>
                                    <div className="d-flex flex-row  flex-wrap justify-content-between mt-3">
                                        <textarea className="form-control message_contact col-lg-6 col-sm-6 col-xs-12" id="message_contact" name="message_contact" ></textarea>
                                        <div className="update_btn_2 col-lg-6 col-sm-6 col-xs-12 mt-5 d-flex justify-content-center">
                                            <Buttonsmall text="Mettre à jour" bgColor={colors.primary} isFlex={false} isTop={true} width="100% !important" color="#ffff" shape='round' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>
                {detailStyles}
            </style>
        </>
    );
}

export default Detailpaiement;
