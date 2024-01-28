"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("/");

  useEffect(() => {
    // Atualizar o estado local quando a rota muda
    setActiveKey(router.pathname);
  }, [router.pathname]);

  const isLinkActive = (href) => {
    return href === activeKey ? "active" : "";
  };

  return (
    <>
      <nav className="navbar navbar-expand-md px-md-1" id="menu">
        <div className="container-fluid ">
          {/* logo fixed-top*/}
          <a className="navbar-brand me-auto" href="/">
            <img
              src="/img/logo-fundos-brancos.png"
              alt="logo"
              className="logo"
            />
          </a>
          {/* btn menu telas pequenas */}
          <button
            className="btn d-md-none justify-content-end"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            id="offcanvas-btn"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* offcanvas */}
          <div
            className="offcanvas offcanvas-end "
            tabIndex={-1}
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            {/*offcanvas header*/}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                <img
                  src="/img/logo-fundos-brancos.png"
                  alt="logo"
                  className="logo"
                />
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvas"
                aria-label="Close"
              />
            </div>
            {/*offcanvas body*/}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-md-center align-items-md-center flex-grow-1">
                {/* navbar links */}
                <li className="nav-item">
                  <Link className={`nav-link ${isLinkActive("/")}`} href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/ferramentas")}`}
                    href="/ferramentas"
                  >
                    Ferramentas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/sobre")}`}
                    href="/sobre"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/contato")}`}
                    href="/contato"
                  >
                    Contato
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/admin/empreendedores")}`}
                    href="/admin/empreendedores"
                  >
                    Admin
                  </Link>
                </li>
              </ul>
              {/* btn entrar */}
              <div className={`${styles.btnCadEnt} btn-cad-ent my-3 my-md-0`}>
                <Link
                  className={`btn btn-light ${styles.btnEntrar} nav-link ${isLinkActive(
                    "/entrar"
                  )}`}
                  href="/entrar"
                >
                  Entrar
                </Link>
                <Link
                  className={`btn btn-primary ${styles.btnCadastrar} nav-link ${isLinkActive(
                    "/cadastrar"
                  )}`}
                  href="/cadastrar"
                >
                  Cadastrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
