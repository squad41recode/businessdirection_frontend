// apiCalls/empreendedor.js
import { apiGet, apiPost, apiPut, apiDelete } from "../utils/apiCalls";
import { API_URL } from "../utils/apiCalls";

// export const getEmpreendedores = async () => {
//   return apiGet("empreendedores");
// };

// MentoriaAtributtes
export const MentoriaAtributtes = [
    {
      id: "id",
      label: "ID",
      type: "text",
    },
    {
      id: "mentor.nome",
      label: "Nome do Mentor",
      type: "text",
    },
    {
      id: "modalidadeMentoria.nomeModalidade",
      label: "Modalidade da Mentoria",
      type: "text",
    },
    {
      id: "diaSemana",
      label: "Dia da Semana",
      type: "text",
    },
    {
      id: "horario",
      label: "Horário",
      type: "time",
    },
    // {
    //   id: "ativo",
    //   label: "Ativo",
    //   type: "text",
    // },
  ];

// export const apiGet = async (endpoint) => {
//     try {
//       const response = await axios.get(`${API_URL}/${endpoint}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Erro ao obter dados da API (${endpoint}):`, error);
//       throw error;
//     }
//   };

// exporta a função que busca por um empreendedor específico pelo id
export const getMentoriaById = (mentoriaId) => {
  return apiGet(`mentorias-disponiveis/${mentoriaId}`);
};

// exporta a função que faz o post para criar um novo empreendedor
export const createMentoria = (newMentoria) => {
  //newMentoria.id = Long.parseLong(mentorId);
  return apiPost("mentorias-disponiveis", newMentoria);
};

// exporta a função que atualiza os dados de um empreendedor
export const updateMentoria = (mentoriaId, updateMentoria) => {
  return apiPut(`mentorias-disponiveis/${mentoriaId}`, updateMentoria);
};

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };

// exporta a função que remove um empreendedor do banco de dados
export const deleteMentoria = (mentoriaId) => {
  return apiDelete(`mentorias-disponiveis/${mentoriaId}`);
};
