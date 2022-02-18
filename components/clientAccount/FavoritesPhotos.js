import React from 'react';
import Listimggrid from '../ListImgGrid';

const Favoritesphotos = () => {
    return (
        <>
            <div className="container margin_60_35" >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="detail_title_1 text-center">
                            <h6> Favoris - Photos </h6>
                            <Listimggrid />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Favoritesphotos;
