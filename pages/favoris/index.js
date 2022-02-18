import React from 'react';
import Footer from '../../components/Footer';
import Listimggrid from '../../components/ListImgGrid';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <Searchbar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center"> Favoris - Photo</div>
                    <div className="mt-5 mb-5">
                        <Listimggrid />

                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Index;
