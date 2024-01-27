import React from "react";
import ListSection from "@/components/dashboard/ListSection";
import { apiGet } from "@/utils/apiCalls";
import { MentoriaAtributtes } from "@/apiCalls/mentorias-disponiveis";

const MentoriasPage = ({ mentoriasDisponiveis }) => {
  return (
    <ListSection
      title="Mentorias Disponíveis"
      endpoint="mentorias-disponiveis"
      //linkText="Mentoria"
      data={mentoriasDisponiveis}
      columns={MentoriaAtributtes}
      entityName={"Mentoria"}
    />
  );
};

export async function getStaticProps() {
  const mentoriasDisponiveis = await apiGet("mentorias-disponiveis");

  return {
    props: {
      mentoriasDisponiveis,
    },
  };
}

export default MentoriasPage;
