import React from 'react';
import Styles from '../components/css/DropDown.css'
import Image from 'next/image'

const Dropdownbutton = ({ page, title, flag, arrowColor, list = [] }) => {

    return (
        <>
            <div className="dropdown d-flex">
                <button className="dropbtn " style={{ fontSize: page ? '8px' : '13px' }}>{title}
                    {flag &&
                        <span className="mr-1">
                            <Image
                                src={flag}
                                alt="Picture of the author"
                                width={15}
                                height={15}
                            />
                        </span>
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke={arrowColor} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
                <div className="dropdown-content">
                    {list.map((L) => <a key={L} href="#">{L} </a>)}
                </div>
            </div>
            <style jsx>
                {Styles}
            </style>
        </>
    );
}

export default Dropdownbutton;
