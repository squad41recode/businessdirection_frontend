// apiCalls/empreendedor.js
import { apiGet, apiPost, apiPut, apiDelete } from "../utils/apiCalls";

export const getEmpreendedores = async () => {
  return apiGet("empreendedores");
};

// exporta a função que busca por um empreendedor específico pelo id
export const getEmpreendedorById = (empreendedorId) => {
  return apiGet(`empreendedores/${empreendedorId}`);
};

// exporta a função que faz o post para criar um novo empreendedor
export const createEmpreendedor = (newEmpreendedor) => {
  return apiPost("empreendedores", newEmpreendedor);
};

// exporta a função que atualiza os dados de um empreendedor
export const updateEmpreendedor = (empreendedorId, UpdateEmpreendedor) => {
  return apiPut(`empreendedores/${empreendedorId}`, UpdateEmpreendedor);
};

// exporta a função que remove um empreendedor do banco de dados
export const deleteEmpreendedor = (empreendedorId) => {
  return apiDelete(`empreendedores/${empreendedorId}`);
};
