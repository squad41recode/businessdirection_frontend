// apiCalls/mentor.js
import { apiGet } from "../utils/apiCalls";

export const getMentores = async () => {
  return apiGet("mentores");
};

// exporta a função que busca por um mentor específico pelo id
export const getMentorById = (mentorId) => {
  return apiGet(`mentores/${mentorId}`);
};

// exporta a função que faz o post para criar um novo mentor
export const createMentor = (newMentor) => {
  return apiPost("mentores", newMentor);
};

// exporta a função que atualiza os dados de um mentor
export const updateMentor = (mentorId, updatedMentor) => {
  return apiPut(`mentores/${mentorId}`, updatedMentor);
};

// exporta a função que remove um mentor do banco de dados
export const deleteMentor = (mentorId) => {
  return apiDel(`mentores/${mentorId}`);
};

// export const getMentor = () => {
//   return axios.get(`${API_URL}/mentores`);
// };

// export const getMentorById = (mentorId) => {
//   return axios.get(`${API_URL}/mentores/${clientId}`);
// };

// export const createMentor = (data) => {
//   return axios.post(`${API_URL}/mentores`, data);
// };

// export const updateMentor = (mentorId, data) => {
//   return axios.put(`${API_URL}/mentores/${mentorId}`, data);
// };

// export const deleteMentor = (mentorId) => {
//   return axios.delete(`${API_URL}/mentores/${mentorId}`);
// };
