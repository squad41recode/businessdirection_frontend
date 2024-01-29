import { apiDelete, apiPost, apiPut } from "@/utils/apiCalls";

// MentoriaAdquiridaAtributtes
export const MentoriaAdquiridaAtributtes = [
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
      id: "encontrosFeitos",
      label: "Encontros Feitos",
      type: "text",
    },
    {
      id: "faltas",
      label: "Faltas",
      type: "text",
    },
    // {
    //   id: "ativo",
    //   label: "Ativo",
    //   type: "text",
    // },
  ];

  export const createMentoriaAdquirida = (newMentoriaAdquirida) => {
    return apiPost("mentorias-adquiridas", newMentoriaAdquirida);
  };

  export const updaMentoriaAdquirida = (id, updatedMentoriaAdquirida) => {
   return apiPut(`mentorias-adquiridas/${id}`, updatedMentoriaAdquirida);
  }; 

  export const deleteMentoriaAdquirida = (id) => {
    return apiDelete(`mentorias-adquiridas/${id}`);
  };