import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'
import { imagesUrl } from '../../constants/images'

export default css.bannerAccueilContributeurs`
.wrapper_2{ 
    line-height: 0
}

.img-author{
    font-size: 12px;
}
.img-author span, .img-author small{
    font-weight: 300
}
.h4{
    color: white;
    margin-bottom: -28px;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    font-weight: 400;
}

.h4-photo{
    color: white;
    margin-bottom: -5px;
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 36px;
    font-weight: 600;
}


.h5-photo{
    color: white;
    margin-bottom: -5px;
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 23px;
    font-weight: 600;
}

.h6-photo{
    color: white;
    margin-bottom: -5px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 34px;
    font-weight: 500;
}
.bottom_nav{
    position: absolute;
    bottom: 0;
    width: 100%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

.h4-photo{
    color: white;
    margin-bottom: -5px;
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    font-weight: 600;
}
h4{
    width: 90% !important;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.container{
    margin-bottom: 21%;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
.container{
margin-bottom: 0%;
}

}


`