import { apiPost } from "@/utils/apiCalls";

// ConteudoOnlineAtributtes
export const ConteudoOnlineAtributtes = [
    {
      id: "id",
      label: "ID",
      type: "text",
    },
    {
      id: "modalidadeMentoria.nomeModalidade",
      label: "Modalidade da Mentoria",
      type: "text",
    },
    {
      id: "conteudo",
      label: "Conteúdo",
      type: "text",
    },
  ];
  
  export const createConteudoOnline = (newConteudoOnline) => {
    return apiPost("conteudos-online", newConteudoOnline);
  };

  export const updateConteudoOnline = (id, updatedConteudoOnline) => {
  return apiPut(`conteudos-online/${id}`, updatedConteudoOnline);
  }; 

  export const deleteConteudoOnline = (id) => {
    return apiDelete(`conteudos-online/${id}`);
  };