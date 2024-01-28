import { apiDelete, apiGet, apiPost, apiPut } from "@/utils/apiCalls";

// ModalidadeMentoriaAtributtes
export const ModalidadeMentoriaAtributtes = [
  {
    id: "id",
    label: "ID",
    type: "text",
  },
  {
    id: "nomeModalidade",
    label: "Nome da Modalidade",
    type: "text",
  },
];

export const getModalidadesSemConteudo = () => {
  return apiGet("modalidades-mentorias/sem-conteudo");
};

export const createModalidadeMentoria = (newModalidadeMentoria) => {
  return apiPost("modalidades-mentorias", newModalidadeMentoria);
};

export const updateModalidadeMentoria = (id, updatedModalidadeMentoria) => {
  return apiPut(`modalidades-mentorias/${id}`, updatedModalidadeMentoria);
};

export const deleteModalidadeMentoria = (id) => {
  return apiDelete(`modalidades-mentorias/${id}`);
};
