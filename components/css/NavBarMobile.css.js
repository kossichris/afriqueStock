
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.style`

body {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #ffff;
  opacity:1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5em;
  font-weight: 400;
  transition: 200ms;
}
a:hover {
  opacity:0.5;
}
ul {
  padding: 0;
  list-style-type: none;
}



.container {
  margin-top: 50px;
  Display: flex;
  justify-content: center;
  align-items: center;
}


nav {
  height: 65px;
    position: fixed;
    height: 65px;
    z-index: 99999999;
    left: 0;
    top: 0;
}


#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 7px;
  left: 25px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

    padding: 17px 15px 15px 15px;
    border-radius: 48px;
    width: 100%;
    height: 51px;
}

#menuToggle input
{
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: #ffff;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 479px;
  height: 9000px;
box-shadow: 0 0 8px #111112;
    margin: -50px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background-color: #051533;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  transition-delay: 2s;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {


}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
nav {
    display: none
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

nav {
    display: none
}

}

`