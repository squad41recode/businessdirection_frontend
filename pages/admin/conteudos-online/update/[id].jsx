import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import { updateConteudoOnline, getConteudoOnlineById } from "@/apiCalls/conteudos-online";
import Link from "next/link";

const UpdateConteudoOnlinePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const initialFormData = { modalidadeMentoria: "", conteudo: "" };

  const [updatedConteudoOnline, setUpdatedConteudoOnline] = useState(initialFormData);
  const [modalidades, setModalidades] = useState([]);

  useEffect(() => {
    const fetchModalidades = async () => {
      try {
        const response = await apiGet("modalidades-mentorias/sem-conteudo");
        setModalidades(response);
      } catch (error) {
        console.error("Erro ao buscar modalidades:", error);
      }
    };

    const fetchConteudoOnline = async () => {
      try {
        const conteudoOnlineData = await getConteudoOnlineById(id);
        setUpdatedConteudoOnline({
          modalidadeMentoria: conteudoOnlineData.modalidadeMentoria.id.toString(),
          conteudo: conteudoOnlineData.conteudo,
        });
      } catch (error) {
        console.error("Erro ao buscar conteúdo online:", error);
      }
    };

    fetchModalidades();
    if (id) {
      fetchConteudoOnline();
    }
  }, [id]);

  const handleInputChange = (e, field) => {
    setUpdatedConteudoOnline({ ...updatedConteudoOnline, [field]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      modalidadeMentoria: { id: Number(updatedConteudoOnline.modalidadeMentoria) },
      conteudo: updatedConteudoOnline.conteudo,
    };

    updateConteudoOnline(id, formattedData)
      .then((response) => {
        console.log("Conteúdo atualizado com sucesso:", response);
        router.push("/admin/conteudos-online");
      })
      .catch((error) => {
        console.error("Erro ao atualizar conteúdo:", error);
      });
  };

  return (
    <div className="mx-auto">
      <h1>Atualizar Conteúdo Online</h1>
      <form className="row g-3 mx-3">
        <div className="col-md-6">
          <label htmlFor="modalidadeMentoria" className="form-label">
            Selecione uma Modalidade
          </label>
          <select
            className={`form-select ${
              modalidades && modalidades.length === 0 ? "disabled" : ""
            }`}
            id="modalidadeMentoria"
            name="modalidadeMentoria"
            value={updatedConteudoOnline.modalidadeMentoria}
            onChange={(e) => handleInputChange(e, "modalidadeMentoria")}
            disabled={modalidades && modalidades.length === 0}
            required
          >
            <option value="">Selecione...</option>
            {modalidades && modalidades.length > 0 ? (
              modalidades.map((element) => (
                <option key={element.id} value={element.id}>
                  {element.nomeModalidade}
                </option>
              ))
            ) : (
              <option key="noModalidades" value="noModalidades">
                Sem modalidades disponíveis.
              </option>
            )}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="conteudo" className="form-label">
            Conteúdo
          </label>
          <input
            className="form-control"
            id="conteudo"
            type="text"
            name="conteudo"
            value={updatedConteudoOnline.conteudo}
            onChange={(e) => handleInputChange(e, "conteudo")}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Enviar
          </button>
        </div>
      </form>
      <Link className="btn btn-secondary text-center" href="/admin/conteudos-online">
        Voltar
      </Link>
    </div>
  );
};

export default UpdateConteudoOnlinePage;
