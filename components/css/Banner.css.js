import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'
import { imagesUrl } from '../../constants/images'

export default css.bannerAccueilContributeurs`
.wrapper_2{ 
    line-height: 0
}

h4{
    color: white;
    margin-bottom: -28px;
}

.bottom_nav{
    position: absolute;
    bottom: 0;
    width: 100%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

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