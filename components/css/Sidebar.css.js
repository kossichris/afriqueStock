

// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.styles`

body {
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

.profile-container{
    background: #e7e5e2;
    height: 106px;
    padding: 10px;
    position: absolute;
    width: 100%;
    top: -23px;
}

  .pseudo{
    color: #00000 !important
  }
/* Toggle Styles */

#viewport {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#content {
  position: relative;
  margin-top: 2%;
  width: 100%;
}

.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl{
    width: 95%;
    float: right;
}
.strip{
  padding: 8px;
}
select{
    width: 91%;
    height: 31px !important;
}

.price-container h4,h6{
    color: ${colors.primary}
}

small{
  font-size: 59%;
  color: grey;
}
/* Sidebar Styles */

#sidebar {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 312px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #f9f9f9;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#sidebar header {
  background-color: #263238;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
}

#sidebar header a {
  display: block;
  text-decoration: none;
}

#sidebar header a:hover {
  color: #fff;
}

#sidebar .nav{
    position: absolute;
    top: 6%;
    flex-direction: column;
    line-height: 49px;
    padding: 0px;
    text-align: start;
}

#sidebar .nav a{
  background: none;
 color: ${colors.blue_light};
  font-size: 14px;
  padding: 13px 21px;
}

#sidebar .nav a:hover{
  background: none;
  color: #ECEFF1;
}

#sidebar .nav a i{
  margin-right: 46px;
}

ul{
    padding: 12px;
    width: 319px;
}

ul li:hover{
    background: ${colors.primary};
    color: white
}

.li-1-btn {
    margin-top: 30%;
    background: none
}
a{
    text-decoration: none;
}

a:hover{
    color: white
}

.ul-images{
    width: 100%;
}

.ul-images li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 71px;
    margin-top: 3px;
}
.strip ul{
  border-top: none
}
.score span {
  font-size: 0.5rem
}

.icon-tabler-search{
   position: absolute;
    right: 15px;
    top: 7px;
}
.search{
    border-radius: 42px;
    background: #cdc8c824;
    border: 1px solid #4a4bae85;
    font-size: 13px;
}
.horiLine{
    width: 100%;
    height: 1px;
    background:  ${colors.blue_light_3x};
    margin-top: 8px;
}
.contenues-text{
  font-size: 12px;
  color:  ${colors.blue_light_3x};
  padding: 13px;
}

#contenues-list li{
  font-size: 10px !important;
    width: 100%;
  margin-top: 0
}
.contenues-list li:hover{
  color: ${colors.primary}
}
.float-right{
  float: right
}

.loc_open{
    color: #49b620;
    font-size: 25px;
}
// chart bar



`