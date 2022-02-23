import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useScrollDirection } from 'react-use-scroll-direction'
import Navbar from '../../components/Navbar';
import Stickynavbar from '../../components/StickyNavbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import accueilStyles from '../../ComponentsStyled/accueil.css'
import Button from '../../components/Button';
import ListGridVideo from '../../components/ListGridVideo';
import { colors } from '../../constants/colors';

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Video = () => {
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
                <div className="d-flex flex-row justify-content-center">
                    <Banner title="Des vidéos authentiques qui réflètent toute la diversité de l'Afrique" dropDownText="Vidéo" h4ClassName="h6-photo" showBtn={false} bgColor={colors.transparent_blue} />
                </div>

                <h2 className="text-center mt-5" ><strong> Nos Catégories de vidéos</strong></h2>
                <h4 className="text-center mb-5 text-black" >Des Vidéos qui expriment la culture africaine </h4>

                <div className="container">
                    <div className="row">
                        <div className="row mt-3 ">
                            <ListGridVideo />
                        </div>
                        <div className="row mb-5 ">
                            <ListGridVideo />
                        </div>

                    </div>
                </div>

                <div className="bg_color_1">
                    <div className="container ">
                        <h5 className="text-center mt-5 pt-5 mb-3" >Les recherches populaires de vidéos</h5>

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

export default Video;
