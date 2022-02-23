import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.lig`
.container {
  width: 100%;
  margin: 2rem auto;
}

li{
position: relative

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
    border: 1px solid #ffff;
  -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    border-radius: 57px;
    font-size: 10px;
    bottom: 6%;
}

.read_more_cat:hover{
position: absolute;
    background-color: ${colors.primary};
    color: #fff;
    border: 1px solid ${colors.primary};
    cursor: pointer
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
    border-radius: 57px;
}



// BASIC

ul {
  display: flex;
  flex-wrap: wrap;
 margin: 0.5vmin;
}

li {
  height: 40vh;
  flex-grow: 1;
  margin: 0.5vmin;
}

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

// ADVANCED

// Portrait

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

// Short screens

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}

`