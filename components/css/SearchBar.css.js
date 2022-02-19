import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.searchBar`

.box{
    position: relative;
    width: 20%;
    box-sizing: border-box;
}

form{
    margin: 24px;
    width: 100%;

}

.mobile-select{
  width: 87%;
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

}

.btn_1{
    padding: 8px 19px;
border-radius: 0;
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
}

* {box-sizing: content-box;
    font-family: "Poppins", Helvetica, sans-serif;
    outline: none;
}
input{
    height: 42px;
    width: 100%;
    border: 1px solid #49b620;
    border-left: none;
    padding: 7px;
    font-size: 13px;
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