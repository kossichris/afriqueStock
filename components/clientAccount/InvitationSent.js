import React from 'react';
import { colors } from '../../constants/colors';
import Button from '../Button';
import invitationStyles from '../css/InvitationSent.css'

const Invitationsent = () => {
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
                            <div className="round-container-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="3" stroke={colors.primary} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>


                            <h5 className="mt-4">
                                Invitation Sent
                            </h5>
                            <span> Dites à Huilofro@gmail.com de consulter sa boîte mail pour accepter l'invitation </span>
                            <div className="btn_container mt-4">
                                <Button text="Invited a new person" shape="half_round" isTop={true} height={45} bgColor={colors.bleu_dark} color="#ffff" fontWeight={800} />
                            </div>
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

export default Invitationsent;
