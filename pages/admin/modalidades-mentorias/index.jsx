import React from "react";
import ListSection from "@/components/dashboard/ListSection";
import { apiGet } from "@/utils/apiCalls";
import { ModalidadeMentoriaAtributtes } from "@/apiCalls/modalidades-mentorias";

const ModalidadeMentoriaPage = ({ modalidadesMentoria }) => {
  return (
    <ListSection
      title="Modalidades mentorias"
      endpoint="modalidades-mentorias"
      data={modalidadesMentoria}
      columns={ModalidadeMentoriaAtributtes}
      entityName={"Modalidade mentoria"}
    />
  );
};

export async function getStaticProps() {
  const modalidadesMentoria = await apiGet("modalidades-mentorias");

  return {
    props: {
      modalidadesMentoria,
    },
  };
}

export default ModalidadeMentoriaPage;
