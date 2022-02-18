import React from 'react';
import { colors } from '../../constants/colors';
import favoritesStyles from '../css/Favorites.css'

const Favorites = () => {
    return (
        <>
            <div className="container margin_60_35">
                <div className="row center">
                    <div className="col-lg-4">
                        <a href="#0" className="boxed_list">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="84" height="84" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="15" y1="8" x2="15.01" y2="8" />
                                <rect x="4" y="4" width="16" height="16" rx="3" />
                                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                            </svg>
                            <h3>Photos</h3>
                            <p>26 fichiers</p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a href="#0" className="boxed_list">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vector-bezier" width="84" height="84" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="14" width="4" height="4" rx="1" />
                                <rect x="17" y="14" width="4" height="4" rx="1" />
                                <rect x="10" y="6" width="4" height="4" rx="1" />
                                <path d="M10 8.5a6 6 0 0 0 -5 5.5" />
                                <path d="M14 8.5a6 6 0 0 1 5 5.5" />
                                <line x1="10" y1="8" x2="4" y2="8" />
                                <line x1="20" y1="8" x2="14" y2="8" />
                                <circle cx="3" cy="8" r="1" />
                                <circle cx="21" cy="8" r="1" />
                            </svg>
                            <h3>Vecteur & Illustration</h3>
                            <p>24 fichiers</p>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <a href="#0" className="boxed_list">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-video" width="84" height="84" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                <rect x="3" y="6" width="12" height="12" rx="2" />
                            </svg>
                            <h3>Video</h3>
                            <p>0 fichiers</p>
                        </a>
                    </div>
                </div>
            </div>


            <style jsx>
                {favoritesStyles}
            </style>
        </>
    );
}

export default Favorites;
