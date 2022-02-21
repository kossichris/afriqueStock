import React from 'react';
import Pricingtable from '../../components/PricingTable';
import Searchbar from '../../components/SearchBar';
import Stickynavbar from '../../components/StickyNavbar';
import { styles } from '../../constants/general.css';

const Index = () => {
    return (
        <>
            <Stickynavbar />
            <div className="mt-5 mb-5 mx-auto" style={styles.searchBarContainer}>
                <Searchbar />
            </div>
            <Pricingtable />
        </>
    );
}

export default Index;
