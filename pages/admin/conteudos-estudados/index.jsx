import React from "react";
import ListSection from "@/components/dashboard/ListSection";
import { apiGet } from "@/utils/apiCalls";
import { ConteudoEstudadoAtributtes } from "@/apiCalls/conteudos-estudados";

const ConteudosEstudadosPage = ({ conteudosEstudados }) => {
  return (
    <ListSection
      title="Conteúdos estudados"
      endpoint="conteudos-estudados"
      data={conteudosEstudados}
      columns={ConteudoEstudadoAtributtes}
      entityName={"Conteúdo estudado"}
    />
  );
};

export async function getStaticProps() {
  const conteudosEstudados = await apiGet("conteudos-estudados");

  return {
    props: {
      conteudosEstudados,
    },
  };
}

export default ConteudosEstudadosPage;
