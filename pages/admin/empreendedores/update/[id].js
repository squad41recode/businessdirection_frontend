// pages/admin/empreendedores/update/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import FormCreateUpdateDelete from "@/components/dashboard/FormCreateUpdateDelete";
import {
  getEmpreendedorById,
  updateEmpreendedor,
} from "@/apiCalls/empreendedor";

const UpdateEmpreendedor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [empreendedorData, setEmpreendedorData] = useState({
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
  });

  useEffect(() => {
    if (id) {
      // carrega os dados do empreendedor pelo id ao montar o componente
      getEmpreendedorById(id)
        .then((response) => {
          setEmpreendedorData(response);
        })
        .catch((error) => {
          console.error("Erro ao obter empreendedor por ID:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e, field) => {
    setEmpreendedorData({ ...empreendedorData, [field]: e.target.value });
  };

  const handleFormSubmit = () => {
    // chama a função de atualização da API passando os dados do formulário
    updateEmpreendedor(id, empreendedorData)
      .then((response) => {
        console.log("Empreendedor atualizado com sucesso:", response);
        router.push("/admin/empreendedores");
      })
      .catch((error) => {
        alert("Erro ao atualizar empreendedor:", error);
      });
  };

  return (
    <FormCreateUpdateDelete
      title="Atualizar Empreendedor"
      linkHref="/admin/empreendedores"
      linkText="Voltar para a Lista de Empreendedores"
      formData={[
        {
          id: "nome",
          label: "Nome",
          value: empreendedorData.nome,
          type: "text",
        },
        {
          id: "sobrenome",
          label: "Sobrenome",
          value: empreendedorData.sobrenome,
          type: "text",
        },
        {
          id: "email",
          label: "E-mail",
          value: empreendedorData.email,
          type: "email",
        },
        {
          id: "telefone",
          label: "Telefone",
          value: empreendedorData.telefone,
          type: "tel",
        },
        {
          id: "dataNascimento",
          label: "Data de Nascimento",
          value: empreendedorData.dataNascimento,
          type: "date",
        },
        {
          id: "nomeEmpresa",
          label: "Nome da Empresa",
          value: empreendedorData.nomeEmpresa,
          type: "text",
        },
        {
          id: "cidade",
          label: "Cidade",
          value: empreendedorData.cidade,
          type: "text",
        },
        {
          id: "estado",
          label: "Estado",
          value: empreendedorData.estado,
          type: "text",
        },
        {
          id: "bairro",
          label: "Bairro",
          value: empreendedorData.bairro,
          type: "text",
        },
        { id: "cep", label: "CEP", value: empreendedorData.cep, type: "text" },
      ]}
      handleInputChange={handleInputChange}
      handleFormSubmitOrDelete={handleFormSubmit}
      buttonText="Atualizar"
      backLink="/admin/empreendedores"
    />
  );
};

export default UpdateEmpreendedor;
