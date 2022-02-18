
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.register`
h2{
color: ${colors.primary};
}
.register_link{
color: ${colors.primary};
}
::placeholder {
  color: ${colors.light};
font-size: 12px
}

.aside-1{
    top: 13%;
    display: block;
    background: ${colors.light_2};
    position: absolute;
    left: 35%;
    width: 25%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 50%);
    min-height: 42vh;
    height: 77vh;
    z-index: 1;
    padding: 4%
}

a{
  color: ${colors.primary}
}

.aside-2{
    top: 13%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #E4E9EC;
    position: absolute;
    left: 38%;
    width: 23%;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 50%);
    min-height: 42vh;
    height: 77vh;
    z-index: 1;
    padding: 23px;
    padding: 4% align-items: center;
    text-align: center;
    display: flex;
    align-items: center;
}

#register_contributor aside{
  width: 40%;
    -webkit-box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 50%);
    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 50%);
    padding: 45px 60px 60px 60px;
    position: absolute;
    left: 42%;
    top: 13%;
    overflow-y: none;
    background-color: #fff;
    min-height: 42vh;
    height: 77vh;
z-index: 1
}
aside span{
font-size: 12px

}
.form-sm-title{
  font-size: 9px !important
}
.contributeurs-register-wrapper{
  text-align: center
}
.aside-2 span{
font-size: 14px

}
.container_radio{
display: inline-block; margin-right: 15px;

}
.radio-group{
width: 100%
}

.image-wrapper {
  box-sizing: content-box;
    width: 39px;
}
.image-wrapper > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
}

.container_radio .text {

}

.form-control{
  border: 1px solid #49b620;
background: #ffff
}
input {
  background: #80808036;
  border-radius: 0
}
::placeholder {
  color: ${colors.light};
font-size: 12px
}

.text-start{
  text-align: start
}

input::placeholder{
  color: black !important;
}

.bottom-txt{
  font-size: 13px
}





`