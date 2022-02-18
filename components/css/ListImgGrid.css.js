// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.lig`
.container {
  width: 60%;
  margin: 2rem auto;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 1.5rem;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery__item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  /** Alternative Syntax **/
  /* grid-column: 1 / span 2;  */
  /* grid-row: 1 / span 2; */
}

.gallery__item--2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;

  /** Alternative Syntax **/
  /* grid-column: 3 / span 2;  */
  /* grid-row: 1 / span 2; */
}

.gallery__item--3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;

  /** Alternative Syntax **/
  /* grid-column: 5 / span 4;
  grid-row: 1 / span 5; */
}

.gallery__item--4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;

  /** Alternative Syntax **/
  /* grid-column: 1 / span 4;  */
  /* grid-row: 3 / span 3; */
}

.gallery__item--5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;

  /** Alternative Syntax **/
  /* grid-column: 1 / span 4; */
  /* grid-row: 6 / span 3; */
}

.gallery__item--6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;

  /** Alternative Syntax **/
  /* grid-column: 5 / span 4; */
  /* grid-row: 6 / span 3; */
}


figure{
position: relative

}
.read_more{
position: absolute;
    z-index: 1;
    background-color: ${colors.primary};
    padding: 7px 10px;
    display: inline-block;
    color: #fff;
    left: 7px;
    line-height: 1;
    top: 18px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    border-radius: 57px;
    font-size: 10px;
}

.read_more_cat{
position: absolute;
    z-index: 1;
    background-color: #49b52100;
    padding: 7px 10px;
    display: inline-block;
    color: #fff;
    margin: 0 auto;
    width: auto;
    text-align: center;
    line-height: 1;
    bottom: 4%;
    border: 1px solid #ffff;
  -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    border-radius: 57px;
    font-size: 10px;
}
.wish_bt{
position: absolute;
    z-index: 1;
    background-color: rgb(194 5 5);
    padding: 9px 10px;
    display: inline-block;
    color: #fff;
    right: 7px;
    line-height: 1;
    top: 11px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    border-radius: 57px;
}



`