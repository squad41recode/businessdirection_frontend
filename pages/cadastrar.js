import React from 'react'

const cadastrar = () => {
  
  return (
    <>

    {  <main>
    <a>
      {/* formulário criar conta */}
      <form className="container-fluid row mx-auto my-4 my-md-5">
        {/* imagem lateral tela maior my-md-4 */}
        <div className="col-12 col-md-6 text-center my-auto">
          <div className="d-none d-md-block">
            <h1>Criar uma conta</h1>
            <p>Preencha os campos para criar uma conta.</p>
          </div>
          <img
            src="../img/astronaut-suit-animate.svg"
            className="login-img d-none d-md-block "
            alt="img"
          />
        </div>
        {/* formulario */}
        <div
          className=" col-12 col-md-6 row g-3 mx-auto my-4"
          id="campo-cadastrar"
        >
          <div className="d-md-none text-center mx-auto">
            <img
              src="../img/astronaut-suit-animate.svg"
              alt="logo"
              id="logo-sm"
            />
            <h1>Criar uma conta</h1>
            <p>Preencha os campos para criar uma conta.</p>
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
          <div className="">
            <label htmlFor="f-sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              id="f-sobrenome"
              className="form-control"
              placeholder="Insira o seu sobrenome"
              required=""
            />
          </div>
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
            <label htmlFor="f-senha" className="form-label">
              Senha
            </label>
            <input
              type="text"
              id="f-senha"
              className="form-control"
              placeholder="Digite uma senha"
            />
          </div>
          <div className=" ">
            <input
              type="text"
              id="f-senha"
              className="form-control"
              placeholder="Confirme a senha"
              required=""
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="f-termos"
              required=""
            />
            <label className="form-check-label" id="f-termos">
              Aceito os termos e condições
            </label>
          </div>
          <input
            type="submit"
            defaultValue="Cadastrar"
            className="btn btn-primary"
          />
        </div>
      </form>
    </a>
    <p className="text-center">
      <a>Já tem uma conta? </a>
      <a href="../pages/entrar.html">Entrar</a>
    </p>
  </main>}
     cadastrar
    </>
  )
}

export default cadastrar



