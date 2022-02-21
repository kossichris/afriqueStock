import React from 'react';
import { colors } from '../constants/colors';
import Buttonsmall from './ButtonSmall';

const styles = {
    clearfix: {
        fontSize: "12px",
        fontWeight: 300,
    }
}
const Bottomnav = ({ bgColor }) => {
    return (
        <>
            <nav className="secondary_nav sticky_horizontal_2" style={{ background: bgColor }}>
                <div className="container">
                    <ul style={styles.clearfix} className="clearfix d-flex flex-row justify-content-center flex-wrap">
                        <span className="mr-3 mt-2 text-white">Téléchargez des contenues avec 40% de réduction</span>
                        <div className="plan_btn">
                            <Buttonsmall text="Voir nos plans tarifaire" height="30px" padding="10px" shape="round" color={colors.primary} bgColor="white" />
                        </div>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Bottomnav;
