
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.accueil`
h5, h2{
color: ${colors.primary};
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

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(4, 0fr);
  gap: 4rem;
  grid-auto-rows: minmax(100px, auto);

}

.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;

}

.gallery__item--2 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 9;

}

.gallery__item--3 {

    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 4;

}

.ul-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 36px 151px 69px 151px;
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
    position: absolute;
    left: 45%;
    top: 40%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    background: #f0f8ff57;
    border-radius: 40px;
    padding: 5px;
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