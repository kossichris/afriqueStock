
// styles/global.js
import css from 'styled-jsx/css'
import { colors } from '../../constants/colors'

export default css.tabs`

h1 { font-size: 32px; }
h2 { font-size: 26px; }
h3 { font-size: 18px; }
p { margin: 0 0 15px; line-height: 24px; color: gainsboro; }
a { color: dodgerblue; text-decoration: none; border-bottom: 1px dotted; }
a:hover { color: tomato; }

.container {
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
}

/* ------------------- */
/* PEN STYLES      -- */
/* ----------------- */

/* MAKE IT CUTE ----- */
.tabs {
  position: relative;
  display: flex;
  min-height: 300px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.tabby-tab {
  flex: 1;
}

.tabby-tab label {
  display: block;
  box-sizing: border-box;
  /* tab content must clear this */
    height: 40px;

  padding: 10px;
  text-align: center;
  background: #9768D1;
  cursor: pointer;
  transition: background 0.5s ease;

}

.tabby-tab label:hover {
  background: #7B52AB;
}

.tabby-content {
  position: absolute;

  left: 0; bottom: 0; right: 0;
  /* clear the tab labels */
    top: 40px;

  padding: 20px;
  border-radius: 0 0 8px 8px;
  background: #553285;

  transition:
    opacity 0.8s ease,
    transform 0.8s ease   ;

  /* show/hide */
    opacity: 0;
    transform: scale(0.1);
    transform-origin: top left;

}

.tabby-content img {
  float: left;
  margin-right: 20px;
  border-radius: 8px;
}


/* MAKE IT WORK ----- */

.tabby-tab [type=radio] { display: none; }
[type=radio]:checked ~ label {
  background: #553285;
  z-index: 2;
}

[type=radio]:checked ~ label ~ .tabby-content {
  z-index: 1;

  /* show/hide */
    opacity: 1;
    transform: scale(1);
}

/* BREAKPOINTS ----- */
@media screen and (max-width: 767px) {
  .tabs { min-height: 400px;}
}

@media screen and (max-width: 480px) {
  .tabs { min-height: 580px; }
  .tabby-tab label {
    height: 60px;
  }
  .tabby-content { top: 60px; }
  .tabby-content img {
    float: none;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
`