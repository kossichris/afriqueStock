import React from 'react';
import offerStyles from '../components/css/Offer.css'
import Buttonsmall from './ButtonSmall';

const Offerhome = () => {
    return (
        <div className="call_section image_bg">
            <div className="wrapper">
                <div className="container margin_80_55">
                    <div className="main_title_2">
                        <h2>Avez-vous besoin d'une offre personnalisée</h2>
                        <h6 className="mt-3 subtitle">Expliquez clairement votre demande</h6>
                    </div>
                    <div className="row justify-content-center">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name_review" id="name_review" placeholder="Type de contenu" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="name_review" id="email_review" placeholder="Email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email_review" id="subject_review" placeholder="Sujet" className="form-control" />
                                    </div>

                                </div>
                                <div className="col-md-6 justify-content-center">
                                    <div className="form-group">
                                        <textarea name="review_text" id="review_text" className="form-control" placeholder="Décrivez votre besoin" style={{ height: '89px' }}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <Buttonsmall text='Envoyer' isFlex={false} isTop={false} width="100% !important" color="#ffff" shape='square' />
                                    </div>
                                </div>


                            </div>
                        </form> </div>
                </div>
            </div>
            <style jsx>
                {offerStyles}
            </style>
        </div>
    );
}

export default Offerhome;
