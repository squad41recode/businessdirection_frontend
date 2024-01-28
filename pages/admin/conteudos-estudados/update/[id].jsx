import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import Link from "next/link";
import { updateConteudoEstudado, getConteudoEstudadoById } from "@/apiCalls/conteudos-estudados";

const UpdateConteudoEstudadoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const initialFormData = { empreendedor: "", conteudoOnline: "", status: "", dataInicio: "", dataFim: "" };

  const [updatedConteudoEstudado, setUpdatedConteudoEstudado] = useState(initialFormData);
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

  const fetchConteudoEstudado = async () => {
    try {
      const conteudoEstudadoData = await getConteudoEstudadoById(id);
      const empreendedor = empreendedores.find(emp => emp.id === conteudoEstudadoData.empreendedor.id);
      const conteudoOnline = conteudosOnline.find(cont => cont.id === conteudoEstudadoData.conteudoOnline.id);

      setUpdatedConteudoEstudado({
        empreendedor: empreendedor ? empreendedor.id.toString() : "",
        conteudoOnline: conteudoOnline ? conteudoOnline.id.toString() : "",
        status: conteudoEstudadoData.status,
        dataInicio: conteudoEstudadoData.dataInicio,
        dataFim: conteudoEstudadoData.dataFim,
      });
    } catch (error) {
      console.error("Erro ao buscar conteúdo estudado:", error);
    }
  };

  fetchEmpreendedores();
  fetchConteudosOnline();
  if (id) {
    fetchConteudoEstudado();
  }
}, [id, empreendedores, conteudosOnline]);

  const handleInputChange = (e, field) => {
    setUpdatedConteudoEstudado({ ...updatedConteudoEstudado, [field]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      empreendedor: { id: Number(updatedConteudoEstudado.empreendedor) },
      conteudoOnline: { id: Number(updatedConteudoEstudado.conteudoOnline) },
      status: updatedConteudoEstudado.status,
      dataInicio: updatedConteudoEstudado.dataInicio,
      dataFim: updatedConteudoEstudado.dataFim,
    };

    updateConteudoEstudado(id, formattedData)
      .then((response) => {
        console.log("Conteúdo estudado atualizado com sucesso:", response);
        router.push("/admin/conteudos-estudados");
      })
      .catch((error) => {
        console.error("Erro ao atualizar conteúdo estudado:", error);
      });
  };

  return (
    <div className="mx-auto">
      <h1>Atualizar Conteúdo Estudado</h1>
      <form className="row g-3 mx-3">
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
            value={updatedConteudoEstudado.empreendedor}
            onChange={(e) => handleInputChange(e, "empreendedor")}
            disabled={empreendedores && empreendedores.length === 0}
            required
            //defaultValue={updatedConteudoEstudado.empreendedor}
          >
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
            value={updatedConteudoEstudado.conteudoOnline}
            onChange={(e) => handleInputChange(e, "conteudoOnline")}
            disabled={conteudosOnline && conteudosOnline.length === 0}
            required
            //defaultValue={updatedConteudoEstudado.conteudoOnline}
          >
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
            value={updatedConteudoEstudado.status}
            onChange={(e) => handleInputChange(e, "status")}
            required
           // defaultValue={updatedConteudoEstudado.status}
          >
            {/* <option value="">Selecione...</option> */}
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
            value={updatedConteudoEstudado.dataInicio}
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
            value={updatedConteudoEstudado.dataFim}
            onChange={(e) => handleInputChange(e, "dataFim")}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Enviar
          </button>
        </div>
      </form>
      <Link className="btn btn-secondary text-center" href="/admin/conteudos-estudados">
        Voltar
      </Link>
    </div>
  );
};

export default UpdateConteudoEstudadoPage;
