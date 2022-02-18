import React from 'react';
import Image from 'next/image'
import Button from './Button';
import Searchbar from './SearchBar';
import Styles from '../components/css/Banner.css'
import Bottomnav from './BottomNav';

const Banner = ({ title, bgColor }) => {
    return (
        <section className="hero_single version_2">
            <div className="wrapper">
                <div className="container">
                    <div className="wrapper_2">
                        <h4 className="mt-5"> {title} </h4>
                        <Searchbar page={"home"} />
                    </div>
                    <Button text='Demande Personnalisée' isFlex={true} color="#ffff" height="43px" isTop={false} shape='round' />
                </div>
                <div className="bottom_nav">
                    <Bottomnav bgColor={bgColor} />
                </div>

            </div>

            <style jsx>
                {Styles}
            </style>
        </section>

    )


}

export default Banner;
