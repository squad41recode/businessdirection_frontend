import { apiDelete, apiGet, apiPost, apiPut } from "@/utils/apiCalls";

// ConteudoEstudadoAtributtes
export const ConteudoEstudadoAtributtes = [
    {
      id: "id",
      label: "ID",
      type: "text",
    },
    {
      id: "status",
      label: "Status",
      type: "text",
    },
    {
      id: "dataInicio",
      label: "Data de Início",
      type: "date",
    },
    {
      id: "dataFim",
      label: "Data de Fim",
      type: "date",
    },
    // {
    //   id: "ativo",
    //   label: "Ativo",
    //   type: "text",
    // },
  ];

  export const getConteudoEstudadoById = (id) => {
    return apiGet(`conteudos-estudados/${id}`);
  }

  export const createConteudoEstudado = (newConteudoEstudado) => {
    return apiPost("conteudos-estudados", newConteudoEstudado);
  };

  export const updateConteudoEstudado = (id, updatedConteudoEstudado) => {
  return apiPut(`conteudos-estudados/${id}`, updatedConteudoEstudado);
  }; 

  export const deleteConteudoEstudado = (id) => {
    return apiDelete(`conteudos-estudados/${id}`);
  };