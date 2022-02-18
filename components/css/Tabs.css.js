
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.tabs`
/* Wrapper Style */

.wrapper{
  margin:0 auto;
  padding-left:12%;
  padding-right:12%;
    width: 100%;

}

.cctabs {
    width: 100%;
    margin: auto;
}
.cctabs input[type="radio"] {
    opacity: 0;
}
.cctabs .fa{
  margin-right:10px;
}
.cctabs .label {
     color: #000;
    cursor: pointer;
    float: left;
    margin-right: 2px;
    padding:  9px 34px 9px 26px;
    font-size: 16px;
    font-weight: 400;
    background: #d8f4f4;
    border-radius: 40px;
}
.cctabs .label:hover {
       background: #e7f8f8;
}
.cctabs input:checked + .label {
       background: #49b620;
    color: #fff;
    display: inline-block;
    border-radius: 50px;
}
.cctabs input:nth-of-type(1):checked ~ .panels .panel:first-child, .cctabs input:nth-of-type(2):checked ~ .panels .panel:nth-child(2), .cctabs input:nth-of-type(3):checked ~ .panels .panel:nth-child(3), .cctabs input:nth-of-type(4):checked ~ .panels .panel:last-child {
    opacity: 1;
    -webkit-transition: .3s;
  /*position:relative;*/
  z-index:999;
}
.cctabs .panels {
    clear: both;
    position: relative;
    width: 100%;
    background: #fff;
}
.cctabs .panel {
    width: 100%;
    opacity: 0;
    position: absolute;
    background: #fff;
    padding: 4%;
    box-sizing: border-box;
    border: 1px solid #e0dede;
border-top: 2px solid #4ab71f;
}
.cctabs .panel h2 {
    margin: 0;
    font-family: Arial;
}

.cctabs .panel i{
  color:#ebb704;
  cursor:pointer;
}
.cctabs .panel i:hover{
  color:#f4cc42;
}


.table{
    border: 1px solid #4ab71f;
    box-sizing: border-box;
    color: #475f72;
    background: #f4f9f9;
    height: 400px;
}

h3{
    font-weight: 900;
}

.h3-text{
font-weight: 900;
    font-size: 33px;
}
.table:hover{
    color: #fff;
    background: ${colors.primary};
}


/* GRID*/
.cc-text-center{
  text-align:center;
}
.cc-mt-20{
  margin-top:50px;
}

.bottom-text{
    font-size: 11px;
}
}


`