import React from 'react';
import Footer from '../../components/Footer';
import Listimggrid from '../../components/ListImgGrid';
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

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center"> Favoris - Photo</div>
                    <div className="mt-5 mb-5  mx-auto">
                        <Listimggrid />

                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Index;
