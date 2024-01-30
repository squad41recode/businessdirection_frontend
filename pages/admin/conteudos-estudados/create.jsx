import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createConteudoEstudado } from "@/apiCalls/conteudos-estudados";

const CreateConteudoEstudadoPage = () => {
  const router = useRouter();
  const initialFormData = { empreendedor:"", conteudoOnline: "", status: "", dataInicio: "", dataFim: "" };

  const [newConteudoEstudado, setNewConteudoEstudado] = useState(initialFormData);
  const [empreendedores, setEmpreendedores] = useState([]);
  const [conteudosOnline, setConteudosOnline] = useState([]);

  useEffect(() => {
    const fetchEmpreendedores = async () => {
      try {
        const response = await apiGet("empreendedores");
        setEmpreendedores(response);
      } catch (error) {
        console.error("Erro ao buscar empreendedores:", error);
      }
    };
    const fetchConteudosOnline = async () => {
      try {
        const response = await apiGet("conteudos-online");
        setConteudosOnline(response);
      } catch (error) {
        console.error("Erro ao buscar conteudos:", error);
      }
    };
    fetchEmpreendedores();
    fetchConteudosOnline();
  }, []);

  const handleInputChange = (e, id) => {
    setNewConteudoEstudado({ ...newConteudoEstudado, [id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      empreendedor: { id: Number(newConteudoEstudado.empreendedor) },
      conteudoOnline: { id: Number(newConteudoEstudado.conteudoOnline) },
      status: newConteudoEstudado.status,
      dataInicio: newConteudoEstudado.dataInicio,
      dataFim: newConteudoEstudado.dataFim,
    };

    createConteudoEstudado(formattedData)
      .then((response) => {
        console.log("Conteúdo criado com sucesso:", response);
        router.push("/admin/conteudos-estudados");
      })
      .catch((error) => {
        console.error("Erro ao criar conteudo:", error);
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
    <div className="mx-auto">
      <h1>Adicionar Conteúdo Estudado</h1>
      <form onSubmit={handleFormSubmit}  className="row g-3 mx-3">
        <div className="col-md-6">
          <label htmlFor="empreendedor" className="form-label">
            Selecione um Empreendedor
          </label>
          <select
            className={`form-select ${
              empreendedores && empreendedores.length === 0 ? "disabled" : ""
            }`}
            id="empreendedor"
            name="empreendedor"
            value={newConteudoEstudado.empreendedor}
            onChange={(e) => handleInputChange(e, "empreendedor")}
            disabled={empreendedores && empreendedores.length === 0}
            required
          >
            <option value="">Selecione...</option>
            {empreendedores && empreendedores.length > 0 ? (
              empreendedores.map((element) => (
                <option key={element.id} value={element.id}>
                  {element.nome}
                </option>
              ))
            ) : (
              <option key="noEmpreendedores" value="noEmpreendedores">
                Sem empreendedores disponíveis.
              </option>
            )}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="conteudoOnline" className="form-label">
            Selecione um Conteudo Online
          </label>
          <select
            className={`form-select ${
              conteudosOnline && conteudosOnline.length === 0 ? "disabled" : ""
            }`}
            id="conteudoOnline"
            name="conteudoOnline"
            value={newConteudoEstudado.conteudoOnline}
            onChange={(e) => handleInputChange(e, "conteudoOnline")}
            disabled={conteudosOnline && conteudosOnline.length === 0}
            required
          >
            <option value="">Selecione...</option>
            {conteudosOnline && conteudosOnline.length > 0 ? (
              conteudosOnline.map((element) => (
                <option key={element.id} value={element.id}>
                  {element.conteudo}
                </option>
              ))
            ) : (
              <option key="noConteudoOnline" value="noConteudoOnline">
                Sem conteudos disponíveis.
              </option>
            )}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className={`form-select `}
            id="status"
            name="status"
            value={newConteudoEstudado.status}
            onChange={(e) => handleInputChange(e, "status")}
            required
          >
            <option value="">Selecione...</option>
            <option value="Cursando">Cursando</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="dataInicio" className="form-label">
            Data de Início
          </label>
          <input
            className="form-control"
            id="dataInicio"
            type="date"
            name="dataInicio"
            value={newConteudoEstudado.dataInicio}
            onChange={(e) => handleInputChange(e, "dataInicio")}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dataFim" className="form-label">
            Data de Fim
          </label>
          <input
            className="form-control"
            id="dataFim"
            type="date"
            name="dataFim"
            value={newConteudoEstudado.dataFim}
            onChange={(e) => handleInputChange(e, "dataFim")}
            required
          />
        </div>
        <div className="col-12 justify-content-center text-center my-3">
          <Link className="btn btn-secondary text-center" href="/admin/conteudos-estudados">
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

export default CreateConteudoEstudadoPage;
