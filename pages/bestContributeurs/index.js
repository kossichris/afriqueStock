import React from 'react';
import Stickynavbar from '../../components/stickyNavbar';
import styles from './styles.css'
import Image from 'next/image'
import photo from '/public/images/access_bg.jpg'

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <div className="container mt-5">
                <div className="row mt-4">
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <div className="text-center mt-4">
                            <h3>Nos meilleurs contributeurs </h3>
                            <span> Nos contributeurs les plus créatifs avec un nombre maximum de contenu qui immortalise l'Afrique sur toutes les couleurs </span>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <div className="mt-4 d-flex flex-row justify-content-between flex-wrap">
                            <div className="photo_normal d-flex flex-row align-item-center">
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

                            <div className="photo_normal d-flex flex-row align-item-center">
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
                            <div className="photo_normal d-flex flex-row align-item-center">
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
                    <div className="col-xl-12 col-lg-12 pl-xl-5">
                        <div className="mt-4 d-flex flex-row justify-content-between flex-wrap">
                            <div className="photo_normal d-flex flex-row align-item-center">
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

                            <div className="photo_normal d-flex flex-row align-item-center">
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
                            <div className="photo_normal d-flex flex-row align-item-center">
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

                </div>
            </div>
            <style jsx>
                {styles}
            </style>
        </>
    );
}

export default Index;
