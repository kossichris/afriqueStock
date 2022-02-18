import React from 'react';
import Banneraccueilcontributeurs from '../../components/BannerAccueilContributeurs';
import Stickynavbar from '../../components/stickyNavbar';
import photographes_ill from '/public/images/Illustration/fond-photographe.png';
import designers_ill from '/public/images/Illustration/fond-designers.png';
import illustrators_ill from '/public/images/Illustration/fond-illustrators.png';
import graphiste_ill from '/public/images/Illustration/fond-graphiste.png';
import cadreurs_ill from '/public/images/Illustration/fond-cadreur.png';
import fond_09 from '/public/images/Illustration/fond-09.png';
import fond_10 from '/public/images/Illustration/fond-10.png';
import fond_11 from '/public/images/Illustration/fond-11.png';
import fond_12 from '/public/images/Illustration/fond-12.png';
import photo from '/public/images/access_bg.jpg'


import Styles from './styles.css'


import Image from 'next/image'
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Index = () => {
    return (
        <main>
            <Stickynavbar />
            <Banneraccueilcontributeurs />
            <div className="bg_color_1">
                <div className="container margin_60_35">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center mb-4">
                            <h4>Qui peut devenir contributeur sur AfriqueStock</h4>
                        </div>
                        <div className="illustrations d-flex flex-row flex-wrap justify-content-around">
                            <div className="illustrations-1">
                                <Image
                                    src={photographes_ill}
                                    alt="Picture of the author"
                                    width={90}
                                    height={90}
                                    placeholder='blur'
                                />
                                <p>PHOTOGRAPHES</p>

                            </div>
                            <div className="illustrations-2">
                                <Image
                                    src={designers_ill}
                                    alt="Picture of the author"
                                    width={90}
                                    height={90}
                                    placeholder='blur'
                                />
                                <p>DESIGNERS </p>

                            </div>
                            <div className="illustrations-3">
                                <Image
                                    src={illustrators_ill}
                                    alt="Picture of the author"
                                    width={90}
                                    height={90}
                                    placeholder='blur'
                                />
                                <p>ILLUSTRATEURS</p>

                            </div>
                            <div className="illustrations-4">
                                <Image
                                    src={graphiste_ill}
                                    alt="Picture of the author"
                                    width={90}
                                    height={90}
                                    placeholder='blur'
                                />
                                <p>GRAPHISTES</p>

                            </div>
                            <div className="illustrations-5">
                                <Image
                                    src={cadreurs_ill}
                                    alt="Picture of the author"
                                    width={90}
                                    height={90}
                                    placeholder='blur'
                                />
                                <p>CADREURS & VIDEOGRAPHES</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg_color_2">
                <div className="container margin_80_55">
                    <div className="main_title_2 text-center">
                        <h2>Comment ça marche?</h2>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos <strong>scaevola probatus</strong>. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>
                            <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore <strong>percipitur definitiones</strong> ex, nihil utinam recusabo mel no. Dolores reprehendunt no sit, quo cu viris theophrastus. Sit unum efficiendi cu.</p>
                            <p><em>CEO Marc Schumaker</em></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg_color_1">
                <div className="container margin_80_55">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <Image
                                src={fond_09}
                                alt="Picture of the author"
                                width={400}
                                height={400}
                                placeholder='blur'
                            />
                        </div>
                        <div className="col-lg-6 right-text">
                            <div className="main_title_2">
                                <h4 className="mb-3">Que pouvez-vous vendre sur Afriquestock?</h4>
                                <span><em></em></span>
                                <p className="mt-3">Nous acceptons les éléments de conception tendance de haute qualité , notamment les photos, Illustrations, images Vectorielles séquence Vidéos, 100% africains .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg_color_3">
                <div className="container margin_80_55">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 right-text">
                            <div className="main_title_2">
                                <h4 className="mb-3">Quelle est la commission des contributeurs?</h4>
                                <span><em></em></span>
                                <p className="mt-3">Pour chaque licence qu'un client achète, les contributeurs gagnent une redevance de 60% pourcentage du prix payé par le client.
                                    Les revenus peuvent différer, mais plus votre portefeuille contient de contenu dont les clients ont besoin, plus vous aurez d'opportunités de gagner des revenus
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image
                                src={fond_10}
                                alt="Picture of the author"
                                width={400}
                                height={400}
                                placeholder='blur'
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg_color_4">
                <div className="container margin_80_55">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <Image
                                src={fond_11}
                                alt="Picture of the author"
                                width={400}
                                height={400}
                                placeholder='blur'
                            />
                        </div>
                        <div className="col-lg-6 right-text">
                            <div className="main_title_2">
                                <h4 className="mb-3">Autorisations</h4>
                                <span><em></em></span>
                                <p className="mt-3">Une version est requise pour tout contenu comprenant des personnes ou des propriétés reconnaissables. Vous devez avoir une autorisation écrite d'un particulier
                                    ou d'un propriétaire permettant l'utilisation de l'image ou de la propriété de cette personne à des fins commerciales
                                </p>
                                <p className="mt-3">
                                    Pensez toujours à faire un contrat avec le modèle lorsque vous avez une séance même s'il n'y a pas de rénumération du modèle ou de vous
                                </p>
                                <p className="mt-3">
                                    En signant un contrat, vous savez de quels droits vous disposez, vous évitant ainsi tout problème. Vous savez si vous avez le droit de diffuser ou de vendre les photos.
                                    Même si le modèle vous dit que ce n'est pas la peine, que vous pouvez faire ce que vous voulez des photos, faites-en quand même un. Il doit toujours y avoir une trace écrite car si jamais elle change d'avis c'est vous
                                    qui serez en tort, car rien ne prouvera que vous avez eu son autorisation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg_color_5">
                <div className="container margin_80_55">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 right-text">
                            <div className="main_title_2">
                                <h4 className="mb-3">Respecter de façon constante et intégrale les règles</h4>
                                <span><em></em></span>
                                <p className="mt-3">Assurez vous que le contenu que vous soumettez ne contient pas d'éléments protégés par des droits par des droits d'auteur ou des marques d'entreprise. AfriqueStock n'acceptera pas de contenu qui enfreint les droits exclusifs d'un créateurres.
                                    Lors de la prise de vue , assurez-vous qu'ils ne sont pas visibles ou retouchez votre contenu pour supprimer les logos
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image
                                src={fond_12}
                                alt="Picture of the author"
                                width={400}
                                height={400}
                                placeholder='blur'
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <div className="text-center mt-4">
                            <h3>Nos meilleurs contributeurs </h3>
                            <span className="title-text"> Nos contributeurs les plus créatifs avec un nombre maximum de contenu qui immortalise l'Afrique sur toutes les couleurs </span>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 pl-xl-5 mt-4">
                        <div className="mt-4 d-flex flex-row justify-content-between flex-wrap ">
                            <div className="mt-5 photo_normal d-flex flex-row align-item-center">
                                <div className="img-container">
                                    <Image
                                        src={photo}
                                        alt="Picture of the author"
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                </div>

                                <div className="ml-4">
                                    <strong> @Johmike </strong>
                                    <div> Photographe </div>
                                </div>

                            </div>

                            <div className="mt-5 photo_normal d-flex flex-row align-item-center">
                                <div className="img-container">
                                    <Image
                                        src={photo}
                                        alt="Picture of the author"
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ml-4">
                                    <strong> @Johmike </strong>
                                    <div> Photographe </div>
                                </div>

                            </div>
                            <div className="mt-5 photo_normal d-flex flex-row align-item-center">
                                <div className="img-container">
                                    <Image
                                        src={photo}
                                        alt="Picture of the author"
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ml-4">
                                    <strong> @Johmike </strong>
                                    <div> Photographe </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 pl-xl-5 mt-5">
                        <div className="mt-4 d-flex flex-row justify-content-between flex-wrap">
                            <div className="mt-5 photo_normal d-flex flex-row align-item-center">
                                <div className="img-container">
                                    <Image
                                        src={photo}
                                        alt="Picture of the author"
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ml-4">
                                    <strong> @Johmike </strong>
                                    <div> Photographe </div>
                                </div>

                            </div>

                            <div className="mt-5 photo_normal d-flex flex-row align-item-center">
                                <div className="img-container">
                                    <Image
                                        src={photo}
                                        alt="Picture of the author"
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ml-4">
                                    <strong> @Johmike </strong>
                                    <div> Photographe </div>
                                </div>

                            </div>
                            <div className="mt-5 photo_normal d-flex flex-row align-item-center">
                                <div className="img-container">
                                    <Image
                                        src={photo}
                                        alt="Picture of the author"
                                        className=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ml-4">
                                    <strong> @Johmike </strong>
                                    <div> Photographe </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div style={{ width: "100%" }} className="text-center mt-4 mb-5">
                        <a className="text-center" style={{ margin: "auto 0" }}> Voir plus de contributeurs </a>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="18" height="18" viewBox="0 0 24 24" strokeWidth="3" stroke="#007bff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="13" y1="18" x2="19" y2="12" />
                            <line x1="13" y1="6" x2="19" y2="12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="call_section image_bg">
                <div className="wrapper">
                    <div className="container margin_80_55 d-flex flex-row">
                        <div className="btn-container mb-5 text-center">
                            <Button text="S'inscrire maintenant" height='52px' color="#ffff" isTop={false} isFlex={true} shape='round' />
                            <div className="mt-4">
                                Déjà contributeur? <a className="text-log">Se connecter</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />

            <style jsx>
                {Styles}
            </style>
        </main>
    );
}

export default Index;
