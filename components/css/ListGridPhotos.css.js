import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.lig`
.container {
  width: 100%;
  margin: 2rem auto;
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


.grid-container {
   display: grid;
   gap: 8px;
   grid-template-rows: auto auto auto;
   grid-template-columns: 3fr 3fr 3fr 4fr 3fr 4fr;
   height: 100%;

  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;

}

.grid-item-1{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid-item-2{
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
}

.grid-item-3{
  grid-column-start: 7;
  grid-column-end: 10;
  grid-row-start: 5;
  grid-row-end: 8;
}

`