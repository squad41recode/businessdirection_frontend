// apiCalls/empreendedor.js
import { apiGet, apiPost, apiPut, apiDelete } from "@/utils/apiCalls";

export const EmpreendedorAtributtes = [
  {
    id: "id",
    label: "ID",
    type: "text",
  },
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "sobrenome",
    label: "Sobrenome",
    type: "text",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
  },
  {
    id: "telefone",
    label: "Telefone",
    type: "text",
  },
  // {
  //   id: "dataNascimento",
  //   label: "Nascimento",
  //   type: "date",
  // },
  {
    id: "nomeEmpresa",
    label: "Nome da Empresa",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
  // {
  //   id: "bairro",
  //   label: "Bairro",
  //   type: "text",
  // },
  // { 
  //   id: "cep", 
  //   label: "CEP", 
  //   type: "text" 
  // },
];


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
