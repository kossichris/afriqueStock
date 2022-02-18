import React from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Listimggrid from '../../components/ListImgGrid';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';
import { colors } from '../../constants/colors';

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <Searchbar hasFilter={true} />

            <div className="row">
                <aside className="col-lg-3" id="sidebar">
                    <div className="theiaStickySidebar" >
                        <div id="filters_col" className="filters_col">
                            <a data-bs-toggle="collapse" href="#collapseFilters" ariaExpanded="false" ariaControls="collapseFilters" id="filters_col_bt" className="d-flex flex-row justify-content-between">Catégorie de contenu

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </a>

                            <div className="collapse show" id="collapseFilters">
                                <div className="filter_type">
                                    <h6>Category</h6>
                                    <ul>
                                        <li>
                                            <label className="container_check">Restaurants <small>123</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Shops <small>33</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Bars <small>56</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Events <small>33</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div id="filters_col" className="filters_col" style={{ border: "none !important" }}>
                            <a data-bs-toggle="collapse" href="#collapseFilters" ariaExpanded="false" ariaControls="collapseFilters" id="filters_col_bt" className="d-flex flex-row justify-content-between">Type de contenu

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </a>
                            <div className="collapse show" id="collapseFilters">
                                <div className="filter_type">
                                    <h6>Category</h6>
                                    <ul>
                                        <li>
                                            <label className="container_check">Restaurants <small>123</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Shops <small>33</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Bars <small>56</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="container_check">Events <small>33</small>
                                                <input type="checkbox" onChange />
                                                <span className="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="resize-sensor" >
                            <div className="resize-sensor-expand" >
                                <div className="container-shrink">
                                </div>
                            </div>
                            <div className="resize-sensor-shrink" >
                                <div className="resize-sensor-shrinkChild">
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="col-lg-9">
                    <div className="review-box clearfix promo-bar mt-4">
                        <div className="rev-content  d-flex flex-row flex-wrap justify-content-between ">
                            <div className="rating">
                                <strong> Bénéficiez de 60% de réduction sur chaque photo</strong>
                                <p>
                                    Sed eget turpis a pede tempor malesuada.Sed eget turpis a pede tempor malesuada.
                                </p>
                            </div>

                            <div className="rev-text">
                                <Button text="Economisez 60% des maintenant" color="white" fontSize="10px" bgColor={colors.primary} shape="round" />
                            </div>

                        </div>

                    </div>
                    <div className="row mt-5">

                        <div className="col-lg-12 mb-5">

                            <div className="grid-container">
                                <Listimggrid />
                            </div>

                        </div>

                    </div>



                </div>


            </div>


            <Footer />
        </>
    );
}

export default Index;
