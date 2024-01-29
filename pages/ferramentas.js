import { Image } from "react-bootstrap";
import React from "react";

const Ferramentas = () => {
  return (
    <>
      <main className=" mx-auto">
      <article className="container row mt-3  mx-auto">
          <div className=" col-12 col-lg-5 " id=" ">
            <div className="img-sn ">
              <Image
                src="/img/ferramentas/Data-extraction-amico.svg"
                alt="img"
                className="img-fluid"
                fluid
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 m-auto">
          <h3>Nossas Planilhas</h3>
          <p>
            Lorem ipsum dolor sit amet. Qui autem temporibus ut rerum quaerat At
            deleniti nemo sed dicta inventore. Aut illo illo sed illum quia quo
            magnam illum. Vel tenetur iusto ut voluptatem molestiae vel voluptas
            obcaecati est fugit officiis iste id omnis rerum sit
            dolorem debitis aut molestias nulla! Et repellendus illo et galisum
            quibusdam qui dolore ipsam et temporibus sunt est sunt nisi. Sed
            quidem quibusdam eum galisum quasi et omnis repellat.
          </p>
          </div>
        </article>        
        <section className="container-fluid cards-ferramentas text-center ">
          <div className="cards mt-3 ">
            <div className="card ">
                <h5 className="card-title">Simulador de empréstimo</h5>
              <img
                src="../img/sobrenos/services/Company-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                {/* <p className="card-text">Breve descrição</p> */}
              </div>
            </div>
            <div className="card  ">
                <h5 className="card-title">Gestão financeira</h5>
              <img
                src="../img/sobrenos/services/Investment-data-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                {/* <p className="card-text">Breve descrição</p> */}
              </div>
            </div>
            <div className="card ">
                <h5 className="card-title">Gestão de pessoas</h5>
              <img
                src="../img/sobrenos/services/office-amico.svg"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                {/* <p className="card-text">Breve descrição</p> */}
              </div>
            </div>
          </div>
        </section>
        <article className="container row mt-5 mx-auto">
          <div className="col-12 col-lg-6 order-lg-last m-auto">
            <h3>Nossos softwares</h3>
            <p>
              Lorem ipsum dolor sit amet. Qui autem temporibus ut rerum quaerat
              At deleniti nemo sed dicta inventore. Aut illo illo sed illum quia
              quo magnam illum. Vel tenetur iusto ut voluptatem molestiae vel
              voluptas obcaecati est fugit quisquam est asperiores autem ut
              tempora sint hic autem sequi. Est cumque delectus qui odit quae
              eos necessitatibus ! Et repellendus illo et
              galisum quibusdam qui dolore ipsam et temporibus sunt est sunt
              nisi. Sed quidem quibusdam eum galisum quasi et omnis repellat.
            </p>
          </div>
          <div className=" col-12 col-lg-5" id=" ">
            <div className="img-sn">
              <img
                src="../img/ferramentas/Work-time-amico.svg"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Ferramentas;
