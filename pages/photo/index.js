import React from 'react';
import Footer from '../../components/Footer';
import ListImagegrid from '../../components/ListImgGrid';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/stickyNavbar';

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <Searchbar />
            <div className="container">
                <div className="row">
                    <div className="mt-5 mb-5">
                        <ListImagegrid />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
