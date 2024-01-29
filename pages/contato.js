import React from "react";

const Contato = () => {
  return (
    <>
      <main>
        {/* formulário criar conta */}
        <form className="container-fluid row mx-auto my-4 my-md-5">
          <div className="col-12 col-md-6 text-center my-auto">
            <div className="d-none d-md-block">
              <h1>Fale Conosco</h1>
              <p>Preencha os campos para nos enviar a sua mensagem.</p>
            </div>
            <img
              src="../img/mobile-marketing-animate.svg"
              className="login-img d-none d-md-block "
              alt="img"
            />
          </div>
          <div
            className=" col-12 col-md-6 row g-3 m-auto my-auto"
            id="campo-contato"
          >
            <div className="d-md-none text-center mx-auto">
              <img
                src="../img/mobile-marketing-animate.svg"
                alt="logo"
                id="logo-sm"
              />
              <h1>Fale Conosco</h1>
              <p>Preencha os campos abaixo para nos enviar a sua mensagem.</p>
            </div>
            <div className="">
              <label htmlFor="f-nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="f-nome"
                className="form-control"
                placeholder="Insira o seu nome"
                required=""
              />
            </div>
            {/* <div class="">
      <label for="f-sobrenome" class="form-label">Sobrenome</label>
      <input type="text" id="f-sobrenome" class="form-control" placeholder="Insira o seu sobrenome" required>
  </div> */}
            <div className="">
              <label htmlFor="f-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="f-email"
                className="form-control"
                placeholder="Insira seu email"
                required=""
              />
            </div>
            <div className=" ">
              <label htmlFor="f-assunto-msg" className="form-label">
                Assunto da sua mensagem
              </label>
              <input
                type="text"
                id="f-assunto-msg"
                className="form-control"
                placeholder="Digite o assunto da sua mensagem"
              />
            </div>
            <div className=" ">
              <label htmlFor="f-msg" className="form-label">
                Mensagem
              </label>
              <input
                type="text"
                id="f-msg"
                className="form-control"
                placeholder="Digite a sua mensagem"
              />
            </div>
            <input
              type="submit"
              defaultValue="Enviar"
              className="btn btn-primary"
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default Contato;
