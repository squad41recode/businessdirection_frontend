import React from "react";
import Sidebar from "./Sidebar";
import style from "@/styles/Dashboard.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className={` ${style.wrapperContainer}`}>
          <Sidebar />
          <div className={style.dadosContainer}>
            <article >{children}</article>
            <div className=" text-center mt-1 mb-3">
              <Link className="btn btn-voltar text-center" href="/">
                Voltar ao site principal
              </Link>
            </div>
          </div>
        </div>
      <Footer /> 
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
