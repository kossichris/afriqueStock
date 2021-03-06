import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.searchBar`

input::placeholder {
    color: ${colors.grey_dark};
}

.box{
  background: white
}
.caret-down{
    position: absolute;
    top: 32%;
    right: 2%;
    margin-right: 9%;
}

select{
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

.mobile-select{
      width: 100% !important;
}
form{
    margin: 24px !important;
    width: 100%;

}
input{
    font-size: 8px !important;
}


}

/* Extra small devices (phones, 996px and down) */
@media only screen and (max-width: 996px) {

.mobile-select{
      width: 100% !important;
      display: block
}
.desktop-select{
      display: none
}
}

.box{
    position: relative;
    width: 15%;
    box-sizing: border-box;
}

form{
    margin: 24px;
    width: 100%;

}

.mobile-select{
  width: 87%;
     -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none; 
        background-color: #fff!important;
}

    .mobile-select::-ms-expand {
        display: none;
    }

   .caret-d-container {
      position: absolute;
        top: 0;
        margin-top: 17px;
       
    }

.search-container{
    width: 100%;
margin-right: 65px;
}
select{
    padding: 13px;
    height: 30px;
    border: 1px solid #49b620;
    border-right: none;
    background: white;
    font-size: 12px;
    color: #7a6868;
    text-align: center;
    width: 88%;
    padding-left: 2%;
}

.btn_1{
    padding: 8px 19px;
border-radius: 0;
}

.btn_2_container{
    width: 93%;
}
.btn_2{
    font-size: 12px;
    height: 40px;
    width: 95%;
    padding: 8px 19px;
    border-radius: 0;
    background: #fff;
    color: #745f5f;
    border: 1px solid #49b620;
    margin-left: -21px;
}

* {box-sizing: content-box;
    font-family: "Poppins", Helvetica, sans-serif;
    outline: none;
}
input{
    height: 42px;
    border: 1px solid #49b620;
    border-left: none;
    padding: 7px;
    font-size: 13px;
    width: 74%;
}

.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;
  }
}
`