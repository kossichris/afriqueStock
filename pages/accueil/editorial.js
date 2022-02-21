import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useScrollDirection } from 'react-use-scroll-direction'
import Navbar from '../../components/Navbar';
import Stickynavbar from '../../components/StickyNavbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import accueilStyles from '../../ComponentsStyled/accueil.css'
import Offerhome from '../../components/OfferHome';
import Button from '../../components/Button';
import Listgridsimple from '../../components/ListGridSimple';
import { colors } from '../../constants/colors';

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Editorial = () => {
    const [direction, setDirection] = useState("down")
    const [top, setTop] = useState(0)
    const { isScrollingUp, isScrollingDown, isScrolling } = useScrollDirection()

    const handleScroll = () => {
        window.addEventListener('scroll', function () {
            setTop(window.scrollY)
        });
    }

    useEffect(() => {
        isScrollingDown && setDirection('down')
        isScrollingUp && setDirection('up')
        handleScroll()
    }, [isScrollingDown, isScrollingUp])

    return (
        <>
            {top > 0 ? <Stickynavbar /> : <Navbar />}
            <main className="pattern">
                <Banner title="Images éditoriales pleines d'émotions de dirigeants du passé et du présent" dropDownText="Editorial" h4ClassName="h6-photo" showBtn={false} bgColor={colors.transparent_blue} />

                <h2 className="text-center mt-5 editorial-text" >Des images éditoriales récentes</h2>
                <h3 className="text-center mb-5" >
                    <span>
                        Faites vivre vos actualités avec des fichiers éditoriaux en haute qualité exposant les évènements les plus captivants du monde entier
                    </span>
                </h3>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>     
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#0" className="boxed_list a">
                                <span>
                                    <h3>Titre</h3><p >Description</p>
                                </span>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="bg_color_1">
                    <div className="container margin_60_35">
                        <h5 className="text-center mt-5 mb-3" >Les recherches populaires d'images éditoriales</h5>

                        <div className="row">
                            <div className="ul-container mb-5">
                                <ul className="links">
                                    <li><a href="#0">Eouvres d'art</a></li>
                                    <li><a href="#0">Ville</a></li>
                                    <li><a href="#0">Village</a></li>
                                    <li><a href="#0">Travail & Metier</a></li>
                                    <li><a href="#0">Tourisme</a></li>
                                    <li><a href="#0">Sports</a></li>
                                </ul>
                                <ul className="links">
                                    <li><a href="#0">Restaurants</a></li>
                                    <li><a href="#0">Réligion endogène </a></li>
                                    <li><a href="#0">Photographe</a></li>
                                    <li><a href="#0">Personnes & Technologies</a></li>
                                    <li><a href="#0">Personne</a></li>
                                    <li><a href="#0">Nourriture/Repas</a></li>
                                </ul>
                                <ul className="links">
                                    <li><a href="#0">Nature</a></li>
                                    <li><a href="#0">Mode/beauté</a></li>
                                    <li><a href="#0">Macanicien</a></li>
                                    <li><a href="#0">Loisirs et divertissements</a></li>
                                    <li><a href="#0">Informatique</a></li>
                                    <li><a href="#0">Hôtellerie</a></li>
                                </ul>
                                <ul className="links">
                                    <li><a href="#0">Enfant Africain</a></li>
                                    <li><a href="#0">Education</a></li>
                                    <li><a href="#0">Cyclisme</a></li>
                                    <li><a href="#0">Evangelisme</a></li>
                                    <li><a href="#0">Culture africaine</a></li>
                                    <li><a href="#0">Célébrités</a></li>

                                </ul>
                                <ul className="links">
                                    <li><a href="#0">Amour</a></li>
                                    <li><a href="#0">Agriculture</a></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="call_section image_bg">
                    <div className="wrapper wrapper_second">
                        <div className="container margin_80_55 d-flex flex-row flex-wrap">
                            <div className="main_title_2 col-md-8">
                                <h4>ÊTES VOUS PHOTOGRAPHE , ILLUSTRATEUR, OU VIDEOGRAPHE</h4>
                                <h6 className="mt-3 subtitle">Rejoignez notre communauté et gagnez de l'argent en faisant ce que vous aimez</h6>
                            </div>
                            <div className="col-md-4">
                                <Button text='Rejoignez-nous' height='52px' color="#ffff" isFlex={true} shape='round' />
                            </div>
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
            <style jsx>
                {accueilStyles}
            </style>
        </>
    );
}

export default Editorial;
