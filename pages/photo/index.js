import React from 'react';
import Button from '../../components/Button';
import Buttonsmall from '../../components/ButtonSmall';
import Footer from '../../components/Footer';
import Listgridphotos from '../../components/ListGridPhotos';
import ListImagegrid from '../../components/ListImgGrid';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';
import { colors } from '../../constants/colors';

const styles = {
    searchBarContainer: {
        background: colors.grey_dark
    }
}

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <div className="mt-5 mb-5 mx-auto" style={styles.searchBarContainer}>
                <Searchbar />
            </div>
            <div className="review-box clearfix promo-bar mt-4">
                <div className="rev-content  d-flex flex-row flex-wrap justify-content-around ">
                    <div className="rating">
                        <strong> Bénéficiez de 60% de réduction sur chaque photo</strong>
                        <p>
                            Sed eget turpis a pede tempor malesuada.Sed eget turpis a pede tempor malesuada.
                        </p>
                    </div>

                    <div className="rev-text">
                        <Buttonsmall text="Economisez 60% des maintenant" height="32px" fontSize="12px" color="white" fontSize="10px" bgColor={colors.primary} shape="round" />
                    </div>

                </div>

            </div>
            <div className="col-lg-12 mt-5 mb-5  mx-auto">
                <ListImagegrid />
            </div>
            <Footer />
        </>
    );
}

export default Index;
