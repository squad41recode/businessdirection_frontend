import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        {/*  justify-content-md-between */}
        <div className="row">
          <div className="footer-logo col-12 col-md-6 mb-3">
            <img
              src="/img/logo-fundos-brancos.png"
              alt="logo"
              className="logo"
            />
            <p>Apoio especializado para o sucesso de pequenos negócios</p>
          </div>
          <div className="col-12 col-md-6 mx-auto mb-3">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  href="/"
                  className="nav-link p-0 text-body-secondary"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/ferramentas"
                  className="nav-link p-0 text-body-secondary"
                >
                  Ferramentas
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/sobre"
                  className="nav-link p-0 text-body-secondary"
                >
                  Sobre Nós
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  href="/contato"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contato
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a href="#PoliticaDePrivacidade" className="nav-link p-0 text-body-secondary">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-3  border-top align-items-center">
          <p>© 2023 - 2024 Business Direction. Todos os direitos reservados.</p>
          <ul className="social-media list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-twitter" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-facebook" />
              </a>
            </li>
          </ul>
        </div>
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
            <li className="ms-3 ">
              <a
                href="https://github.com/CamomilaCosta"
                target="_blank"
                className="nav-link p-0 text-body-secondary"
              >
                Camila
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
              <a href="#" className="nav-link p-0 text-body-secondary">
              </a>
            </li>
          </ul>
        </div>
        <a href="https://storyset.com/" target="_blank">
          Illustrations by Storyset
        </a>
      </footer>
    </>
  );
};

export default Footer;
