import React from 'react';
import Image from 'next/image'
import ligStyles from '../components/css/ListGridImgWith.css'

const Listimggridcategory = () => {
    return (
        <>
            {/*<div classNameName="container mt-4">
                <div classNameName="big">
                    <img src="https://images.unsplash.com/photo-1556783900-2ebe375c20fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div classNameName="vertical">
                    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div classNameName="horizontal">
                    <img src="https://images.unsplash.com/photo-1548506923-99f6e89852fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div classNameName="vertical">
                    <img src="https://images.unsplash.com/photo-1547903006-2845abe6e3c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1547707981-eeb6a7ac3c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div classNameName="horizontal">
                    <img src="https://images.unsplash.com/photo-1547297355-7d839b27ffb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div classNameName="big">
                    <img src="https://images.unsplash.com/photo-1511534520542-e0fb6d4a4df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1546213642-d79f08fa2169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div classNameName="vertical">
                    <img src="https://images.unsplash.com/photo-1546260863-51e27ff43c68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1546046142-8f8fae7de558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1545844895-1bf88a0213a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Picture of the author" />
                </div>
            </div>*/}


            <div className="container mt-5">
                <div className="gallery">
                    <figure className="gallery__item gallery__item--1 d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block d-none d-sm-block">Restaurants</div>
                        <img src="https://images.unsplash.com/photo-1556783900-2ebe375c20fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 1" />
                    </figure>
                    <figure className="gallery__item gallery__item--2 d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Village</div>
                        <img src="https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 2" />
                    </figure>
                    <figure className="gallery__item gallery__item--3 d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Nature</div>
                        <img src="https://images.unsplash.com/photo-1545844895-1bf88a0213a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 3" />
                    </figure>
                    <figure className="gallery__item gallery__item--4 d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Enfants Africain</div>
                        <img src="https://images.unsplash.com/photo-1546213642-d79f08fa2169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 4" />
                    </figure>
                    <figure className="gallery__item gallery__item--5 d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Sport</div>
                        <img src="https://images.unsplash.com/photo-1547707981-eeb6a7ac3c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 5" />
                    </figure>
                    <figure className="gallery__item gallery__item--6 d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Informatique</div>
                        <img src="https://images.unsplash.com/photo-1546260863-51e27ff43c68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 6" />
                    </figure>
                </div>
            </div>

            <style jsx>
                {ligStyles}
            </style>
        </>
    );
}

export default Listimggridcategory;
