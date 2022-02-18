import React from 'react';
import Styles from '../components/css/Button.css'
import { colors } from '../constants/colors';
import { icons } from '../constants/icons';

const Buttonsmall = ({ text, submitFunction, hasIcon, shape, color, bgColor, height, fontSize, isFlex, isTop, width }) => {
    const borderShapper = (shape) => { return shape === 'round' ? '40px' : '0px' }
    const isFlexAndTopF = (isFlex) => { return isFlex === true ? "d-flex justify-content-center mt-4" : '' }
    const isTopF = (isTop) => { return isTop === true ? "mt-4" : '' }


    return (
        <>
            <div className={"text-center " + isFlexAndTopF(isFlex)} className="d-flex flex-row justify-content-between">
                {hasIcon && <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-${icons.user}`} style={{
                    position: "relative",
                    left: "21%",
                    marginTop: "12px"
                }} width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>}

                <input style={{ background: bgColor, color: color, borderRadius: borderShapper(shape), height: height ? height : '43px', width: width, fontSize: fontSize }} type="submit" value={text} className={"btn_1 " + isTopF(isTop)} />

            </div>
            <style jsx>
                {Styles}
            </style>
        </>

    );
}

export default Buttonsmall;