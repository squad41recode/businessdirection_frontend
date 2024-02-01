import { useState } from "react";
import { createEmpreendedor } from "@/apiCalls/empreendedor";
import { useRouter } from "next/router";
import Link from "next/link";

const initialFormData = {
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
};

const CreateEmpreendedor = () => {
  
  const router = useRouter();
  const [newEmpreendedor, setNewEmpreendedor] = useState(initialFormData);

  const handleInputChange = (e) => {
    setNewEmpreendedor({ ...newEmpreendedor, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    // chama a função de criação da API passando os dados do formulário
    createEmpreendedor(newEmpreendedor)
      .then((response) => {
        console.log("Empreendedor criado com sucesso:", response);
        router.push("/admin/empreendedores");
      })
      .catch((error) => {
        console.error("Erro ao criar empreendedor:", error);
      });
  };

  return (
    <div className="mx-auto">
      <h1>Inserir Empreendedor</h1>
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
            value={newEmpreendedor.nome}
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
            value={newEmpreendedor.sobrenome}
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
            value={newEmpreendedor.email}
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
            value={newEmpreendedor.telefone}
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
            value={newEmpreendedor.dataNascimento}
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
            value={newEmpreendedor.nomeEmpresa}
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
            value={newEmpreendedor.cidade}
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
            value={newEmpreendedor.estado}
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
            value={newEmpreendedor.bairro}
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
            value={newEmpreendedor.cep}
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

export default CreateEmpreendedor;
