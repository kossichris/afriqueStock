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
import Head from 'next/head'

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Accueil = () => {
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

        <div>

            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    rel="stylesheet"
                />
            </Head>
            {top > 0 ? <Stickynavbar /> : <Navbar />}
                <Banner title="Les meilleures photos, d'images vectorielles et de vidéos libres de droits 100% africain avec licence" />

                <h5 className="text-center mt-5 mb-5" >Les contenues les plus inspirantes de nos auteurs</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <p> Des <a>photos</a> qui expriment la culture africaine  </p>
                            <Listgridsimple />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <p> Des <a>Vecteurs&illustrations</a> qui font ressortir la beauté de l'Afrique  </p>
                            <Listgridsimple />
                        </div>

                    </div>
                <div className="containeur ">
                        <p> Des <a>photos</a> qui expriment la culture africaine  </p>
                    <div className=" row mb-5 ">
                        <div className="video-gallery ">
                            <div className="image-container ">
                                    <Image
                                        src={"https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                                        alt="Picture of the author"
                                        width={400}
                                        height={250}
                                    />

                                    <span className="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 4v16l13 -8z" />
                                        </svg>
                                    </span>
                                </div>

                            <div className="image-container ">
                                    <Image
                                        src={"https://images.unsplash.com/photo-1548506923-99f6e89852fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                                        alt="Picture of the author"
                                        width={400}
                                        height={250}
                                    />
                                    <span className="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 4v16l13 -8z" />
                                        </svg>
                                    </span>

                                </div>
                            <div className="image-container  ">
                                    <Image
                                    src={"https://images.unsplash.com/photo-1547903006-2045abe6e3c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                                        alt="Picture of the author"
                                        width={400}
                                        height={250}
                                    />
                                    <span className="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 4v16l13 -8z" />
                                        </svg>
                                    </span>
                                </div>
                            <div className="image-container ">
                                <Image
                                    src={"https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                                    alt="Picture of the author"
                                    width={400}
                                    height={250}
                                />

                                <span className="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 4v16l13 -8z" />
                                    </svg>
                                </span>
                            </div>

                            <div className="image-container ">
                                <Image
                                    src={"https://images.unsplash.com/photo-1548506923-99f6e89852fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                                    alt="Picture of the author"
                                    width={400}
                                    height={250}
                                />
                                <span className="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 4v16l13 -8z" />
                                    </svg>
                                </span>

                            </div>
                            <div className="image-container  ">
                                <Image
                                    src={"https://images.unsplash.com/photo-1547903006-2045abe6e3c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                                    alt="Picture of the author"
                                    width={400}
                                    height={250}
                                />
                                <span className="play-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 4v16l13 -8z" />
                                    </svg>
                                </span>
                            </div>

                        </div>

                        </div>

                    </div>
                </div>
                <Offerhome />

                <div className="bg_color_1">
                    <div className="container margin_60_35">
                        <h5 className="text-center mt-5 mb-3" >Découvrez nos Categories d'images</h5>

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

            <Footer />
            <style jsx>
                {accueilStyles}
            </style>
        </div>

    )

}

export default Accueil;