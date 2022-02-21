import React from 'react';
import Image from 'next/image'
import Button from './Button';
import Searchbar from './SearchBar';
import Styles from '../components/css/Banner.css'
import Bottomnav from './BottomNav';

const Banner = ({ title, bgColor, h4ClassName, dropDownText, showBtn = true }) => {
    return (
        <section className="hero_single version_2">
            <div className="wrapper">
                <h4 className={"h4 mt-5 " + h4ClassName}> {title} </h4>
                <Searchbar dropDownText={dropDownText} page="home" />
                {showBtn && <Button text='Demande Personnalisée' isFlex={true} color="#ffff" height="43px" isTop={false} shape='round' />}
                <div className="bottom_nav">
                    <div className='img-author mb-3 d-flex flex-row justify-content-evenly'>
                        <span className='mr-2 ml-3'>Auteur</span>
                        <strong className='mr-2'>Prigo020</strong>
                        <small className='mt-1'>Voir la photo</small>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right mt-1" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
                        </svg>

                    </div>
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
