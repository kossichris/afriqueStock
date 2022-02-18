import React from 'react';
import { colors } from '../constants/colors';

const Button = ({ text, submitFunction, hasIcon, iconName, iconColor, shape, height, width, color, className, fontWeight, fontSize, hasBorder, bgColor, isFlex, isTop }) => {

    const borderShapper = (shape) => {
        if (shape === "round") {
            return '40px'
        }
        if (shape === "half_round") {
            return '7px'
        }
        return '0px'
    }
    const borderHalfRadiusShaper = (shape) => { return shape === 'half_round' ? '20px' : '0px' }
    const isFlexAndTopF = (isFlex) => { return isFlex === true ? "d-flex justify-content-center mt-4" : '' }
    const isTopF = (isTop) => { return isTop === true ? "mt-4" : '' }
    const getBorder = () => { return "1px solid #49b620" }
    return (
        <>
            <div className={"text-center " + isFlexAndTopF(isFlex)}>
                {hasIcon && <svg xmlns="http://www.w3.org/2000/svg"

                    class={`icon icon-tabler icon-tabler-${iconName}`}
                    style={{
                        position: "relative",
                        left: "12%",
                        marginTop: "0"
                    }}
                    width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke={iconColor} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                    <path d="M11.245 15.904a3 3 0 0 0 3.755 -2.904m-2.25 -2.905a3 3 0 0 0 -3.75 2.905" />
                    <path d="M14 13h2v2" />
                    <path d="M10 13h-2v-2" />
                </svg>}
                <input style={{ background: bgColor, border: hasBorder ? getBorder() : null, color: color ? color : "#fff !important", fontWeight: '400', fontSize: fontSize, borderRadius: borderShapper(shape), height: height, fontWeight: fontWeight, width: width }} type="submit" value={text} className={"btn_1 load-image-input" + className + isTopF(isTop)} />
            </div>
        </>

    );
}

export default Button;
