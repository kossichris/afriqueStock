import React from 'react';
import searchStyles from '../components/css/SearchBar.css'
import { colors } from '../constants/colors';
import Button from './Button';
import Dropdownbutton from './DropDownButton';

const styles = {
    top: {

    }
}
const Searchbar = ({ page, hasFilter }) => {

    const list = [
        "Photo 1",
        "Photo 2",
        "Photo 3"

    ]

    console.log(page)
    return (
        <>
            <div id="results" className={page === "home" ? "no-background" : null}>
                <div className="container">
                    {/*hasFilter && <div className={`col-lg-2`}>
                            <Button text='Filtre' width="163px" hasBorder={true} isFlex={false} bgColor="#ffff" color='#00000' height='42px' fontSize="9px" fontWeight="300" shape='square' />
                        </div>*/}
                    <div className="row">
                        <div className="search-cont col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <div className="row custom-search-input-2 inner">
                                <div className="col-lg-2 col-xl-2 col-xs-12">
                                    <Dropdownbutton title="Vidéos" page="home" arrowColor={colors.primary} list={list} />
                                </div>

                                <div className="col-lg-10 col-xl-10 col-xs-12 search-input">
                                    <div className="form-group d-flex flex-row">
                                        <input className="form-control" type="text" placeholder="Rechercher des oeuvres créatives Photos Vecteurs Illustrations et Videos..." />
                                        <button className={hasFilter ? `btn_1 btn_1_prime` : `btn_1 btn_1_second`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="10" cy="10" r="7" />
                                                <line x1="21" y1="21" x2="15" y2="15" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="load-image">
                                <Button text='Chargez avec une image' hasIcon={true} iconName="camera-rotate" iconColor={colors.primary} hasBorder={true} isFlex={false} bgColor="#ffff" color='black' height='43px' fontSize="9px" fontWeight="300" shape='square' className="btn_2_2" />
                            </div>
                        </div>

                    </div>

                </div>
                <style jsx>
                    {searchStyles}
                </style>
            </div>
        </>
    );
}

export default Searchbar;
