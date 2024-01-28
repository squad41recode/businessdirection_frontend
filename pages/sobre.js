import React from "react";

const Sobre = () => {
  return (
    <>
      <main className=" pg-sobre mx-auto">
        <div id="subheader">
          <h1 className="display-4 m-3">
            Apoio especializado para o sucesso de pequenos negócios
          </h1>
        </div>
        <div className="custom-shape-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            />
          </svg>
        </div>
        {/* nossa missao */}
        <article className="container row mt-0">
          <div className="col-12 col-lg-6 m-auto">
            <h2>Nossa missão</h2>
            <p>
              A Business Direction é uma empresa social que tem como objetivo
              auxiliar pessoas de baixa renda, com interesse em empreendedorismo
              e crescimento econômico, a identificar suas necessidades como
              empreendedor, os recursos necessários, fontes de financiamento que
              melhor se adequam a sua realidade, desenvolver plano de negócio,
              desenvolver plano de marketing, entre outras orientações.
            </p>
          </div>
          <div className=" col-12 col-lg-5" id=" ">
            <div className="img-sn">
              <img
                src="../img/sobrenos/img-1.png"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
        </article>
        {/* nossa historia */}
        <article className="container row mt-5">
          <div className="col-12 col-lg-6 order-lg-last m-auto">
            <h2>Nossa história</h2>
            <p>
              A Business Direction é uma organização que nasceu da necessidade
              de auxiliar pessoas de baixa renda a desenvolver suas ideias e
              realizar seus sonhos oferecendo mentorias completas para auxiliar
              desde a descoberta do projeto potencial, passando pela
              identificação das melhores fontes financiadoras, menores taxas de
              juros, até a devida efetivação do projeto.
            </p>
            <p>
              Acreditamos que todos têm o potencial de empreender e serem
              bem-sucedidos.
            </p>
          </div>
          <div className=" col-12 col-lg-5" id=" ">
            <div className="img-sn">
              <img
                src="../img/sobrenos/img-2.png"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
        </article>
        <article className="container-fluid text-center" id="team">
          <h2>Nosso time</h2>
          <div
            id="carousel-sobrenos"
            className="carousel slide carousel-dark my-3"
            data-bs-ride="ride"
            data-bs-interval={100000}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="cards-wrapper">
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-1.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Marina Souza</h5>
                      <p className="card-text">CEO e Fundador</p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-2.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">João Oliveira</h5>
                      <p className="card-text">Consultor Financeiro</p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-3.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Isabela Ferreira</h5>
                      <p className="card-text">Diretora de Operações</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="cards-wrapper">
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-4.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Maria Pinheiro</h5>
                      <p className="card-text">Especialista em Marketing</p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-11.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Manoel Castro</h5>
                      <p className="card-text">
                        Gerente de Desenvolvimento de Negócios
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-6.1.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Ana Rodrigues</h5>
                      <p className="card-text">Analista de Marketing Digital</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="cards-wrapper">
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-7.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Bruna Martins</h5>
                      <p className="card-text">Estrategista de Negócios</p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-8.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Gabriela Santos</h5>
                      <p className="card-text">Analista de Finanças</p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="../img/sobrenos/team/perfil-9.jpg"
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Pedro Maia</h5>
                      <p className="card-text">Especialista em Logística</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev carousel-control"
              type="button"
              data-bs-target="#carousel-sobrenos"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-control"
              type="button"
              data-bs-target="#carousel-sobrenos"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>
        <section className="container-fluid cards-services text-center">
          <h2>Nossos serviços</h2>
          <div className="cards mt-3 ">
            <div className="card ">
              <img
                src="../img/sobrenos/services/Company-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Serviço</h5>
                <p className="card-text">Breve descrição</p>
              </div>
            </div>
            <div className="card ">
              <img
                src="../img/sobrenos/services/Webinar-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Serviço</h5>
                <p className="card-text">Breve descrição</p>
              </div>
            </div>
            <div className="card  ">
              <img
                src="../img/sobrenos/services/Investment-data-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Serviço</h5>
                <p className="card-text">Breve descrição</p>
              </div>
            </div>
            <div className="card ">
              <img
                src="../img/sobrenos/services/office-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Serviço</h5>
                <p className="card-text">Breve descrição</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sobre;
