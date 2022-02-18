import React from 'react';
import { colors } from '../constants/colors';
import bannerText from '/public/images/bannerText.jpg'

const styles = {
    container: {
        backgroundImage: `url(${bannerText})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '50vh'
    },
    subContent: {
        color: colors.grey,
    }
};

const Bannertext = ({ text, title, content, subContent }) => {
    return (
        <div className="sub_header_in sticky_header" style={styles.container}>
            <div className="container">
                <span className="back-text"> {text} </span>
            </div>
            <h2> {title} </h2>
            <p className="text-center text-white"> {content} </p>
            <div className="text-center" style={styles.subContent}> {subContent} </div>

        </div>
    );
}

export default Bannertext;
