import React from "react";
import Sidebar from "./Sidebar";
import style from "@/styles/Dashboard.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className={` ${style.dashboardLayout} `}>
        {/* ${style.DashboardLayout} */}
        {/* <SidebarHeader/> */}
        <header
          className={`container-fluid  justify-content-between ${style.dashboardHeader}`}
        >
          <div className={` justify-content-start ${style.headerLogo}`}>
            <button
              className={` d-lg-none ${style.toggleSidebarBtn}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
              id="offcanvas-btn"
            >
              <FaBars />
            </button>
            <a className="navbar-brand me-auto" href="/">
              <img src="/img/logo-fundos-brancos.png" alt="logo" />
            </a>
          </div>
          {/* <div className=" justify-content-end ">
            <Link className="" href="/">editar aqui</Link>
          </div> */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-padrao" type="submit">
              <i className="bi-search"></i>
            </button>
          </form>
        </header>

        <div className={` ${style.wrapperContainer}`}>
          <Sidebar />
          <div className={style.dadosContainer}>
            <>{children}</>
            <div className=" text-center mt-auto mb-3">
              <Link className="btn btn-voltar text-center" href="/">
                Voltar ao site principal
              </Link>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
        <footer>
          <div className="d-flex flex-column flex-sm-row justify-content-center py-3  align-items-center">
            <p>
              Desenvolvido com
              <i className="bi bi-heart-fill" style={{ color: "red" }} />
              por:
            </p>
            <ul className=" list-unstyled d-flex">
              <li className="ms-3">
                <a
                  href="https://github.com/bia-berenguel"
                  target="_blank"
                  className="nav-link p-0 text-body-secondary"
                >
                  Beatriz
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://github.com/svhellen"
                  target="_blank"
                  className="nav-link p-0 text-body-secondary"
                >
                  Cristiele
                </a>
              </li>
              <li className="ms-3">
                <a href="#" className="nav-link p-0 text-body-secondary"></a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"
      />
    </>
  );
};

export default DashboardLayout;
