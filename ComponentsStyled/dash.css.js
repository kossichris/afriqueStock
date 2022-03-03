import css from "styled-jsx/css";
import { colors } from "../constants/colors";

export default css.dash`


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
    font-size: 23px !important;
    font-weight: 300 !important;
    line-height: 52px !important

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
  
  /* Page content. The value of the margin-left property should match the value of the sidebar's width property */
  div.content {
    margin-left: 22%;
    padding: 1px 16px;
    height: 1000px;
    position: relative;
    margin-top: 3%;
    
    
  }
  
  /* On screens that are less than 700px wide, make the sidebar into a topbar */
  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
  }
  
  /* On screens that are less than 400px, display the bar vertically, instead of horizontally */
  @media screen and (max-width: 400px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }

  @media screen and (max-width: 992px) {
    div.content {
    min-width: 100%;
    margin-left: 0 !important
    }
  }
  div.content {
    margin-left: 22%;
    padding: 1px 16px;
    height: 1000px;
    position: relative;
    margin-top: 3%;
    
    
  }



`;
