import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import Link from "next/link";
import { updateModalidadeMentoria } from "@/apiCalls/modalidades-mentorias";

const UpdateModalidadeMentoriaPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const initialFormData = { nomeModalidade: "" };

  const [modalidade, setModalidade] = useState(initialFormData);

  useEffect(() => {
    if (id) {
      const fetchModalidade = async () => {
        try {
          const response = await apiGet(`modalidades-mentorias/${id}`);
          setModalidade(response);
        } catch (error) {
          console.error("Erro ao buscar modalidade:", error);
        }
      };
      fetchModalidade();
    }
  }, [id]);

  const handleInputChange = (e, id) => {
    setModalidade({ ...modalidade, [id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      nomeModalidade: modalidade.nomeModalidade,
    };

    updateModalidadeMentoria(id, formattedData)
      .then((response) => {
        console.log("Modalidade atualizada com sucesso:", response);
        router.push("/admin/modalidades-mentorias");
      })
      .catch((error) => {
        console.error("Erro ao atualizar modalidade:", error);
      });
  };

  return (
    <div className="mx-auto">
      <h1>Atualizar Modalidade</h1>
      <form onSubmit={handleFormSubmit}  className="row g-3 mx-3">
        <div className="col-md-6">
          <label htmlFor="nomeModalidade" className="form-label">
            Nome da Modalidade
          </label>
          <input
            className="form-control"
            id="nomeModalidade"
            type="text"
            name="nomeModalidade"
            value={modalidade.nomeModalidade}
            onChange={(e) => handleInputChange(e, "nomeModalidade")}
            required
          />
        </div>
        <div className="col-12 justify-content-center text-center">
          <Link
            className="btn btn-secondary text-center"
            href="/admin/modalidades-mentorias"
          >
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

export default UpdateModalidadeMentoriaPage;
