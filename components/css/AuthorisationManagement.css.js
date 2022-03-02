import css from "styled-jsx/css";
import { colors } from "../../constants/colors";
import { imagesUrl } from "../../constants/images";

export default css.authorisation`
.containeur
{
    max-width: 95%;
    margin: auto
} 

.box_booking{
    padding: 1%;
}

.form-group{
    width: 73%;
    height: 50px;
    border-radius: 36px;
    border: 0.12em solid ${colors.primary};
    background: #fff4f4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
}
.form-input{
    width: 75%;
    height: 50px;
    width: 75%;
    height: 50px;
    background: #f0f8ff00;
    border: none;
    padding: 24px;
    margin-top: -14px
}

.m-right{
    margin-right: 6%
}


.rounded{
    background: ${colors.blue_light_3x};
    color: white;
    background: #4A4AAE;
    height: 48px;
    float: right;
    font-size: 65%;
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 300;
}

input::placeholder{
    color: #c6cacd;
    font-weight: 300
  }

.download-btn{
    padding: 7px;
    border-radius: 14px;
    width: 52px;
}


.primary-btn{
    background: ${colors.primary}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 350px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
    .form-group{
        width: 100%
    }
    .rounded{
        width: 100%;
        margin: auto;
        margin-top: 2%
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {


}

// table css

.table-block{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1%;
    width: 100%;
    margin: auto;
}

/* Table Styles */

.table-wrapper{
    width: 100%;
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color:  #f2f6f9;
    color: gray;

}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;

}

.fl-table td {
    font-size: 12px;
}

.fl-table-bottom td {
    font-size: 10px;
    font-weight: 300
}

.fl-table thead th {
    color:  #fff;
    background: ${colors.dash_blue};
    font-weight: 400;
    border-bottom: 1px solid  ${colors.grey_light};

}


.fl-table thead th {
    color: ${colors.primary};
    background: #fff;
    font-weight: 400;

}

.fl-table-bottom thead th {
    color: #7e9da5; 
    font-weight: 400;
    font-size: 10px;

}

.fl-table tr:nth-child(odd) {
    background: #f2f6f9;
    color: gray;

}

.fl-table-bottom tr:nth-child(odd) {
    background: #fff;
    color: gray;

}

.fl-table-bottom tr:nth-child(even) {
    background: #fff;
    color: gray;

}

.fl-table-bottom tr
{
    border-bottom: 1px solid #ededed;
}

tr
{
    border-bottom: 10px solid #fff;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #f2f6f9;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}

`;
