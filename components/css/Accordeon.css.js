
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'
import { imagesUrl } from '../../constants/images'

export default css.accordeon`
.tabs {
  overflow: hidden;
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.tab-label {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
    justify-content: space-between;
  padding: 1em;
  background: ${colors.grey_dark};
color: ${colors.grey};
  font-weight: bold;
    font-weight: 500;
  cursor: pointer;
  /* Icon */
}
.tab-label:hover {
  background: ${colors.blue_light};
color: white;

}
.tab-label::after {
  content: "";
  width: 1em;
  height: 1em;
  text-align: center;
  -webkit-transition: all .35s;
  transition: all .35s;
}

.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  -webkit-transition: all .35s;
  transition: all .35s;
}

input:checked+.tab-label {
  background: ${colors.blue_light};
color: white
}
input:checked+.tab-label::after {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
input:checked~.tab-content {
  max-height: 100vh;
  padding: 1em;
}

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

`