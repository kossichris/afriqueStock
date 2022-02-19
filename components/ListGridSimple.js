import React from 'react';
import ligStyles from '../components/css/ListImgGrid.css'

const Listgridsimple = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="gallery">
                    <figure className="gallery__item gallery__item--1 mb-2">
                        <img src="https://images.unsplash.com/photo-1556783900-2ebe375c20fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 1" />
                    </figure>

                    <figure className="gallery__item gallery__item--3 ml-2">
                        <img src="https://images.unsplash.com/photo-1545844895-1bf88a0213a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 3" />
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <img src="https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 4" />
                    </figure>
                </div>
            </div>

            <style jsx>
                {ligStyles}
            </style>
        </>
    );
}

export default Listgridsimple;
