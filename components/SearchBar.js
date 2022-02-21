import Link from 'next/link';
import React from 'react';
import searchStyles from '../components/css/SearchBar.css'
import { colors } from '../constants/colors';

const styles = {
    top: {

    }
}
const Searchbar = ({ page, hasFilter, dropDownText }) => {

    const list = [
        "Photo 1",
        "Photo 2",
        "Photo 3"

    ]

    console.log(page)
    return (
        <div>

            <div className="container">
                    <div className="row">
                    <div className="search-container  mt-3">
                        <form className=" d-flex flex-row justify-content-center">
                            <div className="box d-block d-sm-none col-xs-2">
                                <select className="mobile-select">
                                    <option></option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>
                                <span className='caret-d-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke={colors.primary} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </div>
                            <div className="back d-flex flex-row col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                <div className="box  d-none d-sm-block ">
                                    <select>
                                        <option>{dropDownText}</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option> 
                                        <option>Option 5</option>
                                    </select>
                                </div>
                                <div className='line-v'></div>
                                <input type="text" placeholder="Rechercher des oeuvres créatives Photos Vecteurs Illustrations et Vidéos.." name="search" />
                                <Link href="/photo">
                                    <button type="submit" className="btn_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="10" cy="10" r="7" />
                                        <line x1="21" y1="21" x2="15" y2="15" />
                                    </svg>
                                </button>
                                </Link>                               


                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 d-none d-sm-block btn_2_container">

                                <button className="btn_2 d-flex flex-row justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera-rotate mt-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.primary} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                        <path d="M11.245 15.904a3 3 0 0 0 3.755 -2.904m-2.25 -2.905a3 3 0 0 0 -3.75 2.905" />
                                        <path d="M14 13h2v2" />
                                        <path d="M10 13h-2v-2" />
                                    </svg>
                                    <span className="ml-2 mt-3 d-sm-none d-none d-md-none d-lg-block"> Cherchez avec une image</span>
                                </button>
                                </div>
                        </form>


                        </div>

                    </div>

                <style jsx>
                    {searchStyles}
                </style>
            </div>
        </div>
    );
}

export default Searchbar;
