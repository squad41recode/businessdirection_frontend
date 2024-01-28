import { useState } from "react";
import FormCreateUpdateDelete from "@/components/dashboard/FormCreateUpdateDelete";
import { createEmpreendedor } from "@/apiCalls/empreendedor";

const initialFormData = {
  nome: "",
  sobrenome: "",
  email: "",
  telefone: "",
  dataNascimento: "",
  nomeEmpresa: "",
  cidade: "",
  estado: "",
  bairro: "",
  cep: "",
};

const CreateEmpreendedor = () => {
  const [newEmpreendedor, setNewEmpreendedor] = useState(initialFormData);

  const handleInputChange = (e) => {
    setNewEmpreendedor({ ...newEmpreendedor, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    // chama a função de criação da API passando os dados do formulário
    createEmpreendedor(newEmpreendedor)
      .then((response) => {
        console.log("Empreendedor criado com sucesso:", response);
      })
      .catch((error) => {
        console.error("Erro ao criar empreendedor:", error);
      });
  };

  return (
    <FormCreateUpdateDelete
      title="Empreendedor"
      endpoint="empreendedores"
      // linkText="Voltar para a Lista de Empreendedores"
      const
      formData={[
        {
          id: "nome",
          label: "Nome",
          value: newEmpreendedor.nome,
          type: "text",
        },
        {
          id: "sobrenome",
          label: "Sobrenome",
          value: newEmpreendedor.sobrenome,
          type: "text",
        },
        {
          id: "email",
          label: "E-mail",
          value: newEmpreendedor.email,
          type: "email",
        },
        {
          id: "telefone",
          label: "Telefone",
          value: newEmpreendedor.telefone,
          type: "text",
        },
        {
          id: "dataNascimento",
          label: "Data de Nascimento",
          value: newEmpreendedor.dataNascimento,
          type: "date",
        },
        {
          id: "nomeEmpresa",
          label: "Nome da Empresa",
          value: newEmpreendedor.nomeEmpresa,
          type: "text",
        },
        {
          id: "cidade",
          label: "Cidade",
          value: newEmpreendedor.cidade,
          type: "text",
        },
        {
          id: "estado",
          label: "Estado",
          value: newEmpreendedor.estado,
          type: "text",
        },
        {
          id: "bairro",
          label: "Bairro",
          value: newEmpreendedor.bairro,
          type: "text",
        },
        { id: "cep", label: "CEP", value: newEmpreendedor.cep, type: "text" },
      ]}
      handleInputChange={handleInputChange}
      handleFormSubmitOrDelete={handleFormSubmit}
      buttonText="Enviar"
      backLink="/admin/empreendedores"
    />
  );
};

export default CreateEmpreendedor;
