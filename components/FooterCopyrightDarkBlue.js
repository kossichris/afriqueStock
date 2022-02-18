import React from 'react';
import { colors } from '../constants/colors'

const Footercopyrightdarkblue = () => {
    return (
        <div style={{
            background: `${colors.bleu_dark}`,
            color: '#ffff'
        }} className="row copyright copyright-white">
            <div className="col-lg-12 flex-row justify-content-center">
                <span>Copyrights © Afriquestock 2018 - 2022</span>
            </div>
        </div>
    );
}

export default Footercopyrightdarkblue;
