import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import style from "@/styles/Home.module.css";

const AddEmpreendedor = () => {
  const [newEmpreendedor, setNewEmpreendedor] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    nomeEmpresa: "",
    cidade: "",
    estado: "",
    bairro: "",
    cep: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewEmpreendedor({ ...newEmpreendedor, [e.target.name]: e.target.value });
  };

  const handleAddEmpreendedor = () => {
    axios
      .post("http://localhost:8080/api/empreendedores", newEmpreendedor)
      .then(() => {
        router.push("/admin/empreendedores");
      })
      .catch((error) => {
        alert("Erro ao inserir empreendedor:" + error);
      });
  };

  return (
    <>
      <div className="mx-auto">
        <h1 className={style.h1}>Inserir Empreendedor</h1>

        <form className="row g-3 mx-3">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              className="form-control"
              id="nome"
              type="text"
              name="nome"
              value={newEmpreendedor.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              className="form-control"
              id="sobrenome"
              type="text"
              name="sobrenome"
              value={newEmpreendedor.sobrenome}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={newEmpreendedor.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              className="form-control"
              id="telefone"
              type="text"
              name="telefone"
              value={newEmpreendedor.telefone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento
            </label>
            <input
              className="form-control"
              id="dataNascimento"
              type="date"
              name="dataNascimento"
              value={newEmpreendedor.dataNascimento}
              onChange={handleInputChange}
            />
          </div>

           <div className="col-md-6">
            <label htmlFor="nomeEmpresa" className="form-label">
              Nome da Empresa
            </label>
            <input
              className="form-control"
              id="nomeEmpresa"
              type="text"
              name="nomeEmpresa"
              value={newEmpreendedor.nomeEmpresa}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              className="form-control"
              id="cidade"
              type="text"
              name="cidade"
              value={newEmpreendedor.cidade}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input
              className="form-control"
              id="estado"
              type="text"
              name="estado"
              value={newEmpreendedor.estado}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input
              className="form-control"
              id="bairro"
              type="text"
              name="bairro"
              value={newEmpreendedor.bairro}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="col-md-6">
            <label htmlFor="mentoriasAdquiridas" className="form-label">
              Mentorias Adquiridas
            </label>
            <input
              className="form-control"
              id="mentoriasAdquiridas"
              type="text"
              name="mentoriasAdquiridas"
              value={newEmpreendedor.mentoriasAdquiridas}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="conteudosEmpreendedor" className="form-label">
              Conteúdos Empreendedor
            </label>
            <input
              className="form-control"
              id="conteudosEmpreendedor"
              type="text"
              name="conteudosEmpreendedor"
              value={newEmpreendedor.conteudosEmpreendedor}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="col-md-6">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              className="form-control"
              id="cep"
              type="text"
              name="cep"
              value={newEmpreendedor.cep}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12">
            <button className="btn btn-primary" onClick={handleAddEmpreendedor}>
              Enviar
            </button>
          </div>
        </form>

        <div className="mt-3">
          <Link href="/empreendedores" className="btn btn-secondary">
            Voltar para a Lista de Empreendedores
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddEmpreendedor;