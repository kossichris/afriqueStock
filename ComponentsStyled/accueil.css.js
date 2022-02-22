
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.accueil`

.contener{
    width: 100%
}
h5, h2{
color: ${colors.primary};
}

h5{
    font-weight: 600;
    font-size: 24px;
}

h2{
font-weight: 600
}

h3 p{
    color: ${colors.grey};
font-weight: 300

}

.boxed_list span{
    margin-left: -18px;
    margin-bottom: -18px;
}
span p{
    font-size: 21px;
}
.a{
    background: #D4D9DE!important;
    padding: 3em;
    width: 100%;
    height: 218px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: start;
}
.editorial-text{
    font-size: 35px;
}
h3 span{
    width: 69%;
    margin: auto;
    font-weight: 300;
    color: #687178;
    font-size: 20px;

}

.text-black{
color: ${colors.grey};
font-weight: 300

}

p a {
color: ${colors.primary};

}
.grid_item{
    height: 25vw;
}

.containeur{
    width: 94%;
    margin: 0 auto;
}

.block{
    background: lightgrey;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
}

.video-gallery{
   display: grid; 
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 8px;
   height: 100%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.video-gallery{
   display: grid; 
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr;
   gap: 8px;
   height: 100%;
}
.containeur{
    width: 84%;
    margin: 2rem auto;
}

p{
    text-align: center
}

.play-icon{
    left: 42% !important;
    top: 35%  !important;
}

.ul-container{
     display: grid  !important;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr  !important;
    grid-template-columns: 1fr  !important;
    gap: 41px  !important;
    margin: auto
}

.links{
    margin-bottom: 45px;
}

}

.ul-container{
     display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 41px;
    height: 100%;
    padding: 2em 2em 0em 2em;
    flex-wrap: wrap;
    line-height: 39px;
}

ul{
    height: 146px;
}

.ul-container li a {
    color:  ${colors.grey};
}

h4 , h6{
    color: #ffff
}

.image-container{
        position: relative;
}
.play-icon{
    width: 34px;
    height: 35px;
    position: absolute;
    left: 45%;
    top: 40%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    background: #f0f8ff00;
    border-radius: 50%;
    border: 2px solid white;
    padding: 4px;
}

.play-icon svg{
margin-top: -2px;
    margin-left: 1px;
}

.clock-icon{
    position: absolute;
    left: 5%;
    bottom: 7%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    background: #f0f8ffd6;
    border-radius: 7px;
    padding: 5px;
    font-weight: 300
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.links{
    margin-bottom: 0;
}

ul{
    height: 225px;
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
.inner {
    width: 100%;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`