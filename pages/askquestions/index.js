import React from 'react';
import Bannertext from '../../components/BannerText';
import Footercopyright from '../../components/footerCopyright';
import Footerlang from '../../components/FooterLang';
import Stickynavbar from '../../components/StickyNavbar';

const Index = () => {
    return (
        <><Stickynavbar />
            <Bannertext title={"Questions fréquemment posées sur le site"} />
            <main className="pattern">
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-1" ></div>
                        <div className="col-lg-10" id="faq">
                            <h4 className="nomargin_top">Payments</h4>
                            <div role="tablist" className="add_bottom_45 accordion_2" id="payment">
                                <div className="card" style={{ background: "#f8f8f8" }} >
                                    <div className="card-header" role="tab">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" href="#collapseOne_payment" aria-expanded="true"><i className="indicator ti-minus"></i>Introdocution</a>
                                        </h5>
                                    </div>

                                    <div id="collapseOne_payment" className="collapse show" role="tabpanel" data-parent="#payment">
                                        <div className="card-body">
                                            <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab">
                                        <h5 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo_payment" aria-expanded="false">
                                                <i className="indicator ti-plus"></i>Generative Modeling Review
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo_payment" className="collapse" role="tabpanel" data-parent="#payment">
                                        <div className="card-body">
                                            <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab">
                                        <h5 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree_payment" aria-expanded="false">
                                                <i className="indicator ti-plus"></i>Variational Autoencoders
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree_payment" className="collapse" role="tabpanel" data-parent="#payment">
                                        <div className="card-body">
                                            <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" ></div>

                    </div>
                </div>

            </main>

            <Footerlang />
            <Footercopyright />

        </>
    );
}

export default Index;
