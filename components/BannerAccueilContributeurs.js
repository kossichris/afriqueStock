import React from 'react';
import bannerIllustration from '../public/images/Illustration/banner_illustration_contributeur.png'
import Image from 'next/image'
import Styles from '../components/css/BannerAccueilContributeurs.css'



const Banneraccueilcontributeurs = () => {
    return (
        <>
            <section className="hero_single version_2 bac_container" >
                <div className="wrapper bac_container_wrapper">
                    <div className="container d-flex flex-row justify-content-between flex-wrap text-start mt-5">
                        <div className="text">
                            <div> Gagnez de l'argent en faisant ce que vous aimez</div>
                            <span> Photo, Illustrations et Vidéos </span>
                        </div>
                        <div>
                            <Image
                                src={bannerIllustration}
                                alt="Picture of the author"
                                width={500}
                                height={200}
                                placeholder='blur'
                            />
                        </div>

                    </div>
                </div>
            </section>
            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Banneraccueilcontributeurs;
