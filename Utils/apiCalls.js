// utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const apiGet = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter dados da API (${endpoint}):`, error);
    throw error;
  }
};

export const apiPost = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao enviar dados para a API (${endpoint}):`, error);
    throw error;
  }
};

export const apiPut = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar dados na API (${endpoint}):`, error);
    throw error;
  }
};

export const apiDelete = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir dados na API (${endpoint}):`, error);
    throw error;
  }
};
