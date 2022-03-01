
import css from 'styled-jsx/css'
import { colors } from '../constants/colors'

export default css.hp`
.text-center
{
    font-weight: 300;
}
h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
}
.row
{
    background-color: white;
    padding: 12%
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
    background-color:  ${colors.dash_blue};
    color: white;

}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;

}

.fl-table td {
    font-size: 12px;
}

.fl-table thead th {
    color:  #fff;
    background: ${colors.dash_blue};
    font-weight: 400;
    border-bottom: 1px solid  ${colors.grey_light};

}


.fl-table thead th {
    color: ${colors.dash_blue};
    background: #fff;
    font-weight: 400;

}

.fl-table tr:nth-child(odd) {
    background: ${colors.dash_blue};
    color: white;

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
        background: ${colors.dash_blue};
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

`