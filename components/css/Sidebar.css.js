// styles/global.js
import css from "styled-jsx/css";
import { colors } from "../../constants/colors";

export default css.styles`
.profile-container{
  background: #f3f3f3;
  padding: 25px
}
h6
{
  font-size: 2rem
}

.btn_add span 
{
  font-size: 18px
}

section{
  background: white
}
b{
  color:  ${colors.primary}
}

.img-card{
  margin-bottom: 8%;
  flex: 0 0 25%;
    max-width: 24%;
}
.card .text{
  color: ${colors.blue_light_3x}
}
.btn{
  background:  ${colors.blue_light_3x};
  color: white !important;
  cursor: pointer;
    display: flex;
    width: 80%;
    margin-left: -29px;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-evenly;
}
.btn:hover{
  background:  ${colors.yellow};
  color: white !important;
}

  .pseudo div{
    color: #00000 !important;
    font-size: 1.6em;
    font-weight: 300;

  }

  .pseudo span{
    color: #00000 !important;
    font-size: 1em;
    font-weight: 300;

  }


.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl{
    width: 100%;
}
.strip{
  padding: 8px;
}
select{
    width: 91%;
    height: 31px !important;
}

.price-container h4,h6{
    color: ${colors.primary};
    letter-spacing: 1px;
}

.price-container{
  margin-top: 9px;
}

small{
  font-size: 71%;
  color: grey;
}

.form-control
{
  padding: 21px;
  height: 50px;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.containere {
  padding: 2px 16px;
}


.payment-card
{
  padding: 9px;
}

ul{
  padding: 21px;
  text-align: left;
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
    top: 16px;
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
  font-size: 14px;
  color:  ${colors.blue_light_3x};
  padding: 13px;
}

#contenues-list li{
  font-size: 10px !important;
  margin-top: 0
}
.contenues-list li:hover{
  color: ${colors.primary};
  background: white
}
.float-right{
  float: right
}

.loc_open{
    color: #49b620;
    font-size: 25px;
}



/////////

/* The side navigation menu */
.sidebar {
    margin: 0;
    padding: 0;
    width: 23%;

    background-color: #fff;
    position: fixed;
    height: 94%;
    overflow: auto;
    top: 6%;
  }
  
  /* Sidebar links */
  .sidebar a {
    display: block;
    color: ${colors.blue};
    padding: 16px;
    text-decoration: none;
    font-size: 21px !important;
    font-weight: 300 !important;
    line-height: 52px !important;
    padding-left: 22%;
  }
  
  /* Active/current link */
  .sidebar a.active {
    color: white;
    background-color: ${colors.primary};

  }
  
  /* Links on mouse-over */
  .sidebar a:hover:not(.active) {
    background-color: ${colors.primary};
    color: white;
  }


  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .img-card{
    margin-bottom: 8%;
    flex: 0 0 83%;
      max-width: 83%;
  }
  div.content {
    margin-left: 0 !important;
    flex: 0 0 83%;
    max-width: 83%;
  }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .img-card{
    margin-bottom: 8%;
    flex: 0 0 83%;
      max-width: 83%;
  }
  div.content {margin-left: 0 !important;}

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 995px) {
  .sidebar {
    width: 77%;
  }
  .profile-container
  {
    justify-content: center
  }

  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    text-align: center;
  }
  div.content {margin-left: 0 !important;}
 
  .sidebar a {
    line-height: 25px !important;
    padding-left: 0%;
  }

  .img-card{
    margin-bottom: 8%;
    flex: 0 0 83%;
      max-width: 83%;
  }
  
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1245px) {
  .sidebar a span {
    font-size: 13px
  }

  .img-card{
    margin-bottom: 8%;
    flex: 0 0 55%;
      max-width: 48%;
  }
}

@media only screen and (min-width: 1270px) {
  div.content {
    margin-left: 22% !important;
    padding: 1px 16px;
    height: 100%;
    position: relative;
    margin-top: 3%;
  }
}



`;
