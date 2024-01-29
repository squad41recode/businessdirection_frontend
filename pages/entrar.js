import React from "react";

const Entrar = () => {
  return (
    <>
      <main>
        {/* formulário criar conta */}
        <form className="container-fluid row mx-auto my-4 my-md-5">
          {/* imagem lateral tela maior */}
          <div className="col-12 col-md-6 text-center my-auto">
            <div className="d-none d-md-block">
              <h1>Fazer login</h1>
              <p>Preencha os campos para entrar na sua conta.</p>
            </div>
            <img
              src="../img/astronaut-suit-animate.svg"
              className="login-img d-none d-md-block "
              alt="img"
            />
          </div>
          {/* formulario */}
          <div
            className=" col-12 col-md-6 row g-3 m-auto my-md-auto"
            id="campo-entrar"
          >
            {/* imagem e texto tela menor */}
            <div className="d-md-none text-center mx-auto">
              <img
                src="../img/astronaut-suit-animate.svg"
                alt="logo"
                id="logo-sm"
              />
              <h1>Fazer login</h1>
              <p>Preencha os campos abaixo para entrar na sua conta.</p>
            </div>
            <h1 className="text-center d-none d-md-block">Login</h1>
            <div className="">
              <label htmlFor="f-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="f-email"
                className="form-control"
                placeholder="Digite seu email"
                required=""
              />
            </div>
            <div className=" ">
              <label htmlFor="f-senha" className="form-label">
                Senha
              </label>
              <input
                type="text"
                id="f-senha"
                className="form-control"
                placeholder="Digite sua senha"
              />
              <a href="#">Esqueceu a senha?</a>
            </div>
            <input
              type="submit"
              defaultValue="Entrar"
              className="btn btn-primary"
            />
          </div>
        </form>
        <p className="text-center">
          Ainda não tem uma conta? <a href="cadastrar.html">Cadastrar</a>
        </p>
      </main>
    </>
  );
};

export default Entrar;
