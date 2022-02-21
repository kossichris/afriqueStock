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
import Listimggridcategory from '../../components/ListGridCategory';

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Photo = () => {
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

            {   /*  <div class="category-header__search-bar-box"><div class="category-header__search-bar _search-bar"><form action="/search.html" class="_J9OFx _iclrf" data-qa="SearchBar"><div class="_MB1t5"><div class="_1t+Ub _ThqxH _Z5Ct0 _0tZg8" aria-controls="searchTypeSelector" aria-haspopup="listbox" tabindex="0" data-qa="SearchByTypesBox"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2H4a2 2 0 00-2 2v2.118A9.507 9.507 0 019.882 14H12a2 2 0 002-2V4a2 2 0 00-2-2zM7.85 14A7.509 7.509 0 002 8.15V12a2 2 0 002 2h3.85zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4zm8 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#3C3C3C"></path></svg> <span class="_kXVVj">
                Toutes les images
            </span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M11.862 7.06A.519.519 0 0012 6.705a.519.519 0 00-.138-.355l-.187-.2A.443.443 0 0011.34 6H4.66a.442.442 0 00-.335.15l-.187.2A.519.519 0 004 6.705c0 .133.05.261.138.355l3.535 3.79a.434.434 0 00.327.152.434.434 0 00.326-.152l3.536-3.79z" fill="#3C3C3C"></path></svg></div> <!----> <div class="_aJfeJ"><div class="_U9lNA"><input aria-label="Recherche de photos et vecteurs" name="query" autocomplete="off" placeholder="Recherche de photos et vecteurs" class="_s99Jc"> <!----></div> <!----></div> <!----> <!----> <button type="submit" aria-label="Recherche" class="_OvusY _2s+g9 _VbeCv _0tZg8" data-qa="VButton"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-1.238 6.676a8.5 8.5 0 111.414-1.414l4.531 4.53a1 1 0 01-1.414 1.415l-4.531-4.531z" fill="#3C3C3C"></path></svg> <span></span> </button></div></form></div><div class="category-header__search-by-image _search-by-image"><button class="_ygilt _2s+g9" data-qa="SearchByImageButton"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="_0FsBn"><path d="M16.229 2.221A.4.4 0 0015.87 2H8.129a.4.4 0 00-.358.221L6.382 5H2.4a.4.4 0 00-.4.4V18a4 4 0 004 4h7.6a.4.4 0 00.4-.4v-1.2a.4.4 0 00-.4-.4H6a2 2 0 01-2-2V7h3.618l1.5-3h5.764l1.5 3H18a2 2 0 012 2v5.6c0 .22.18.4.4.4h1.2a.4.4 0 00.4-.4V9a4 4 0 00-4-4h-.382l-1.39-2.779z" fill="#3C3C3C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 18a5 5 0 114.172-2.243l4.252 4.253a.4.4 0 010 .566l-.848.848a.4.4 0 01-.566 0l-4.253-4.252A4.977 4.977 0 0112 18zm0-2a3 3 0 110-6 3 3 0 010 6z" fill="#3C3C3C"></path></svg> <span class="_mzF6N">
                Chercher par image
            </span></button></div></div>

            styles

            .category-header__search-bar-box {
                position: relative;
                z-index: 20;
                display: flex;
                width: 100%;
                padding: 0 16px;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
            }
*/}


            {top > 0 ? <Stickynavbar /> : <Navbar />}
            <main className="pattern">
                <Banner showBtn={false} dropDownText="Photos" title="Découvrez des photos gratuites, 100% africain libres de droit  pour un usage personnel et commercial" h4ClassName="h4-photo" bgColor={colors.transparent_gray} />

                <h2 className="text-center mt-5" >Nos Categories de photos</h2>
                <h3 className="col-lg-12 col-md-12 ">
                    <p className="text-center"> Des photos qui expriment la culture africaine  </p>
                </h3>

                <div className="container">
                    <div className="row">

                        <Listimggridcategory />
                    </div>
                </div>
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

            </main>
            <Footer />
            <style jsx>
                {accueilStyles}
            </style>

        </>
    );
}

export default Photo;
