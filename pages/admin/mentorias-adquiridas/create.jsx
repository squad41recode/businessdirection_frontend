import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import { createConteudoOnline } from "@/apiCalls/conteudos-online";
import Link from "next/link";
import { createMentoriaAdquirida } from "@/apiCalls/mentorias-adquiridas";

const CreateMentoriaAdquiridaPage = () => {
  const router = useRouter();
  const initialFormData = { status: "", encontrosFeitos: "", faltas: "", empreendedor: "", mentorModalidade: "" };

  const [newMentoriaAdquirida, setNewMentoriaAdquirida] = useState(initialFormData);
  const [mentorias, setMentorias] = useState([]);
  const [empreendedores, setEmpreendedores] = useState([]);

  useEffect(() => {
    const fetchMentorias = async () => {
      try {
        const response = await apiGet("mentorias-disponiveis");
        setMentorias(response);
      } catch (error) {
        console.error("Erro ao buscar modalidades:", error);
      }
    };
    const fetchEmpreendedores = async () => {
      try {
        const response = await apiGet("empreendedores");
        setEmpreendedores(response);
      } catch (error) {
        console.error("Erro ao buscar empreendedores:", error);
      }
    };
    fetchEmpreendedores();
    fetchMentorias();
  }, []);

  const handleInputChange = (e, id) => {
    setNewMentoriaAdquirida({ ...newMentoriaAdquirida, [id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      empreendedor: { id: Number(newMentoriaAdquirida.empreendedor) },
      mentorModalidade: { id: Number(newMentoriaAdquirida.mentorModalidade) },
      status: newMentoriaAdquirida.status,
      faltas: newMentoriaAdquirida.faltas,
      encontrosFeitos: newMentoriaAdquirida.encontrosFeitos,
    };

    createMentoriaAdquirida(formattedData)
      .then((response) => {
        console.log("Conteúdo criado com sucesso:", response);
        router.push("/admin/mentorias-adquiridas");
      })
      .catch((error) => {
        console.error("Erro ao criar conteudo:", error);
        router.push("/admin/mentorias-adquiridas");
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
      <h1>Adicionar Mentoria  Adquirida</h1>
      <form className="row g-3 mx-3">
      <div className="col-md-6">
          <label htmlFor="empreendedor" className="form-label">
            Selecione Empreendedor
          </label>
          <select
            className={`form-select ${
              empreendedores && empreendedores.length === 0 ? "disabled" : ""
            }`}
            id="empreendedor"
            name="empreendedor"
            value={newMentoriaAdquirida.empreendedor}
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
              <option key="nomeEmpreendedores" value="noEmpreendedores">
                Sem empreendedores disponíveis.
              </option>
            )}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="mentorModalidade" className="form-label">
            Selecione uma Mentoria
          </label>
          <select
            className={`form-select ${
              mentorias && mentorias.length === 0 ? "disabled" : ""
            }`}
            id="mentorModalidade"
            name="mentorModalidade"
            value={newMentoriaAdquirida.mentorModalidade}
            onChange={(e) => handleInputChange(e, "mentorModalidade")}
            disabled={mentorias && mentorias.length === 0}
            required
          >
            <option value="">Selecione...</option>
            {mentorias && mentorias.length > 0 ? (
              mentorias.map((element) => (
                <option key={element.id} value={element.id}>
                  Modalidade: <span> {element.modalidadeMentoria.nomeModalidade}</span>, {" "}
                  Dia: <span> {element.diaSemana}</span>, {" "}
                  Horário: <span> {element.horario}</span>
                </option>
              ))
            ) : (
              <option key="noMentorias" value="noMentorias">
                Sem mentorias disponíveis.
              </option>
            )}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            className="form-control"
            id="status"
            type="text"
            name="status"
            value={newMentoriaAdquirida.status}
            onChange={(e) => handleInputChange(e, "status")}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="encontrosFeitos" className="form-label">
            Encontros feitos
          </label>
          <input
            className="form-control"
            id="encontrosFeitos"
            type="number"
            name="encontrosFeitos"
            value={newMentoriaAdquirida.encontrosFeitos}
            onChange={(e) => handleInputChange(e, "encontrosFeitos")}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="faltas" className="form-label">
            Faltas
          </label>
          <input
            className="form-control"
            id="faltas"
            type="number"
            name="faltas"
            value={newMentoriaAdquirida.faltas}
            onChange={(e) => handleInputChange(e, "faltas")}
            required
          />
        </div>
        <div className="col-12 justify-content-center text-center my-3">
          <Link className="btn btn-secondary text-center" href="/admin/mentorias-adquiridas">
            Voltar
          </Link>
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMentoriaAdquiridaPage;
