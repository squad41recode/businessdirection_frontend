import { useRouter } from 'next/router';
import { MentoriaAtributtes, createMentoria } from '@/apiCalls/mentorias-disponiveis';
import { apiGet } from '@/utils/apiCalls';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const CreateMentoriaPage = () => {
  const router = useRouter();
  const initialFormData = { mentor: "", modalidadeMentoria: "", diaSemana: "", horario: "" };

  const [newMentoria, setNewMentoria] = useState(initialFormData);
  const [mentores, setMentores] = useState([]);
  const [modalidades, setModalidades] = useState([]);

  useEffect(() => {
    const fetchMentores = async () => {
      try {
        const response = await apiGet("mentores");
        setMentores(response);
      } catch (error) {
        console.error("Erro ao buscar mentores:", error);
      }
    };

    const fetchModalidades = async () => {
      try {
        const response = await apiGet("modalidades-mentorias");
        setModalidades(response);
      } catch (error) {
        console.error("Erro ao buscar modalidades:", error);
      }
    };

    fetchMentores();
    fetchModalidades();
  }, []);

  const handleInputChange = (e, id) => {
    setNewMentoria({ ...newMentoria, [id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      mentor: { id: Number(newMentoria.mentor) },
      modalidadeMentoria: { id: Number(newMentoria.modalidadeMentoria) },
      diaSemana: newMentoria.diaSemana,
      horario: newMentoria.horario,
    };

    createMentoria(formattedData)
      .then((response) => {
        console.log("Mentoria criada com sucesso:", response);
        router.push('/admin/mentorias-disponiveis');
      })
      .catch((error) => {
        console.error("Erro ao criar mentoria:", error);
        if (error.response) {
          console.error("O servidor respondeu com erro:", error.response.status);
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
      <h1>Adicionar Mentoria</h1>
      <form onSubmit={handleFormSubmit} className="row g-3 mx-3">
        <div className="col-md-6">
          <label htmlFor="diaSemana" className="form-label">
            Dia da semana
          </label>
          <select
          className="form-select"
          id="diaSemana"
            type="text"
            name="diaSemana"
            value={newMentoria.diaSemana}
            onChange={(e) => handleInputChange(e, "diaSemana")}
            required
        >
          <option value="">Selecione...</option>
            <option value={"Segunda-feira"}>
              Segunda-feira
            </option>
            <option value={"Terça-feira"}>
              Terça-feira
            </option>
            <option value={"Quarta-feira"}>
              Quarta-feira
            </option>
            <option value={"Quinta-feira"}>
              Quinta-feira
            </option>
            <option value={"Sexta-feira"}>
              Sexta-feira
            </option>
        </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="horario" className="form-label">
            Horário
          </label>
          <input
            className="form-control"
            id="horario"
            type="time"
            name="horario"
            value={newMentoria.horario}
            onChange={(e) => handleInputChange(e, "horario")}
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="mentor" className="form-label">
            Selecione um Mentor
          </label>
          <select
            className="form-select"
            id="mentor"
            name="mentor"
            value={newMentoria.mentor}
            onChange={(e) => handleInputChange(e, "mentor")}
            required
          >
            <option value="">Selecione...</option>
            {mentores.map((element) => (
              <option key={element.id} value={element.id}>
                {element.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="modalidadeMentoria" className="form-label">
            Selecione uma Modalidade
          </label>
          <select
            className="form-select"
            id="modalidadeMentoria"
            name="modalidadeMentoria"
            value={newMentoria.modalidadeMentoria}
            onChange={(e) => handleInputChange(e, "modalidadeMentoria")}
            required
          >
            <option value="">Selecione...</option>
            {modalidades.map((element) => (
              <option key={element.id} value={element.id}>
                {element.nomeModalidade}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 justify-content-center text-center my-3">
        <Link className="btn btn-secondary text-center" href="/admin/mentorias-disponiveis">
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

export default CreateMentoriaPage;
