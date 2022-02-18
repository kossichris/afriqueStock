import React from 'react';
import Bannertext from '../../components/BannerText';
import Button from '../../components/Button';
import Footercopyright from '../../components/footerCopyright';
import Footerlang from '../../components/FooterLang';
import Stickynavbar from '../../components/StickyNavbar';
import { colors } from '../../constants/colors';

const Index = () => {
    return (
        <><Stickynavbar />
            <Bannertext title={"Signaler une violation de droit"} />
            <main>
                <div className="container margin_60_35" >
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <section id="description">
                                <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                            </section>

                            <section>
                                <div className="form-group col-md-12 d-flex flex-column justify-content-center">
                                    <label>Décrivez nous l'abus</label>
                                    <textarea name="review_text" id="review_text" className="form-control rounded-0" style={{ height: "130px" }}></textarea>
                                    <p className="add_top_30"><button type="submit" value="Submit" className="btn_2" id="submit-contact" ><span>Ajouter des preuves</span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                                        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                                    </svg></button></p>
                                    <Button color="white" bgColor={colors.primary} shape="round" />
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </main>
            <Footerlang />
            <Footercopyright />

        </>

    );
}

export default Index;
