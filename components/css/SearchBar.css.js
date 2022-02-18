// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.offer`
.subtitle{
 color: #ffff
}
form{
    width: 70%;
}
.submit{
    border-radius: 0px !important
}
.form-control{
    border-radius: 0px !important;
    font-size: 12px
}

.inner{
    width: 83%;
}
.btn_1_prime{
    height: 41px;
    padding:  0px 18px;
    border-radius: 0
}
.btn_1_second{
    height: 41.99px;
    padding: 0px 11px;
    border-radius: 0;
}
.search-input {
padding-right: 0;
}
.no-background{
      background: none !important;
}

.search-cont{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 43px;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 497px) {

.custom-search-input-2.inner input{
         width: 82%;
}
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.inner{
    width: 100%;
}

.dropdown{
    width: 464px
}
btn_1_second{
    height: 40px;
}
.dropbtn{
    font-size: 13px;
}
.custom-search-input-2.inner input{
         width: 87%;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.inner{
    width: 100%;
}
.custom-search-input-2.inner input{
         width: 87%;
}
.btn_1_second{
    height: 40px;
}

.dropdown{
    width: 464px;
    font-size: 13px;
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 780px) {

.inner{
    width: 100%;
}
.custom-search-input-2.inner input{
         width: 91%;
}
.btn_1_second{
    height: 40px;
}

.dropdown{
    width: 464px;
    font-size: 13px;
}

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
.inner{
    width: 100%;
}
.btn_1_second{
    height: 40px;
}
.dropdown{
    width: 464px;
    font-size: 13px;
}
}


/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
.inner{
    width: 79%;
}
.dropdown{
    width: 464px;
    font-size: 13px;
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1000px) {

.custom-search-input-2.inner input{
        width: 94%;
}

.btn_1_second {
    height: 41px;
}

}
`