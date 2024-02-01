// pages/admin/empreendedores/update/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getEmpreendedorById,
  updateEmpreendedor,
} from "@/apiCalls/empreendedor";

const UpdateEmpreendedor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [empreendedorData, setEmpreendedorData] = useState({
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

  useEffect(() => {
    if (id) {
      // carrega os dados do empreendedor pelo id ao montar o componente
      getEmpreendedorById(id)
        .then((response) => {
          setEmpreendedorData(response);
        })
        .catch((error) => {
          console.error("Erro ao obter empreendedor por ID:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e, field) => {
    setEmpreendedorData({ ...empreendedorData, [field]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      nome: empreendedorData.nome,
      sobrenome: empreendedorData.sobrenome,
      email: empreendedorData.email,
      telefone: `(${empreendedorData.telefone.slice(
        0,
        2
      )}) ${empreendedorData.telefone.slice(
        2,
        7
      )}-${empreendedorData.telefone.slice(7)}`,
      dataNascimento: empreendedorData.dataNascimento,
      nomeEmpresa: empreendedorData.nomeEmpresa,
      cidade: empreendedorData.cidade,
      estado: empreendedorData.estado,
      bairro: empreendedorData.bairro,
      cep: empreendedorData.cep,
    };

    updateEmpreendedor(id, formattedData)
      .then((response) => {
        console.log("Empreendedor atualizado com sucesso:", response);
        router.push("/admin/empreendedores");
      })
      .catch((error) => {
        console.log("Erro ao atualizar empreendedor:", error);
      });
  };

  return (
    <div className="mx-auto">
      <h1>Atualizar Empreendedor</h1>
      <form onSubmit={handleFormSubmit} className="row g-3 mx-3">
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">
            Primeiro nome
          </label>
          <input
            className="form-control"
            id="nome"
            type="text"
            name="nome"
            value={empreendedorData.nome}
            onChange={(e) => handleInputChange(e, "nome")}
            required
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
            value={empreendedorData.sobrenome}
            onChange={(e) => handleInputChange(e, "sobrenome")}
            required
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
            value={empreendedorData.email}
            onChange={(e) => handleInputChange(e, "email")}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefone" className="form-label">
            Telefone
          </label>
          <input
            className="form-control"
            id="telefone"
            type="tel"
            name="telefone"
            value={empreendedorData.telefone}
            onChange={(e) => handleInputChange(e, "telefone")}
            required
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
            value={empreendedorData.dataNascimento}
            onChange={(e) => handleInputChange(e, "dataNascimento")}
            required
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
            value={empreendedorData.nomeEmpresa}
            onChange={(e) => handleInputChange(e, "nomeEmpresa")}
            required
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
            value={empreendedorData.cidade}
            onChange={(e) => handleInputChange(e, "cidade")}
            required
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
            value={empreendedorData.estado}
            onChange={(e) => handleInputChange(e, "estado")}
            required
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
            value={empreendedorData.bairro}
            onChange={(e) => handleInputChange(e, "bairro")}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="cep" className="form-label">
            CEP
          </label>
          <input
            className="form-control"
            id="cep"
            type="text"
            name="cep"
            value={empreendedorData.cep}
            onChange={(e) => handleInputChange(e, "cep")}
            required
          />
        </div>

        <div className="col-12 justify-content-center text-center my-3">
          <Link
            className="btn btn-secondary text-center"
            href="/admin/empreendedores"
          >
            Voltar
          </Link>
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmpreendedor;
