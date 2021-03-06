import React, { useState } from "react";
import Styles from "../components/css/Sidebar.css";
import { colors } from "../constants/colors";
import Button from "./Button";
import Buttonsmall from "./ButtonSmall";
import Stickynavbar from "./StickyNavbar";

const Sidemenu = ({ onPageChange }) => {
  const [pager, setPager] = useState("");
  const onChange = (page) => {
    setPager(pager);
    onPageChange(page);
  };

  return (
    <>
      <div className="sidebar mb-5">
        <div className="profile-container d-flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user-circle"
            width="150"
            height="150"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke={colors.blue}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>

          <div className="d-flex flex-column pseudo mt-5 ml-3">
            <span> Profile contributeur </span>
            <div> @Dieubeni </div>
          </div>
        </div>
        <div className="mt-3 mb-3 d-flex flex-row justify-content-center">
          <a href="account.html" className="btn_add round-radius btn ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cloud-upload"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
              <polyline points="9 15 12 12 15 15" />
              <line x1="12" y1="12" x2="12" y2="21" />
            </svg>
            <span> Importer des contenues</span>
          </a>
        </div>
        <a
          className={pager === "DASH_CONTENT" ? "active" : ""}
          onClick={() => onChange("DASH_CONTENT")}
          href="#home"
        >
          <span>Tableau de bord </span>
        </a>
        <a onClick={() => onChange("GESTION_CONTENU")}>G??rer les contenus</a>
        <a onClick={() => onChange("DASH_CONTENT")}>
          <span>Contenus gratuit </span>
        </a>
        <a onClick={() => onChange("AUTHORISATION")}>
          <span>G??rer les autorisations</span>
        </a>
        <a onClick={() => onChange("STATS")}>
          <span>Mes statistiques</span>
        </a>
        <a onClick={() => onChange("DASH_CONTENT")}>
          <span>Informations pour les contributeurs</span>
        </a>
        <a onClick={() => onChange("ACCOUNT_SETTING")}>
          <span>Param??tres de compte</span>
        </a>
      </div>
      {/**
                 * 
                 * <div className="main_categories">
			<div className="container">
				<ul className="clearfix">
					<li>
						<a href="grid-listings-filterscol.html">
							<i className="icon-shop"></i>
							<h3>Shops</h3>
						</a>
					</li>
					<li>
						<a href="grid-listings-filterscol.html">
							<i className="icon-lodging"></i>
							<h3>Hotels</h3>
						</a>
					</li>
					<li>
						<a href="grid-listings-filterscol.html">
							<i className="icon-restaurant"></i>
							<h3>Restaurants</h3>
						</a>
					</li>
					<li>
						<a href="grid-listings-filterscol.html">
							<i className="icon-bar"></i>
							<h3>Bars</h3>
						</a>
					</li>
					<li>
						<a href="grid-listings-filterscol.html">
							<i className="icon-dot-3"></i>
							<h3>More</h3>
						</a>
					</li>
				</ul>
			</div>
			<!-- /container -->
		</div>
                 */}
      <style jsx>{Styles}</style>
    </>
  );
};

export default Sidemenu;
