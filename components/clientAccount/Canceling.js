import React from 'react';
import cancelStyles from '../css/Canceling.css'

const Canceling = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <div className="text-center mt-4">
                            <strong>Annulation de l'Abonnement </strong>
                            <span> Photo & Illustration 10 fichiers par/mois </span>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 pl-xl-5">
                        <div className="text-center mt-4">
                            <span>L'annulation de votre formule aujourd'hui signifie: </span>
                        </div>

                        <div className="block-container d-flex flex-row mt-4 justify-content-between">
                            <div className="block1">Des frais de résiliation anticipée vous seront facturés: le taux de résiliation est de 70%
                                <div className="mt-4 text-center"> <h5>98,3$</h5> </div>
                            </div>
                            <div className="block2"> Vous perdrez vos fichiers AfriqueStock inutilisés:
                                <div className="mt-4 text-center"><h5>9</h5><h6>Fichiers restants</h6></div>
                            </div>
                            <div className="block3"> Vous ne recevez plus votre lot mensuel d'images à utiliser selon vos besoins </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 pl-xl-5">
                        <div className="text-center mt-4">
                            <span>Taux de résiliation 40% </span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {cancelStyles}
            </style>
        </>
    );
}

export default Canceling;
