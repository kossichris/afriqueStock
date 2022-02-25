import React from 'react';
import Image from 'next/image'
import ligStyles from '../components/css/ListGridImgWith.css'

const Listimggridcategory = () => {
    return (
        <>
            {/* <div className="container mt-5">
                <div className="gallery">
                    <figure className="gallery__item d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block d-none d-sm-block">Restaurants</div>
                        <img src="https://images.unsplash.com/photo-1556783900-2ebe375c20fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 1" />
                    </figure>
                    <figure className="gallery__item d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Village</div>
                        <img src="https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 2" />
                    </figure>
                    <figure className="gallery__item d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Nature</div>
                        <img src="https://images.unsplash.com/photo-1545844895-1bf88a0213a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 3" />
                    </figure>
                    <figure className="gallery__item d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Enfants Africain</div>
                        <img src="https://images.unsplash.com/photo-1546213642-d79f08fa2169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 4" />
                    </figure>

                </div>

                <div className="gallery">
                    <figure className="gallery__item d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Sport</div>
                        <img src="https://images.unsplash.com/photo-1547707981-eeb6a7ac3c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 5" />
                    </figure>
                    <figure className="gallery__item  d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Informatique</div>
                        <img src="https://images.unsplash.com/photo-1546260863-51e27ff43c68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 6" />
                    </figure>
                    <figure className="gallery__item d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Sport</div>
                        <img src="https://images.unsplash.com/photo-1547707981-eeb6a7ac3c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 5" />
                    </figure>
                    <figure className="gallery__item  d-flex flex-row justify-content-center">
                        <div className="read_more_cat d-none d-sm-block">Informatique</div>
                        <img src="https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="gallery__img" alt="Image 2" />
                    </figure>
                </div>


            </div>*/}


            <ul>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Village</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg" alt="A Toyota Previa covered in graffiti" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Restaurants</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg" alt="Interesting living room light through a window" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Nature</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg" alt="Sara on a red bike" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Sport</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg" alt="XOXO venue in between talks" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Ville</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg" alt="Trees lit by green light during dusk" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Mode/beauté</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg" alt="Portrait of Justin Pervorse" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Célébrités</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg" alt="Empty bike racks outside a hotel" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Education</div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05626_ytsf3j.jpg" alt="Heavy rain on an intersection" loading="lazy" />
                </li>
                <li className='d-flex flex-row justify-content-center'>
                    <div className="read_more_cat d-none d-sm-block">Informatique   </div>
                    <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg" alt="Payam Rajabi eating peanut chicken" loading="lazy" />
                </li>




            </ul>
            <style jsx>
                {ligStyles}
            </style>
        </>
    );
}

export default Listimggridcategory;
