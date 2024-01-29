import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createModalidadeMentoria } from "@/apiCalls/modalidades-mentorias";

const CreateModalidadeMentoriaPage = () => {
  const router = useRouter();
  const initialFormData = { nomeModalidade: "" };

  const [newModalidade, setNewModalidade] = useState(initialFormData);

  const handleInputChange = (e, id) => {
    setNewModalidade({ ...newModalidade, [id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createModalidadeMentoria(newModalidade)
      .then((response) => {
        console.log("Conteúdo criado com sucesso:", response);
        router.push("/admin/modalidades-mentorias");
      })
      .catch((error) => {
        console.error("Erro ao criar conteudo:", error);
        alert("Erro ao criar conteudo:", error);
        router.push("/admin/modalidades-mentorias");
        if (error.response) {
          console.error(
            "O servidor respondeu com erro:",
            error.response.status
          );
          console.error("Dados do erro:", error.response.data);
        } else if (error.request) {
          console.error("Nenhuma resposta recebida do servidor");
        } else {
          console.error("Erro ao configurar a solicitação:", error.message);
        }
      });
  };

  return (
    <div className="mx-auto ">
      <h1>Adicionar Modalidade</h1>
      <form onSubmit={handleFormSubmit} className="row g-3 mx-3  justify-content-center">
        <div className="col-md-6">
          <label htmlFor="nomeModalidade" className="form-label">
            Nome da Modalidade
          </label>
          <input
            className="form-control"
            id="nomeModalidade"
            type="text"
            name="nomeModalidade"
            value={newModalidade.nomeModalidade}
            onChange={(e) => handleInputChange(e, "nomeModalidade")}
            required
          />
        </div>

        <div className="col-12 justify-content-center text-center">
          <Link
            className="btn btn-secondary"
            href="/admin/modalidades-mentorias"
          >
            Voltar
          </Link>
          <button className="btn btn-primary" type="submit" >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateModalidadeMentoriaPage;
