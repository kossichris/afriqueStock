import React from 'react';
import { colors } from '../../constants/colors';
import Button from '../Button';
import invitationStyles from '../css/InvitationSent.css'

const InvitationsentPrime = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <div className="conteneur mt-4">
                            <div id="trapezoid1"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="204" height="204" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff82" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                            </svg>
                            <div id="trapezoid"></div>
                            <div className="round-container-icon-prime">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="44" height="44" viewBox="0 0 24 24" strokeWidth="3" stroke={colors.blue_light_3x} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                </svg>
                            </div>


                            <h5 className="mt-4">
                                Félicitations c'est envoyé!
                            </h5>
                            <span> Notre équipe prendra contact avec vous d'ici peu </span>

                        </div>

                    </div>
                </div>
            </div>
            <style jsx>
                {invitationStyles}
            </style>
        </>
    );
}

export default InvitationsentPrime;
