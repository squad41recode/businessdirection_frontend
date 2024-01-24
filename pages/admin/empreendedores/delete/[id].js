// pages/admin/empreendedores/update/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import FormCreateUpdateDelete from "@/components/dashboard/FormCreateUpdateDelete";
import {
  deleteEmpreendedor,
  getEmpreendedorById,
} from "@/apiCalls/empreendedor";

const DeleteEmpreendedor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [empreendedorData, setEmpreendedorData] = useState({ id });

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

  const handleDelete = () => {
    // chama a função de atualização da API passando os dados do formulário
    deleteEmpreendedor(id)
      .then((response) => {
        console.log("Empreendedor excluido com sucesso:", response);
        router.push("/admin/empreendedores");
      })
      .catch((error) => {
        alert("Erro ao atualizar empreendedor:", error);
      });
  };

  return (
    <FormCreateUpdateDelete
      title="Excluir Empreendedor"
      linkHref="/admin/empreendedores"
      linkText="Voltar para a Lista de Empreendedores"
      formData={[
        {
          id: "id",
          label: "Id do Empreendedor",
          value: empreendedorData.id,
          type: "text",
        },
      ]}
      handleInputChange={handleInputChange}
      handleFormSubmitOrDelete={handleDelete}
      buttonText="Delete"
      backLink="/admin/empreendedores"
    />
  );
};

export default DeleteEmpreendedor;
