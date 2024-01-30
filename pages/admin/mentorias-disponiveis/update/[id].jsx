import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getMentoriaById, updateMentoria } from '@/apiCalls/mentorias-disponiveis';
import { apiGet } from '@/utils/apiCalls';
import Link from 'next/link';

const UpdateMentoriaPage = () => {
  const router = useRouter();
  const [mentoria, setMentoria] = useState({
    mentor: "",
    modalidadeMentoria: "",
    diaSemana: "",
    horario: "",
  });
  const [mentores, setMentores] = useState([]);
  const [modalidades, setModalidades] = useState([]);

  const { id } = router.query;

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

    const fetchMentoriaById = async () => {
      try {
        const response = await getMentoriaById(id);
        setMentoria({
          mentor: response.mentor.id,
          modalidadeMentoria: response.modalidadeMentoria.id,
          diaSemana: response.diaSemana,
          horario: response.horario,
        });
      } catch (error) {
        console.error("Erro ao buscar mentoria por ID:", error);
      }
    };

    fetchMentores();
    fetchModalidades();
    if (id) {
      fetchMentoriaById();
    }
  }, [id]);

  const handleInputChange = (e, fieldName) => {
    setMentoria({ ...mentoria, [fieldName]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      mentor: { id: Number(mentoria.mentor) },
      modalidadeMentoria: { id: Number(mentoria.modalidadeMentoria) },
      diaSemana: mentoria.diaSemana,
      horario: mentoria.horario,
    };

    try {
      await updateMentoria(id, formattedData);
      alert("Mentoria atualizada com sucesso!");
      router.push('/admin/mentorias-disponiveis');
    } catch (error) {
      console.error("Erro ao atualizar mentoria:", error);
      alert("Oops... Houve algum erro ao atualizar a mentoria.");
    }
  };

  return (
    <div className="mx-auto">
      <h1>Atualizar Mentoria</h1>
      <form onSubmit={handleFormSubmit} className="row g-3 mx-3">
      <div className="col-md-6">
          <label htmlFor="diaSemana" className="form-label">
            Dia da semana
          </label>
          <input
            className="form-control"
            id="diaSemana"
            type="text"
            name="diaSemana"
            value={mentoria.diaSemana}
            onChange={(e) => handleInputChange(e, "diaSemana")}
          />
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
            value={mentoria.horario}
            onChange={(e) => handleInputChange(e, "horario")}
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
            value={mentoria.mentor}
            onChange={(e) => handleInputChange(e, "mentor")}
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
            value={mentoria.modalidadeMentoria}
            onChange={(e) => handleInputChange(e, "modalidadeMentoria")}
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
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMentoriaPage;
