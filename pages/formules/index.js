import React from 'react';
import Pricingtable from '../../components/PricingTable';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/stickyNavbar';

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <div className="searchbar-container">
                <Searchbar />
            </div>
            <Pricingtable />
        </>
    );
}

export default Index;
