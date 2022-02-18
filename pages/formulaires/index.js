import React from 'react';
import Button from '../../components/Button';
import Footercopyrightwhitebg from '../../components/FooterCopyrightWhiteBg';
import Stickynavbar from '../../components/stickyNavbar';
import { colors } from '../../constants/colors';
import Styles from './styles.css'

const Index = () => {
    return (
        <>

            <Stickynavbar />
            <div className="sub_header_in sticky_header mt-3">
                <div className="container p-3 mt-3">
                    <h5 className="text-center">Téléchargez les formulaires d'autorisation à faire signer au modèle</h5>
                    <strong>Comment remplir le modèle d'autorisation?</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet ante quis mattis posuere. Vestibulum efficitur pretium ex vitae dapibus. Donec finibus lacinia congue. Suspendisse non nisl laoreet, ullamcorper metus non, luctus ante. Sed sit amet sem porta, eleifend lacus eget, viverra magna. Suspendisse in risus felis. Sed non purus finibus, elementum nunc et, cursus tellus. Vestibulum malesuada vitae lorem ac laoreet. Mauris venenatis dolor ut ante fermentum, ut semper augue ultricies. Proin ullamcorper, lectus ut imperdiet tincidunt, purus orci laoreet diam, nec consectetur nunc mi sit amet orci. Fusce ut mi eget dui gravida dapibus. Integer id laoreet ex. Nulla euismod diam quis quam feugiat suscipit.</p>
                </div>
            </div>
            <main>

                <div className="container margin_60_35">
                    <div className="box_booking">

                        <div className="strip_booking">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="date">
                                        <div className="container-dte">

                                            <strong>Autorisations d'un modèle</strong>
                                            <p className="mt-3"> Documents à faire signer aux modèles adultes d'au moins 18 ans </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-2">
                                    <div className="d-flex flex-column justify-content-center container_radios">
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Français
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            English
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Espagnol
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Portugues
                                        </label>

                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="booking_buttons text-center mb-3">
                                        <div className="mb-2">Choisissez la langue et téléchargez</div>
                                        <Button text="Télécharger" color="white" bgColor={colors.blue_light_3x} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_booking">

                        <div className="strip_booking">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="date">
                                        <div className="container-dte">

                                            <strong>Autorisations pour mineur</strong>
                                            <p className="mt-3"> Documents à faire signer aux modèles adultes de moins de 18 ans </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-2">
                                    <div className="d-flex flex-column justify-content-center container_radios">
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Français
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            English
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Espagnol
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Portugues
                                        </label>

                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="booking_buttons text-center mb-3">
                                        <div className="mb-2">Choisissez la langue et téléchargez</div>
                                        <Button text="Télécharger" color="white" bgColor={colors.blue_light_3x} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_booking">

                        <div className="strip_booking">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="date">
                                        <div className="container-dte">

                                            <strong>Autorisations du propriétaire</strong>
                                            <p className="mt-3"> Pour les propriétés apparaissant dans vos images et vidéos et qui sont soumises aux droits d'auteurs ou à des restrictions </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-2">
                                    <div className="d-flex flex-column justify-content-center container_radios">
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Français
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            English
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Espagnol
                                        </label>
                                        <label className="container_radio" style={{ display: "inline-block" }}>
                                            <input type="radio" name="client_type" value="company" />
                                            <span className="checkmark"></span>
                                            Portugues
                                        </label>

                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="booking_buttons text-center mb-3">
                                        <div className="mb-2">Choisissez la langue et téléchargez</div>
                                        <Button text="Télécharger" color="white" bgColor={colors.blue_light_3x} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex flex-row justify-content-end" >
                            <Button text="Continuer" shape="round" color="white" bgColor={colors.blue_light_3x} />
                        </div>
                        <div className="col-lg-6 col-md-6 bottom-text">
                            <span> vers votre compte en attendant sa validation</span>
                        </div>
                    </div>
                </div>


            </main>
            <Footercopyrightwhitebg />
            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Index;
