// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'
import { imagesUrl } from '../../constants/images'

export default css.bannerAccueilContributeurs`
.container{
    text-align: start;
}
.text{ 
    width: 46%
}

.text div{
    color: ${colors.primary};
    font-size: 45px;
    font-weight: 700;
}

.text span{
    color: black
}

.hero_single.version_2 .wrapper h3{
    text-shadow: none
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
 .text{
    width: 100%;
    margin-bottom: 42px
}
.container{
    text-align: center;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 .text{
    width: 100%;
    margin-bottom: 42px
}
.container{
    text-align: center;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
 .text{
    width: 100%;
    margin-bottom: 42px
}
.photo_normal{
    margin-top: 33px;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
 .text{
    width: 46%;
}
}
`