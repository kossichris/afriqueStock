import Image from 'next/image';
import React from 'react';
import ligStyles from '../components/css/ListGridVideo.css'


const Listgridvideo = () => {
    return (
        <>
            <div className="grid-container col-lg-12 col-md-12 flex-row justify-content-between">
                <div className="image-container">
                    <Image
                        src={"https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                        alt="Picture of the author"
                        width={400}
                        height={250}
                    />

                    <span className="clock-icon">
                        <span> 3:49 </span>
                    </span>
                </div>

                <div className="image-container">
                    <Image
                        src={"https://images.unsplash.com/photo-1548506923-99f6e89852fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                        alt="Picture of the author"
                        width={400}
                        height={250}
                    />
                    <span className="clock-icon">
                        <span> 3:49 </span>
                    </span>

                </div>
                <div className="image-container">
                    <Image
                        src={"https://images.unsplash.com/photo-1547903006-2845abe6e3c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                        alt="Picture of the author"
                        width={400}
                        height={250}
                    />
                    <span className="clock-icon">
                        <span> 3:49 </span>
                    </span>
                </div>
                <div className="image-container">
                    <Image
                        src={"https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                        alt="Picture of the author"
                        width={400}
                        height={250}
                    />

                    <span className="clock-icon">
                        <span> 3:49 </span>

                    </span>
                </div>

                <div className="image-container">
                    <Image
                        src={"https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                        alt="Picture of the author"
                        width={400}
                        height={250}
                    />

                    <span className="clock-icon">
                        <span> 3:49 </span>
                    </span>
                </div>
                <div className="image-container">
                    <Image
                        src={"https://images.unsplash.com/photo-1545862434-853c6375b9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                        alt="Picture of the author"
                        width={400}
                        height={250}
                    />
                    <span className="clock-icon">
                        <span> 3:49 </span>
                    </span>
                </div>

            </div>

            <style jsx>
                {ligStyles}
            </style>
        </>
    );
}

export default Listgridvideo;
