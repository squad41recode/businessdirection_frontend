import { useRouter } from "next/router";
import { apiGet } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import { createConteudoOnline } from "@/apiCalls/conteudos-online";
import Link from "next/link";

const CreateConteudoOnlinePage = () => {
  const router = useRouter();
  const initialFormData = { modalidadeMentoria: "", conteudo: "" };

  const [newConteudoOnline, setNewConteudoOnline] = useState(initialFormData);
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
    fetchModalidades();
  }, []);

  const handleInputChange = (e, id) => {
    setNewConteudoOnline({ ...newConteudoOnline, [id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      modalidadeMentoria: { id: Number(newConteudoOnline.modalidadeMentoria) },
      conteudo: newConteudoOnline.conteudo,
    };

    createConteudoOnline(formattedData)
      .then((response) => {
        console.log("Conteúdo criado com sucesso:", response);
        router.push("/admin/conteudos-online");
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
    router.push("/admin/conteudos-online");
  };

  return (
    <div className="mx-auto">
      <h1>Adicionar Conteúdo Online</h1>
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
            value={newConteudoOnline.modalidadeMentoria}
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
            value={newConteudoOnline.conteudo}
            onChange={(e) => handleInputChange(e, "conteudo")}
            required
          />
        </div>
        <div className="col-12 justify-content-center text-center my-3">
          <Link
            className="btn btn-secondary text-center"
            href="/admin/conteudos-online"
          >
            Voltar
          </Link>
          <button
            className="btn btn-primary text-center"
            onClick={handleFormSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateConteudoOnlinePage;
