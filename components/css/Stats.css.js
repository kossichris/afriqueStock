import css from "styled-jsx/css";
import { colors } from "../../constants/colors";

export default css.stats`
h1{
    font-size: 6em;
    text-align: center
}
h1 span{
    font-weight: 200
}
.box_booking{
    width: 77%;
    margin: auto;
    padding: 3%
}

.mobile-select-type{
    width: 100%;
    height: 42px;
    color: ${colors.primary};
    border: 1px solid #80808057;
    background: white;
}

.select-container{
    width: 234px;
}
.day-select{
    width: 80%;
}

.month-select{
    width: 100%;
    margin: 5px;
}

.year-select{
    width: 100%;
}
.gray-block{
    background: #f2f6f9;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1%;
    width: 100%;
    border: 7px solid #f2f6f9;
    margin: auto;
}

.table-block{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1%;
    width: 100%;
    margin: auto;
}

.gray-block span{
    font-size: 13px;
}

.block-5{
    height: 7em;
    justify-content: inherit;
    align-items: end
}
.right-btn{
    color: white !important;
    border-radius: 40px;
    font-weight: 300;
    width: 87%;
    padding: 14px;
    padding-right: 39px;
    font-size: 13px;
}

.text{
    font-weight: 300;
}


.download-btn{
    padding: 5px;
    border-radius: 14px;
    width: 52px;
}

.bottom-table{
    width: 69%;
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
